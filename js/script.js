//!DATI DEL FORM
const form = document.querySelector("form");
const inputNome = document.getElementById("inputNome");
const inputCognome = document.getElementById("inputCognome");
const inputEta = document.getElementById("inputEta'");
const inputChilometri = document.getElementById("inputChilometri");

//? DATI DEL BIGLIETTO

const nome = document.getElementById("nome");
const cognome = document.getElementById("cognome");
const eta = document.getElementById("eta'");
const chilometri = document.getElementById("chilometri");
const prezzo = document.getElementById("prezzoBiglietto")



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const prezzoBiglietto = inputChilometri.value * 0.21;
    let prezzoFinale;
    let sconto;

    if (inputEta.value < 18) {
        sconto = (prezzoBiglietto * 20) / 100;
        prezzoFinale = prezzoBiglietto - sconto;
    } else if (inputEta.value > 65) {
        sconto = (prezzoBiglietto * 40) / 100;
        prezzoFinale = prezzoBiglietto - sconto;
    }

    prezzoFinale = prezzoFinale.toFixed(2);

    nome.textContent= inputNome.value;
    cognome.textContent= inputCognome.value;
    eta.textContent= inputEta.value;
    chilometri.textContent= inputChilometri.value;
    prezzo.textContent= prezzoFinale;

})
















