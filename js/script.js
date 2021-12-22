// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri vengono nascosti nell’html e l’utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Creo la funzione per generare dei numeri random all'interno di un range di numeri
function getRandom(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

// Funzione per aggiungere i numeri random in un array
function addNumbersToArray(n, min, max){
// Creo un array vuoto dove inserire i numeri random generati
let randomList = [];
// Creo numeri random e li aggiungo all'array a condizione di non generare più di 5 numeri
while (randomList.length < n) {
    let randomNum = getRandom(min, max);
    // Se i numeri NON sono già inclusi nell'array allora li inserisco. (per non creare doppioni)
    if (!randomList.includes(randomNum)){
        randomList.push(randomNum);
    }
}
return randomList;
}

// Funzione che aggiunge la classe hide(display:none) all'id e tag selezionati nel documento
function hide(){
    numbersHtml.className = 'hide';
    document.getElementsByTagName('h1')[0].className = 'hide';
}

// Funzione che trasforma le stringhe di un array in numeri
function transform(StringList) {
    let arrayNumberList = [];
    for (let i = 0; i < StringList.length; i++){
        arrayNumberList.push(parseInt(StringList[i]));
    }
    return arrayNumberList;
}

// Funzione che confronta i due array (numeri random e numeri utente) e inserisce in un nuovo array i numeri uguali
function compareArrays(array1, array2){
    let sameNumbers = [];
    for(let i = 0; i < array1.length; i++){
        if(array2.includes(array1[i])){
            sameNumbers.push(array1[i]);
        }
    }
    return sameNumbers;
}

function checkNumbers(array1){
    let nuovoArray = array1.slice(0, 5);

    while(nuovoArray.length < 5) {
        const value = parseInt(prompt('Inserisci tutti e 5 i numeri!'));
        nuovoArray.push(value);
    }

    return nuovoArray;
}

let nuovoArray = checkNumbers(userNumberList);

// Attribuisco una variabile alla funzione di creazione dell'array di numeri random
let randomNumbers = addNumbersToArray(5, 1, 50);

// Creo la variabile per stampare in HTML i numeri random
const numbersHtml = document.getElementById('numbers');
// Creo la variabile per stampare in HTML il risultato ottenuto dall'utente
const outputHtml = document.getElementById('output');
// Stampo la lista di numeri random in HTML 
numbersHtml.innerHTML = randomNumbers;

// con una timing Function nascondo la lista dei numeri random dopo 30 secondi
setTimeout(hide, 5000);

// con una timing Function faccio apparire un prompt e chiedo all'utente di scrivere i numeri che ha visto
setTimeout(function(){
    let userAnswer = prompt('inserisci i numeri che hai visto separati da uno spazio')
    // con la funzione split prendo la risposta (stringa) dell'utente e la inserisco in un array eliminando gli spazi
    let userNumbers = userAnswer.split(' ');
    console.log(userNumbers);
    // attribuisco una variabile alla funzione che trasforma l'array creato con split da stringhe a numeri
    let userNumbersList = transform(userNumbers);
    console.log(userNumbersList);
    // attribuisco una variabile alla funzione di confronto dei due array (user e random)
    const result = compareArrays(userNumbersList, randomNumbers);
    if(result.length === 0){
        outputHtml.innerHTML = `Peccato, non hai indovinato neanche un numero. <br/> Hai perso!`;   
    } else if (result.length === 5){
        outputHtml.innerHTML = `Hai indovinato tutti e ${result.length} i numeri. <br/> Hai vinto!! <br/> ${result}`;
    } else {
    outputHtml.innerHTML = `Hai indovinato ${result.length} numeri. <br/> ${result}`;  
    } 
}, 5500);

setTimeout(function(){
    numbersHtml.classList.remove('hide');
    outputHtml.style.backgroundColor = 'darkslategrey';
}, 5500)


