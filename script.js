/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/


function crazySum(intero1, intero2) {
    if (intero1 != intero2){
        return intero1 + intero2;
    } else if (intero1 === intero2){
        return (intero1 + intero2) * 3;
    }
}

console.log(crazySum(20, 180));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna 
 true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/



function boundary(num){
  //let intero = parseInt(num)
    if(num > 20 && num <= 100 || num == 400) {
    return true
  } else {
    return false
  }
}

console.log(boundary(1));




/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/


function reverseString(nuovaStringa) { 
    //for(let i = stringa.length -1; i = 0; i--)
    // let stringaContrario  //stringa.length - 1 corrisponde all'ultimo carattere
    //stringaContrario += nuovaStringa[i]
    // return nuovaStringa
return nuovaStringa.split("").reverse("").join("");
}

console.log(reverseString("epicode"))



/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", 
 che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(stringa){
  //diviso le due parole
  let words = stringa.split(" ");
  console.log(words);

  //array vuoto che avrà le lettere maiuscole
  let finalString = [];
  for (let i = 0; i < words.length; i++){
    let firstChar = words[i].charAt(0).toUpperCase(); // qui stampo le inziali delle due parole
    console.log(firstChar);
    let cuttedString = words[i].slice(1); // qui stampo il resto dei caratteri
    console.log(cuttedString);

    let finalWord = firstChar + cuttedString; // mette insieme iniziali e il resto dei caratteri
    finalString.push(finalWord);
 

    }
    console.log(finalString.join(" ")); //diciamo come stamparlo, ovvero insieme (con il join) e uno spazio tra uno e l'altro (" ")
}

upperFirst("hello there")



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e 
 ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
  let numbers = [];{
  for (let i = 0; i < n; i++)
  numbers.push(Math.floor(Math.random()* 11))
  }
return numbers;
}

console.log(giveMeRandom(8))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) 
 e calcola l'area del rettangolo associato.
*/

function area(l1, l2){
  let getArea = l1 * l2
  return getArea
}

console.log(area(4, 7))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/


function crazyDiff(num){
  let diffAss = Math.abs(num - 19)

  if (diffAss > 19){
    return diffAss * 3;
  }else {
    return diffAss;
  }
}

console.log(crazyDiff(39));


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e 
 ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora 
 deve ritornarla senza modifiche.
*/

function codify(stringa) {
  if (stringa.startsWith("code")){
    return stringa
  } else {
    return "code " + stringa;  
  }
}

console.log(codify("lovers"))
console.log(codify("coders"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; 
 altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(numIntero){
  if (numIntero % 3 === 0 || numIntero % 7 === 0){
    return true;
  } else {
    return false
  }
}

console.log(check3and7(7))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come 
 parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(stringa){
  return stringa.slice(1, -1) //primo e ultimo carattere
}
console.log(cutString("bello"));
