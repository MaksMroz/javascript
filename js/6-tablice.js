let typLiczba = 3;
// let tablica = [typLiczba, 'Ola ma kota', true, 2 + 2];
// console.log(tablica);
let tablica = ['Michał', 'Inna', 'Ola', 'Martyna', 'Arek'];


// tablica[1] = 'Ola ma psa'; // odwołujemy się do wartości w tablicy po odpowiednim adresie
// tablica[1] = {imie: 'Ola', ma: 'czarnego kota'}; // OBJEKT W TABLICY

// tablica.reverse();
tablica.unshift('Oooooops'); //dodajemy element na początku tablicy
tablica.shift(); //dodajemy pierwszy element

tablica.push('hej'); // dodajemy element na końcu []
tablica.pop(); // usuwamy element na końcu []

// tablica.splice(1, 3); //wycina elementy z tablicy

// tablica.slice(1, 3); // Robi takie kopiuj, a nie wycina

// tablica.splice(3, 0, 'Daria');

tablica = [1, 76, 338, -1, 0];

tablica = tablica.sort((liczba1, liczba2) => {
    return liczba1 - liczba2;
});



console.log(tablica);