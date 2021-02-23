//chiedi all’utente la sua email, 
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

var emailList = ["gmail","hotmail","yahoo", "outlook"];
console.log(emailList);

var inserisciEmail = prompt ("Inserisci la tua email");
console.log(inserisciEmail);

//verifica email hce hanno accesso
if (inserisciEmail == (emailList[0]) || inserisciEmail == (emailList[1]) || inserisciEmail == (emailList[2]) || inserisciEmail == (emailList[3])) {
    console.log("Benvenuto");
    alert("Benvenuto");
}
else {
    alert("Non sei abilitato all'accesso");
}

//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
//Stabilire il vincitore, in base a chi fa il punteggio più alto.