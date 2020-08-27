// chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre
// che compongono il numero
var num = prompt("inserisci un numero di almeno 4 cifre");

var totale = 0;


for(var i = 0; i < num.length; i++ ) {
  totale += parseInt(num[i]);
}

console.log(totale);
