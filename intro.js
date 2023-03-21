// alert("Ciao!"); // Finestra pop-up con scritta
// confirm("Ok?"); // Crea finestra di conferma. Ok = true, Annulla = false
// prompt("Dammi il tuo nome"); //Finestra di inserimento
// let myVariable = prompt("dammi numero"); // assegna alla let il valore inserito
// alert(prompt("Digita nome")); chiede nome e poi mostra
// let myVar = prompt(" Digita il tuo nome" +  myVar, "John"); // mostra un prompt che assegna a myvar, con un valore esempio definito nella casella testo
// isNaN("a") = true isNaN(5) = false // is NOT a number 

// Il seguente codice confronta se quello che è stato inserito dall'utente è un numero o una stringa

/*
    let digita = prompt("Digita qualcosa");
    let result = isNaN(digita);
    if (result === true){
        alert("Non è un numero");
    }
    else{
        alert("È un numero");
    }
*/

// Il seguente codice confronta il numero con quello inserito. Se la prima condizione è falsa, passa al secondo if. Altrimenti continua in else

/*
    let result = prompt("Digita un numero", 0);
    if(result<10){
        alert("Minore di 10");
    }
    else if(result < 100){
        alert("Maggiore di 10 e minore di 100");
    }
    else{
        alert("Maggiore di 100");
    }
*/

// Ciclo while. Dichiaro una variabile e la faccio incrementare fino a quando non soddisfa la condizione nella parentesi, nel mentre stampa il risultato

/*
    let numero = 0;
    while(numero <= 12){
        console.log(numero);
        numero = numero + 1;    // Oppure: numero++; incrementa di +1
    }
*/

// Stesso ciclo while, ma quando esce stampa "terminato"
/*
    let counter = 0;
    while(counter <= 5){
        counter = counter + 1;    // Oppure: numero++; incrementa di +1
    }
    console.log("terminato");
*/

//  Stesso ciclo che mi stampa risultato res e counter in uscita

/*
    let counter = 0;
    let res = 5;
    while(counter <= 5){
        counter = counter + 1;    // Oppure: numero++; incrementa di +1
        res = res * 3;
    }
    console.log("terminato");
    console.log("res " + res);
    console.log("counter " + counter);
*/

// Ciclo DO WHILE

// Ciclo FOR. Dichiarazione, incremento)
/*
    var result = 10;
    for(let counter = 0; ; counter = counter + 1){
        console.log("Counter:" + counter);
        result = result * 3;

        if(counter == 5)
        {
            console.log("break");
            break; // esce dal ciclo
        }
    } 
*/

// Sintassi incremento variabile

/*
    result = result +1 // aggiunge + 1
    result++ // aggiungi +1
    result += 5 // aggiunge 5 di volta in volta

    result = result - 1 // sottrae 1
    result-- // sottrae 1
    result -= 5 // sottrae 5 di volta in volta

*/

// Switch case

var counter = prompt("digita un numero multiplo di 10");
switch(counter)
{
    case 10:
        alert("Hai digitato 10!");
        break
    case 20:
        alert("Hai digitato 20!");
        break");
    case 30: Talert("Hai digitato 30!");
    break
    default
    alert("Hai digitato un altro numwero", alerta , bibido
    )
}






/*
ESERCITAZIONE PERSONALE
let nome = prompt("Digita nome");
alert(typeof nome);
let cognome = prompt("Digita cognome");
alert(typeof cognome);
let nomeCognome = nome + " " + cognome;
alert(typeof nomeCognome);

if(typeof nome === "string" && typeof cognome === "string")
{
    alert("il tuo nome è " + nomeCognome);
}
else{
    alert("Dati non validi!");
}
*/