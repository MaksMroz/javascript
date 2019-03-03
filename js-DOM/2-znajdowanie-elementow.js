let element;

element = document.getElementById('parFirst'); // po ID

let dlugTab = document.getElementsByClassName('link').length;
element = document.getElementsByClassName('link')[dlugTab - 1]; // po class + ostatni element tablicy

element = document.getElementsByTagName('p')[0]; // po tagu

element = document.querySelector('#sectionFirst .parSecond .par2').innerHTML; //css
element = document.querySelectorAll('#sectionFirst a')[3].innerHTML; //css all

element = document.getElementById('main-header').parentNode;
element = document.getElementById('main-header').parentElement.childNodes;

element = document.getElementById('main-header').parentElement.children;

element = document.querySelector('header').firstElementChild;
element = document.querySelector('header').lastElementChild;


console.log(element);


