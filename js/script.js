//due dati inseribili dall'utente
//chilometri da percorrere con il treno
let chilometri= prompt("inserisci qui i chilometri da percorrere");
chilometri = parseInt(chilometri);
//età del passeggero
let età= prompt("inserisci qui la tua età");
età = parseInt(età)

if( isNaN(chilometri) || isNaN(età)){
    console.log('i numeri inseriti non sono validi');
}else{
    console.log(`chilometri inseriti= ${chilometri} età inserita= ${età}`);
}

//prezzo del biglietto di 0.21 euro a km
const prezzoBiglietto= chilometri * 0.21;
//vanno applicati due tipi di sconti
//20% per utenti sotto ai 18 anni
//40% per utenti sopra i 65 anni
let sconto;
let prezzoFinale = prezzoBiglietto;

if(età < 18){
   sconto=(prezzoBiglietto * 20) / 100;
   prezzoFinale = prezzoBiglietto - sconto;
} else if(età > 65){
    sconto=(prezzoBiglietto * 40) / 100;
    prezzoFinale = prezzoBiglietto - sconto;
}

prezzoFinale = prezzoFinale.toFixed(2) 

console.log(`il prezzo finale del biglietto è ${prezzoFinale}€`);
//output deve essere approssimato a massimo 2 cifre sotto lo zero
