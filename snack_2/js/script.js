//. l'utenteinserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta e poi la più lunga.

// chiedi all'utente di inserire la prima parola

var primaParola = prompt("inserisci la prima parola");

// chiedi all'utente di inserire la seconda parola
var secondaParola = prompt("inserisci la seconda parola");

// òa prima parola è più corta della seconda, stampo la prima e poi la seconda
// se la seconda è più corta della prima allora stampo la seconda
// hanno la stessa lunghezza

if (primaParola.length < secondaParola.length) {
  console.log(primaParola + secondaParola);
} else if (secondaParola.length < primaParola.length) {
  console.log(secondaParola + primaParola);
} else {
  console.log("sono uguali");
}
