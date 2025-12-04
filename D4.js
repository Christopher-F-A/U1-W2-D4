/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}
console.log(area(5, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(ni1, ni2) {
  if (ni1 === ni2) return (ni1 + ni2) * 3;
  else return ni1 + ni2;
}
console.log(crazySum(2, 3));
console.log(crazySum(2, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(x) {
  if (x > 19) return (x - 19) * 4;
  else if (x < 19) return (x - 19) * -1;
  else return x - 19;
}
console.log(crazyDiff(30));
console.log(crazyDiff(7));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) return true;
  else return false;
}
console.log(boundary(7));
console.log(boundary(100));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
  if (string.startsWith("EPICODE")) return string;
  else return "EPICODE " + string;
}
console.log(epify("EPICODE course"));
console.log(epify("course"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(pos) {
  if (pos <= 0) return "negative";

  if (pos % 3 === 0 || pos % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(6));
console.log(check3and7(14));
console.log(check3and7(20));
console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string1) {
  return string1.split("").reverse().join("");
}
console.log(reverseString("REVERSE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string2) {
  return string2.toUpperCase();
}
console.log(upperFirst("ciao mi chiamo chri"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string3) {
  return string3.slice(1, -1);
}
console.log(cutString("ciao mi chiamo chri"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  const array = [];
  array.push(Math.floor(Math.random() * 11));
  return array;
}
console.log(giveMeRandom());
