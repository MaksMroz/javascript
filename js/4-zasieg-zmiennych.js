let liczba = 50;

funkcjaTestowa = () => {
    // console.log(liczba);

    if (true) {
        liczba = 10;
        console.log(liczba);
    }
    
}
console.log(liczba); // najpierw wyskakuje 50 bo funkcjaTestowa() jest ponizej tego console.loga
funkcjaTestowa(); 