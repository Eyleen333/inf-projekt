const perle = document.querySelectorAll(".perle");
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


spielAnfangen()
function spielAnfangen() {
    perle.forEach(perle => perle.addEventListener("click", perleGecklickt));
    neuesSpiel.addEventListener("click", neuesSpielLaden);
    running = true;
}
function perleGecklickt() {
    const perleNummer = Number(this.getAttribute("nummer"));
    const schwarzDivs = document.querySelectorAll(".perleS");
    const orangeDivs = document.querySelectorAll(".perleO");
    anzahlSchwarz = getNumbers(schwarzDivs);
    anzahlOrange = getNumbers(orangeDivs);
    const besetzt = anzahlSchwarz.concat(anzahlOrange);
    console.log(anzahlSchwarz);
    console.log(anzahlOrange);
    if(perleNummer % 4 == 0) {
        perleUpdaten(this, perleNummer, besetzt); 
        spielerWechseln();
        suchGewonnen(perleNummer, anzahlSchwarz, anzahlOrange, besetzt);
    }
    else if(besetzt.includes(perleNummer + 1)) {
        perleUpdaten(this, perleNummer, besetzt); 
        spielerWechseln();
        suchGewonnen(perleNummer, anzahlSchwarz, anzahlOrange, besetzt);
    }
    else {
        return
    }
}
function PerleNochMal() {
    const perleNummer = Number(this.getAttribute("nummer"));
    const schwarzDivs = document.querySelectorAll(".perleS");
    const orangeDivs = document.querySelectorAll(".perleO");
    anzahlSchwarz = getNumbers(schwarzDivs);
    anzahlOrange = getNumbers(orangeDivs);
    const besetzt = anzahlSchwarz.concat(anzahlOrange);
    console.log(anzahlSchwarz);
    console.log(anzahlOrange);
    if(perleNummer % 4 == 0) {
        perleUpdaten(this, perleNummer, besetzt); 
        suchGewonnen(perleNummer, anzahlSchwarz, anzahlOrange, besetzt);
    }
    else if(besetzt.includes(perleNummer + 1)) {
        perleUpdaten(this, perleNummer, besetzt); 
        suchGewonnen(perleNummer, anzahlSchwarz, anzahlOrange, besetzt);
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
function perleUpdaten(perle, perleNummer, besetzt) {
    if(besetzt.includes(perleNummer)) {
        Status.textContent = `Hier ist schon eine Perle!`;
        PerleNochMal();
    }
    else if(amZug == schwarz) {
        perle.classList.add("perleS");
    }
    else if(amZug == orange) {
        perle.classList.add("perleO");
    }
}
function suchGewonnen(perleNummer, anzahlSchwarz, anzahlOrange, besetzt) {
    suchSenkrecht(perleNummer, anzahlSchwarz, anzahlOrange, besetzt); 
}
function suchSenkrecht(perleNummer, anzahlSchwarz, anzahlOrange, besetzt) {
    Number(perleNummer);
    if(perleNummer % 4 == 1) {//0.75
        let a = perleNummer + 3;
        let b = perleNummer + 2;
        let c = perleNummer + 1;
        const senkrecht = [a, b, c];
       // d = perleNummer; 
    }
    if(anzahlSchwarz.includes(senkrecht)) {
        Status.textContent = `Schwarz hat gewonnen!`;
        console.log("gewonnenS");
        neuesSpielLaden(anzahlSchwarz, anzahlOrange);
    }
    if(anzahlOrange.includes(senkrecht)){
        Status.textContent = `Orange hat gewonnen!`;
        console.log("gewonnenO");
        neuesSpielLaden(anzahlSchwarz, anzahlOrange);
    }
}

function gewonnen() {


}
function neuesSpielLaden(anzahlSchwarz, anzahlOrange) {
    anzahlOrange.classList.remove("perleO");
    anzahlSchwarz.classList.remove("perleS");
}