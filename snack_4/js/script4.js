//Genera un numero casuale per il pc poi chiedi all’utente di inserire un numero con un prompt infine stampa la somma dei due numeri
var casuale = Math.floor(Math.random() * 10);
console.log(casuale);

var numero = parseInt(prompt("inserisci un numero"));
console.log(casuale + numero);
