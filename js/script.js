// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri vengono nascosti nell’html e l’utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Creo la funzione per generare dei numeri random all'interno di un range di numeri
function randomNum(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function multipleNum(n, min, max){
// Creo un array vuoto dove inserire i numeri random generati
let num = [];
// Creo numeri random e li aggiungo all'array a condizione di non generare più di 5 numeri
// Se i numeri NON sono già inclusi nell'array allora li inserisco. (per non creare doppioni)
while (num.length < n) {
    let random = randomNum(min, max);
    if (!num.includes(random)){
        num.push(random);
    }
}
return num;
}

function hide(){
    numbersHtml.className = 'hide';
}

// Funzione che trasforma le stringhe di un array in numeri
function transform(userStringList) {
    let numArray = [];
    for (let i = 0; i < userStringList.length; i++){
        numArray.push(parseInt(userStringList[i]));
    }
    return numArray;
}

function compareArrays(array1, array2){
    let arrayUguali = [];
    for(let i = 0; i < array1.length; i++){
        if(array2.includes(array1[i])){
            arrayUguali.push(array1[i]);
        }
    }
    return arrayUguali;
}


let randomNumbers = multipleNum(5, 1, 50);

// Creo la variabile per stampare in HTML
const numbersHtml = document.getElementById('numbers');
const outputHtml = document.getElementById('output');
// Stampo la lista di numeri random in HTML 
numbersHtml.innerHTML = randomNumbers;

// Con un timer nascondo la lista dopo 3 secondi
setTimeout(hide, 3000);

// con una timing Function faccio apparire un prompt e chiedo all'utente di scrivere i numeri che ha visto
setTimeout(function(){
    let userAnswer = prompt('inserisci i numeri che hai visto separati da uno spazio')
    let userNum = userAnswer.split(' ');
    console.log(userNum);
    let x = transform(userNum);
    console.log(x);
    outputHtml.innerHTML = compareArrays(x, randomNumbers);
    // outputHtml.innerHTML += `hai indovinato ${arrayUguali} numeri!`
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
}, 4000);


