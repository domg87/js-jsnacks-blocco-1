// inserisci un numero, se è pari stampalo, se è dispari stampa il numero successivo

// chiedi un numero all'utente
var numero = parseInt(prompt("inserisci un numero"));
// se il numero è pari stampa
// altrimenti stampa il successivo

if (numero % 2 == 0) {
  console.log(numero);
} else {
  console.log(numero + 1);
}
