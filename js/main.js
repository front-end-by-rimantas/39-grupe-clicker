const wikiDOM = document.querySelector('a');

wikiDOM.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('SURPRIZE!! 😈');
})

// #############################################
// #############################################
// #############################################

const divDOM = document.querySelector('div');
const btnPlusDOM = document.querySelector('button:nth-of-type(1)');
const btnMinusDOM = document.querySelector('button:nth-of-type(2)');

let number = 0;
divDOM.textContent = number;

function padydinti() {
    divDOM.textContent = ++number;
}

function sumazinti() {
    divDOM.textContent = --number;
}

function padydinti10(event) {
    event.preventDefault();
    number += 10;
    divDOM.textContent = number;
}

function sumazinti10(event) {
    event.preventDefault();
    number -= 10;
    divDOM.textContent = number;
}

btnPlusDOM.addEventListener('click', padydinti);
btnMinusDOM.addEventListener('click', sumazinti);

btnPlusDOM.addEventListener('contextmenu', padydinti10);
btnMinusDOM.addEventListener('contextmenu', sumazinti10);