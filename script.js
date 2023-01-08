// Palidroma
// Chiedere all’utente di inserire una parola tramiite un form
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.



const userWordElement = document.getElementById('user-word')
const resultElement = document.getElementById('reslut')
const button = document.getElementById('button')

function palindrome(text){
   
    const len = text.length;

    for( let i = 0; i < len; i++){
    
        if(text[i] !== text[len - 1 -i]){
      
            return 'Non è un palindromo'
        }
   
    }
   
    return 'palindromo';
}

button.addEventListener("click", function(), )
{

    let def = userWordElement.palindrome()

}


buttonElement.innerText = def;