//chiedi all’utente la sua email, 
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

var inserisciEmail = prompt ("Inserisci la tua email");
var email = ["gmail","hotmail","yahoo","icloud", "outlook"];
email [0] = "gmail";
email [1] = "hotmail";
email [2] = "icloud";
email [3] = "outlook";

if (inserisciEmail = email); {
    alert ("Email corretta");
    document.getElementById('benvenuto').innerHTML = "Benvenuto ";
} 
//else if (inserisciEmail != email); {
    //alert ("Devi inserire un indirizzo mail corretto");
//}
//document.getElementById('non-abilitato').innerHTML = "Devi inserire un indirizzo mail corretto";






//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
//Stabilire il vincitore, in base a chi fa il punteggio più alto.