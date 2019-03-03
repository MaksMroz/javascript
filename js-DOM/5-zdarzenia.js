let header = document.querySelector('header');
let parSecond = document.querySelector('.parSecond');
let link = document.querySelector('a[href="https://akademia108.pl"]');
let h1 = document.getElementById('main-header');

link.onclick = event => {
    event.preventDefault();
    console.log(event.target);
}

// console.log(link);


colorChange = () => {
    header.style.color = 'red';
    console.log('click z headera');   
}

h1.onclick = event => {
    event.stopPropagation();
    console.log('click z <h1></h1>');
}



bogdan = () => {
    parSecond.style.backgroundColor = 'green';
}

parSecond.ondblclick = bogdan;





let parFirst = document.querySelector('#parFirst');

najechanieMyszka = () => {
    // parFirst.style.backgroundColor = 'blue';
    parFirst.classList.toggle('toggle');
}

parFirst.addEventListener('click', najechanieMyszka);
// parFirst.removeEventListener('mouseover', najechanieMyszka);

