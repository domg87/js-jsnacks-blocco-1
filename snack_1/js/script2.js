// l'utente inserisce due numeri in successione, se il primo è maggiore del secondo lo stampo il primo, se il secondo è maggiore del pri mo, stampo il secondo, altrimenti sono uguali

// inserisci il primo numero
var primoNumero = parseInt(prompt("inserisci il primo numero"));
// inserisci il secondo numero
var secondoNumero = parseInt(prompt("inserisci il secondo numero"));


if (primoNumero > secondoNumero) {
console.log(primoNumero);
} else if (secondoNumero >  primoNumero) {
  console.log(secondoNumero);
} else {
  console.log(primoNumero + secondoNumero);
}
