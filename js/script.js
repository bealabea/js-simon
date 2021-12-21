// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri vengono nascosti nell’html e l’utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Creo la funzione per generare dei numeri random all'interno di un range di numeri
function randomNum(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

// Creo un array vuoto dove inserire i numeri random generati
let num = [];

// Creo numeri random e li aggiungo all'array a condizione di non generare più di 5 numeri
// Se i numeri NON sono già inclusi nell'array allora li inserisco. (per non creare doppioni)
while (num.length < 5) {
    let random = randomNum(1, 50);
    if (!num.includes(random)){
        num.push(random);
    }
}

// Creo la variabile per stampare in HTML
const numbersHtml = document.getElementById('numbers');

// Stampo la lista di numeri random in HTML 
numbersHtml.innerHTML = num;

// Con un timer nascondo la lista dopo 3 secondi
setTimeout(function(){
    numbersHtml.className = 'hide';
}, 3000)

// con una timing Function faccio apparire un prompt e chiedo all'utente di scrivere i numeri che ha visto
setTimeout(function(){
    let userAnswer = prompt('inserisci i numeri che hai visto separati da uno spazio')
    let userNum = userAnswer.split(' ');
    console.log(userNum);
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    
}, 4000);