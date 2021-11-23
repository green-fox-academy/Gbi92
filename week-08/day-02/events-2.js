'use strict';

const button = document.querySelector('button');
const listItems = document.querySelectorAll('ul li');
const resultP = document.querySelector('.result');

button.addEventListener('click', () => {
  resultP.innerHTML = listItems.length;
});
