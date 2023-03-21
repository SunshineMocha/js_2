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

// Switch case, "menu", sostituzione if else

/*
let counter = prompt("digita un numero multiplo di 10");
switch(Number(counter)) //converte la stringa in numero
{
    case 10:
        alert("Hai digitato 10");
        break
    case 20:
        alert("Hai digitato 20");
        break
    case 30: 
        alert("Hai digitato 30");
        break
    default:
    alert("Hai digitato un altro numero");
    break;
}
*/

/*
    let nome = prompt("digita un nome");
    switch(nome) //converte la stringa in numero
    {
        case "marco":
            alert("Hai digitato marco");
            break
        case "paolo":
            alert("Hai digitato paolo");
            break
        case "davide": 
            alert("Hai digitato davide");
            break
        default:
        alert("Hai digitato un altro nome");
        break;
    }
*/

// INDOVINA IL NUMERO

/*
    let numero = 81;
    while(true){ // fino a quando è vero
        let risposta = prompt("Indovina il numero"); //input listener
        if(numero === Number(risposta)){ //if e condizione. con triplo = devo usare Number per convertire da stringa a numero. Altrimenti converte in automatico
            break; // esce se la condizione è vera
        }
        else{
            alert("ritenta"); // se il numero è sbagliato da ritenta e torna nel loop
        }
    }
*/

let numero = 81;
let tentativi = 0; 
let rimasti = 10;
while(true){ // fino a quando è vero
    let risposta = prompt("Indovina il numero, tentativi rimasti = " + rimasti); //input listener
    if(numero === Number(risposta)){ //if e condizione. con triplo = devo usare Number per convertire da stringa a numero. Altrimenti converte in automatico
        break; // esce se la condizione è vera
    }
    else{
        tentativi = tentativi + 1;
        rimasti = rimasti - 1;
        alert("ritenta, numero tentativi = " + tentativi ); // se il numero è sbagliato da ritenta e torna nel loop
        if(tentativi===10){
            break;
        }
    }
}


/*
//ESERCITAZIONE PERSONALE
let nome = prompt("Digita nome");
alert(typeof nome);
alert(Number(nome));
let cognome = prompt("Digita cognome");
alert(typeof cognome);
let nomeCognome = nome + " " + cognome;
alert(nomeCognome);

if((Number(nome) !== "string") && (Number(cognome) !== "string"))
{
    alert("il tuo nome è " + nomeCognome);
}
else{
    alert("Dati non validi!");
}
*/