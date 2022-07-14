const divDOM = document.querySelector('div');
const buttonsDOM = document.querySelectorAll('button');

let number = 0;
divDOM.textContent = number;

function vienas(event) {
    // const action = event.target.classList.contains('plus') ? 'plus' : 'minus';
    const action = event.target.dataset.action === 'increase' ? 'plus' : 'minus';
    divDOM.textContent = action === 'plus' ? ++number : --number;
}

function desimt(event) {
    event.preventDefault();
    number += event.target.classList.contains('plus') ? 10 : -10;
    divDOM.textContent = number;
}

for (const buttonDOM of buttonsDOM) {
    buttonDOM.addEventListener('click', vienas);
    buttonDOM.addEventListener('contextmenu', desimt);
}