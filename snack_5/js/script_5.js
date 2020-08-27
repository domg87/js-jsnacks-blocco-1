//genera un numero casuale e poi stampalo se è pari nel box rosso altrimenti in nel box verde

// generare numero casuale
var random = Math.floor(Math.random() * 10) + 1;
console.log("numero random" + random);


if (random % 2 == 0) {
  document.getElementById("rosso").innerHTML = random;
} else {
  document.getElementById("verde").innerHTML = random;
}
