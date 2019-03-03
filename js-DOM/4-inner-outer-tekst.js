let header = document.querySelector('header');
// header.innerHTML = '<a href="#">Nowy kontent w header</a>';

// header.querySelector('span').textContent;

header.lastElementChild.innerText += '!';


// console.log(document.querySelector('.parSecond').outerHTML);
// console.log(document.querySelector('.parSecond').innerHTML);

let link = document.querySelector('.link.superlink');

link.classList.add('nowa-klasa');
link.classList.remove('nowa-klasa');
// link.classList.toggle('nowa-klasa'); //add i remove w jednym



console.log(link.classList);
