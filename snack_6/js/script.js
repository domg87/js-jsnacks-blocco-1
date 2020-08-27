// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

// 1. creare array invitati
var list = ["Pino", "Mario", "Albano", "Franco"];
list.push(list);

// 2. chiedi all'utente il suo nome e comunica se può partecipare con un prompt
var utenteList = false;

var utente = prompt("Inserisci il tuo nome");
for(var i = 0; i < list.length; i++){
  if(utente == list[i]) {
    list = true;
    alert("Benvenuto");
  }
}

if(utente == true){
  alert("utente trovato");
} else {
  alert("utente non trovato");
}

// oppure
