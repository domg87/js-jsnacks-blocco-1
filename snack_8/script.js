// stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente
var num = parseInt(prompt("inserisci un numero"));

for(var i = 1; i <= num; i++ ) {
  var potenza = Math.pow(i, 3);
  console.log(potenza);
}

// per calcolare la potenza di un numero Math.pow(base, esponente);
