const perlen = document.querySelectorAll(".perle");
const schwarz = document.querySelectorAll(".perleS");
const orange = document.querySelectorAll(".perleO");
const neuesSpiel = document.querySelector("#neuesSpiel");
const Status = document.querySelector("#status");


function getNumbers(elements) {
    let numbers = []
    for(let e of elements) {
        numbers.push(Number(e.getAttribute("nummer")))
    }
    return numbers
}

let running = false;
amZug = orange;
Status.textContent = `Orange beginnt`;



spielAnfangen()
function spielAnfangen() {
    perlen.forEach(perlen => perlen.addEventListener("click", perleGecklickt));
    neuesSpiel.addEventListener("click", neuesSpielLaden);
    running = true;
}
function perleGecklickt() {
    const perleNummer = Number(this.getAttribute("nummer"));
    const stabNummer = Number(this.getAttribute("nummerS"));
    const schwarzDivs = document.querySelectorAll(".perleS");
    const orangeDivs = document.querySelectorAll(".perleO");
    anzahlSchwarze = getNumbers(schwarzDivs);
    anzahlOrangene = getNumbers(orangeDivs);
    ListeNummer = [perleNummer];
    if(amZug == orange) {
        anzahlOrange = ListeNummer.concat(anzahlOrangene);
        anzahlSchwarz = anzahlSchwarze;
    }
    if(amZug == schwarz) {
        anzahlOrange = anzahlOrangene;
        anzahlSchwarz = ListeNummer.concat(anzahlSchwarze);
    }
    const besetztOhne = anzahlSchwarze.concat(anzahlOrangene);
    const besetzt = anzahlSchwarz.concat(anzahlOrange);
    if(perleNummer % 4 == 0) {
        perleUpdaten(this, perleNummer, besetztOhne); 
        spielerWechseln();
        suchGewonnen(perleNummer, stabNummer);
    }
    else if(besetzt.includes(perleNummer + 1)) {
        perleUpdaten(this, perleNummer, besetztOhne); 
        spielerWechseln();
        suchGewonnen(perleNummer, stabNummer);
    }
    else {
        return
    }
}
function PerleNochMal() {
    const perleNummer = Number(this.getAttribute("nummer"));
    const stabNummer = Number(this.getAttribute("nummerS"));
    const schwarzDivs = document.querySelectorAll(".perleS");
    const orangeDivs = document.querySelectorAll(".perleO");
    anzahlSchwarze = getNumbers(schwarzDivs);
    anzahlOrangene = getNumbers(orangeDivs);
    ListeNummer = [perleNummer]
    if(amZug == orange) {
        anzahlOrange = ListeNummer.concat(anzahlOrangene);
        anzahlSchwarz = anzahlSchwarze;
    }
    if(amZug == schwarz) {
        anzahlOrange = anzahlOrangene;
        anzahlSchwarz = ListeNummer.concat(anzahlSchwarze);
    }
    const besetztOhne = anzahlSchwarze.concat(anzahlOrangene);
    const besetzt = anzahlSchwarz.concat(anzahlOrange);
    if(perleNummer % 4 == 0) {
        perleUpdaten(this, perleNummer, besetztOhne); 
        suchGewonnen(perleNummer, stabNummer);
    }
    else if(besetzt.includes(perleNummer + 1)) {
        perleUpdaten(this, perleNummer, besetztOhne); 
        suchGewonnen(perleNummer, stabNummer);
    }
    else {
        return
    }

}
function spielerWechseln() {
    if(amZug == schwarz) {
        amZug = orange;
        Status.textContent = `Orange ist am Zug`;
    }
    else {
        amZug = schwarz;
        Status.textContent = `Schwarz ist am Zug`;
    }
}
function perleUpdaten(perlen, perleNummer, besetztOhne) {
    if(besetztOhne.includes(perleNummer)) {
        Status.textContent = `Hier ist schon eine Perle!`;
        PerleNochMal();
    }
    else if(amZug == schwarz) {
        perlen.classList.add("perleS");
    }
    else if(amZug == orange) {
        perlen.classList.add("perleO");
    }
}
function suchGewonnen(perleNummer, stabNummer) {
    Turm(perleNummer); 
    ReiheRechts(perleNummer, stabNummer);
    ReiheLinks(perleNummer, stabNummer);
    ReiheDiagonalSenkrecht(perleNummer, stabNummer);
    ReiheDiagonalWaagerecht(perleNummer, stabNummer);
    treppeRechtsHoch(perleNummer, stabNummer);
    treppeRechtsRunter(perleNummer, stabNummer);
    treppeLinksHoch(perleNummer, stabNummer);
    treppeLinksRunter(perleNummer, stabNummer);
    treppeDiagonalSenkrechtHoch(perleNummer, stabNummer);
    treppeDiagnoalSenkrechtRunter(perleNummer, stabNummer);
    treppeDiagonalWaagerechtHoch(perleNummer, stabNummer);
    treppeDiagonalWaagerechtRunter(perleNummer, stabNummer);
    
}
function Turm(perleNummer) {
    if(perleNummer % 4 == 1) {//0.75
        let a = perleNummer + 3;
        let b = perleNummer + 2;
        let c = perleNummer + 1;
        let d = perleNummer; 
        gewonnenFrage(a, b, c, d);
    }
}
function ReiheRechts(perleNummer, stabNummer) {
    if(stabNummer % 4 == 1) {
        let a = perleNummer;
        let b = perleNummer + 4;
        let c = perleNummer + 8;
        let d = perleNummer + 12;
        gewonnenFrage(a, b, c, d);
    }
    if(stabNummer % 4 == 2) {
        let a = perleNummer - 4;
        let b = perleNummer;
        let c = perleNummer + 4;
        let d = perleNummer + 8;
        gewonnenFrage(a, b, c, d);
    }
    if(stabNummer % 4 == 3) {
        let a = perleNummer - 8; 
        let b = perleNummer - 4; 
        let c = perleNummer; 
        let d = perleNummer + 4;
        gewonnenFrage(a, b, c, d); 
    }
    if(stabNummer % 4 == 0) {
        let a = perleNummer - 12; 
        let b = perleNummer - 8;
        let c = perleNummer - 4; 
        let d = perleNummer;
        gewonnenFrage(a, b, c, d);
    }
}
function ReiheLinks(perleNummer, stabNummer) {
    if(stabNummer > 0 && stabNummer < 5) {
        let a = perleNummer;
        let b = perleNummer + 16;
        let c = perleNummer + 32;
        let d = perleNummer + 48;
        gewonnenFrage(a, b, c, d);
    }
    if(stabNummer > 4 && stabNummer < 9) {
        let a = perleNummer - 16;
        let b = perleNummer;
        let c = perleNummer + 16;
        let d = perleNummer + 32;
        gewonnenFrage(a, b, c, d);
    }
    if(stabNummer > 8 && stabNummer < 13) {
        let a = perleNummer - 32; 
        let b = perleNummer - 16; 
        let c = perleNummer; 
        let d = perleNummer + 16;
        gewonnenFrage(a, b, c, d); 
    }
    if(stabNummer > 12 && stabNummer < 17) {
        let a = perleNummer - 48; 
        let b = perleNummer - 32;
        let c = perleNummer - 16; 
        let d = perleNummer;
        gewonnenFrage(a, b, c, d);
    }
}
function ReiheDiagonalSenkrecht(perleNummer, stabNummer) {
    if(stabNummer == 1) {
        let a = perleNummer;
        let b = perleNummer + 20;
        let c = perleNummer + 40;
        let d = perleNummer + 60;
        gewonnenFrage(a, b, c, d);
    }
    if(stabNummer == 6) {
        let a = perleNummer - 20;
        let b = perleNummer;
        let c = perleNummer + 20;
        let d = perleNummer + 40;
        gewonnenFrage(a, b, c, d);
    }
    if(stabNummer == 11) {
        let a = perleNummer - 40; 
        let b = perleNummer - 20; 
        let c = perleNummer; 
        let d = perleNummer + 20;
        gewonnenFrage(a, b, c, d); 
    }
    if(stabNummer == 16) {
        let a = perleNummer - 60; 
        let b = perleNummer - 40;
        let c = perleNummer - 20; 
        let d = perleNummer;
        gewonnenFrage(a, b, c, d);
    }
}
function ReiheDiagonalWaagerecht(perleNummer, stabNummer) {
    if(stabNummer == 4) {
        let a = perleNummer;
        let b = perleNummer + 12;
        let c = perleNummer + 24;
        let d = perleNummer + 36;
        gewonnenFrage(a, b, c, d);
    }
    if(stabNummer == 7) {
        let a = perleNummer - 12;
        let b = perleNummer;
        let c = perleNummer + 12;
        let d = perleNummer + 24;
        gewonnenFrage(a, b, c, d);
    }
    if(stabNummer == 10) {
        let a = perleNummer - 24; 
        let b = perleNummer - 12; 
        let c = perleNummer; 
        let d = perleNummer + 12;
        gewonnenFrage(a, b, c, d); 
    }
    if(stabNummer == 13) {
        let a = perleNummer - 36; 
        let b = perleNummer - 24;
        let c = perleNummer - 12; 
        let d = perleNummer;
        gewonnenFrage(a, b, c, d);
    }
}
function treppeRechtsHoch(perleNummer, stabNummer) {
    if(stabNummer % 4 == 1) {
        let a = perleNummer;
        let b = perleNummer + 3;
        let c = perleNummer + 6;
        let d = perleNummer + 9;
        Level(perleNummer, a, b, c, d);
        
    }
    if(stabNummer % 4 == 2) {
        let a = perleNummer - 3;
        let b = perleNummer;
        let c = perleNummer + 3;
        let d = perleNummer + 6;
        Level(perleNummer, a, b, c, d);
        
    }
    if(stabNummer % 4 == 3) {
        let a = perleNummer - 6; 
        let b = perleNummer - 3; 
        let c = perleNummer; 
        let d = perleNummer + 3;
        Level(perleNummer, a, b, c, d);
         
    }
    if(stabNummer % 4 == 0) {
        let a = perleNummer - 9; 
        let b = perleNummer - 6;
        let c = perleNummer - 3; 
        let d = perleNummer;
        Level(perleNummer, a, b, c, d);
        
    }
}
function treppeRechtsRunter(perleNummer, stabNummer) {
    if(stabNummer % 4 == 1) {
        let d = perleNummer;
        let c = perleNummer + 5;
        let b = perleNummer + 10;
        let a = perleNummer + 15;
        Level(perleNummer, a, b, c, d);
        
    }
    if(stabNummer % 4 == 2) {
        let d = perleNummer - 5;
        let c = perleNummer;
        let b = perleNummer + 5;
        let a = perleNummer + 10;
        Level(perleNummer, a, b, c, d);
        
    }
    if(stabNummer % 4 == 3) {
        let d = perleNummer - 10; 
        let c = perleNummer - 5; 
        let b = perleNummer; 
        let a = perleNummer + 5;
        Level(perleNummer, a, b, c, d);
         
    }
    if(stabNummer % 4 == 0) {
        let d = perleNummer - 15; 
        let c = perleNummer - 10;
        let b = perleNummer - 5; 
        let a = perleNummer;
        Level(perleNummer, a, b, c, d);
        
    }
}
function treppeLinksHoch(perleNummer, stabNummer) {
    if(stabNummer > 0 && stabNummer < 5) {
        let a = perleNummer;
        let b = perleNummer + 15;
        let c = perleNummer + 30;
        let d = perleNummer + 45;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer > 4 && stabNummer < 9) {
        let a = perleNummer - 15;
        let b = perleNummer;
        let c = perleNummer + 15;
        let d = perleNummer + 30;
        Level(perleNummer, a, b, c, d);
        
    }
    if(stabNummer > 8 && stabNummer < 13) {
        let a = perleNummer - 30; 
        let b = perleNummer - 15; 
        let c = perleNummer; 
        let d = perleNummer + 15;
        Level(perleNummer, a, b, c, d);
         
    }
    if(stabNummer > 12 && stabNummer < 17) {
        let a = perleNummer - 45; 
        let b = perleNummer - 30;
        let c = perleNummer - 15; 
        let d = perleNummer;
        Level(perleNummer, a, b, c, d);
    }
}
function treppeLinksRunter(perleNummer, stabNummer) {
    if(stabNummer > 0 && stabNummer < 5) {
        let d = perleNummer;
        let c = perleNummer + 17;
        let b = perleNummer + 34;
        let a = perleNummer + 51;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer > 4 && stabNummer < 9) {
        let d = perleNummer - 17;
        let c = perleNummer;
        let b = perleNummer + 17;
        let a = perleNummer + 34;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer > 8 && stabNummer < 13) {
        let d = perleNummer - 34; 
        let c = perleNummer - 17; 
        let b = perleNummer; 
        let a = perleNummer + 17;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer > 12 && stabNummer < 17) {
        let d = perleNummer - 51; 
        let c = perleNummer - 34;
        let b = perleNummer - 17; 
        let a = perleNummer;
        Level(perleNummer, a, b, c, d);
    }
}
function treppeDiagonalSenkrechtHoch(perleNummer, stabNummer) {
    if(stabNummer == 1) {
        let a = perleNummer;
        let b = perleNummer + 19;
        let c = perleNummer + 38;
        let d = perleNummer + 57;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer == 6) {
        let a = perleNummer - 19;
        let b = perleNummer;
        let c = perleNummer + 19;
        let d = perleNummer + 38;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer == 11) {
        let a = perleNummer - 38; 
        let b = perleNummer - 19; 
        let c = perleNummer; 
        let d = perleNummer + 19;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer == 16) {
        let a = perleNummer - 57; 
        let b = perleNummer - 38;
        let c = perleNummer - 19; 
        let d = perleNummer;
        Level(perleNummer, a, b, c, d);
    }
}
function treppeDiagnoalSenkrechtRunter(perleNummer, stabNummer) {
    if(stabNummer == 1) {
        let d = perleNummer;
        let c = perleNummer + 21;
        let b = perleNummer + 42;
        let a = perleNummer + 63;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer == 6) {
        let d = perleNummer - 21;
        let c = perleNummer;
        let b = perleNummer + 21;
        let a = perleNummer + 42;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer == 11) {
        let c = perleNummer - 42; 
        let d = perleNummer - 21; 
        let b = perleNummer; 
        let a = perleNummer + 21;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer == 16) {
        let d = perleNummer - 63; 
        let c = perleNummer - 42;
        let b = perleNummer - 21; 
        let a = perleNummer;
        Level(perleNummer, a, b, c, d);
    }
}
function treppeDiagonalWaagerechtHoch(perleNummer, stabNummer) {
    // liest von rechts nach links anstatt von links nach rechts, daher reihenfolge a-d vertauscht
    if(stabNummer == 4) {
        let d = perleNummer;
        let c = perleNummer + 13;
        let b = perleNummer + 26;
        let a = perleNummer + 39;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer == 7) {
        let d = perleNummer - 13;
        let c = perleNummer;
        let b = perleNummer + 13;
        let a = perleNummer + 26;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer == 10) {
        let d = perleNummer - 26; 
        let c = perleNummer - 13; 
        let b = perleNummer; 
        let a = perleNummer + 13;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer == 13) {
        let d = perleNummer - 39; 
        let c = perleNummer - 26;
        let b = perleNummer - 13; 
        let a = perleNummer;
        Level(perleNummer, a, b, c, d);
    }
}
function treppeDiagonalWaagerechtRunter(perleNummer, stabNummer) {
    if(stabNummer == 4) {
        let a = perleNummer;
        let b = perleNummer + 11;
        let c = perleNummer + 22;
        let d = perleNummer + 33;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer == 7) {
        let a = perleNummer - 11;
        let b = perleNummer;
        let c = perleNummer + 11;
        let d = perleNummer + 22;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer == 10) {
        let a = perleNummer - 22; 
        let b = perleNummer - 11; 
        let c = perleNummer; 
        let d = perleNummer + 11;
        Level(perleNummer, a, b, c, d);
    }
    if(stabNummer == 13) {
        let a = perleNummer - 33; 
        let b = perleNummer - 22;
        let c = perleNummer - 11; 
        let d = perleNummer;
        Level(perleNummer, a, b, c, d);
    }
}
function Level(perleNummer, a, b, c, d) {
    if(perleNummer % 4 == 0) {// level 1 
        let A = perleNummer;
        if(A == a) {
            gewonnenFrage(a, b, c, d);
        }
    }
    if(perleNummer % 4 == 3) {// level 2
        let B = perleNummer;
        if(B == b) {
            gewonnenFrage(a, b, c, d);
        }
    }
    if(perleNummer % 4 == 2) {// level 3
       let C = perleNummer;
       if(C == c) {
        gewonnenFrage(a, b, c, d);
    }
    }
    if(perleNummer % 4 == 1) {// level 4
        let D = perleNummer; 
        if(D == d) {
            gewonnenFrage(a, b, c, d);
        }
    }
}
function gewonnenFrage(a, b, c, d) {
    const Liste = [a, b, c, d];
    let count = 0;
    for(l in Liste) {
        if(anzahlSchwarz.includes(Liste[l])) {
            count += 1;
        }
        if(anzahlOrange.includes(Liste[l])) {
            count -= 1;

        }
    }
    if(count == 4) {
        Status.textContent = `Schwarz hat gewonnen!`;
        console.log("gewonnenS");
        gewonnen();
    }
    if(count == -4){
        Status.textContent = `Orange hat gewonnen!`;
        console.log("gewonnenO");
        gewonnen(); 
    }
}
function gewonnen() {
    neuesSpielLaden();
}
function neuesSpielLaden() {
    for(let p of perlen) {
        p.classList.remove("perleS");
        p.classList.remove("perleO");
        amZug = orange
        Status.textContent = `Orange beginnt`
    }
}