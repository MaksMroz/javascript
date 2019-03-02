/* let przykladowyObjekt = {
    id: 3, 
    imie: 'Kacper'
};

console.log(przykladowyObjekt.id, przykladowyObjekt.imie); */


class Osoba {
    constructor(name, surname) {
        this.baseName = name;
        this.baseSurname = surname;
    }

    przedstawOsobe() {
        return `Mam na imię ${this.baseName} ${this.baseSurname}`;
    }
}

/* const Osoba = require(ściezka)
 */
// Ściezka do klasy którą pobieramy z nowego pliku



let maks = new Osoba('Maks', 'Kowalski');
maks.kolorOczu = 'brązowy';

maks.jakiJestKolorOczu = () => {
    return maks.kolorOczu;
}

console.log(maks.przedstawOsobe(), maks.kolorOczu, maks);
