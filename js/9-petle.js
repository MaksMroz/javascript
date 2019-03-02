let uzytkownicy = [
    {
        imie: 'Kaja',
        nazwisko: 'Nowak'
    }, {
        imie: 'Karol',
        nazwisko: 'Kowalski'
    }, {
        imie: 'Mariusz',
        nazwisko: 'Witkowski'
    }
];
// console.log(uzytkownicy);


// pętla for

/* for (let index = 0; index < uzytkownicy.length; index++) {
    console.log(uzytkownicy[index].imie);
} */


// while()
/* 
let numer = 10;

while (numer > 0) {
    console.log(numer);
    numer--;
} */




// pętla forEach


// uzytkownicy.forEach((element, index) => {   // CO I GDZIE
//     // element.kolorOczu = 'niebieski';

//     if (element.imie = 'Kaja') {
//         element.kolorOczu = 'niebieskie';
//     } else if (element.imie === 'Karol') {
//         element.kolorOczu = 'piwny';
//     } else if (element.imie === 'Mariusz') {
//         element.kolorOczu = 'zielony';
//     }
// });



// pętla do .. while ()

let numer2 = 5;

do {
    console.log(numer2);
} while (numer2-- > 3);

console.log(uzytkownicy);
