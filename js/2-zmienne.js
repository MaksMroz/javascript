let tekst = 'Jakiś tekst'; //ES6
tekst = 5; // Przy nadpisywaniu nie dajemy juz let bo zmienna juz jest zadeklarowana

var liczba = 88 // ES5
liczba = 'hej'

const stala = 'Zmienna stała';
// stala = 'Zmieniamy tę stałą'; // Nie da się nadpisać consta

let hejka; // mozemy stworzyc zmienną bez zdefiniowania - jest wtedy undifiend
// const hej; - nie da się stworzyć stałej bez zdefiniowania

console.log(tekst);
console.log(liczba);
console.log(stala);

