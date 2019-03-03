let footer = document.createElement('footer'); //<footer></footer>
let footerText = document.createTextNode('Stopka strony'); // 'Stopka strony'

footer.appendChild(footerText); //<footer>Stopka strony</footer>

footer.setAttribute('class', 'custom-footer'); //<footer class="custom-footer">Stopka strony</footer>


// document.querySelector('section').insertAdjacentElement('afterend', footer);

// console.log(footer);

let parSecond = document.querySelector('.parSecond');
document.body.firstElementChild.removeChild(parSecond); //usuwanie sekcji .parSecond

let firstLink = document.querySelector('#parFirst a.link');
firstLink.removeAttribute("class");  // USUWANIE KLASY

console.log(firstLink);
