/* function nazwaFunkcji() { // słowo kluczowe to function
    // ciało funkcji
} */

// zapis standardowy
/* const pomnoz = function(liczba1, liczba2) {
    let wynik = liczba1 * liczba2;
    return wynik;    
}; */

// zapis strzałkowy

// const pomnoz = (liczba1, liczba2) => liczba1 * liczba2;
//funkcja strzalkowa

// const pomnoz = (liczba1, liczba2) => { 
//     return liczba1 * liczba2;
// }

const pomnoz = liczba => liczba * 2;


console.log(pomnoz(8));