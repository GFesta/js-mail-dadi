//chiedi all’utente la sua email, 
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

var emailList = ["gmail","hotmail","yahoo", "outlook"];
console.log(emailList);

var inserisciEmail = prompt ("Inserisci la tua email");
console.log(inserisciEmail);

//verifica email che hanno accesso e quelle che non lo sono 
if (inserisciEmail == (emailList[0]) || inserisciEmail == (emailList[1]) || inserisciEmail == (emailList[2]) || inserisciEmail == (emailList[3])) {
    console.log("Benvenuto");
    alert("Benvenuto");
    document.getElementById("text-1").innerHTML = "Benvenuto Utente " + inserisciEmail;
}
else {
    alert("Non sei abilitato all'accesso");
    document.getElementById("text-2").innerHTML = "Accesso negato";
}




//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Player
var  player  =  ((Math . random ( ) * 5)  +  1) . toFixed ( 0 ) ;
console.log ("Il giocatore ha lanciato "  +  (player));
//Computer
var  computer  =  ((Math . random ( ) * 5)  +  1) . toFixed ( 0 ) ;
console.log ("Il computer ha lanciato "  +  (computer));

//VERIFICA CONDIZIONI DEL GIOCO
if  (player  >  computer)  {
    console.log ("Il giocatore ha vinto");
}
else  if  (player  ==  computer)  {
    console.log ("Pari");
}
else  {
    console.log ("Il computer ha vinto");
}