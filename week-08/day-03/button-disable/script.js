'use strict';

const form = document.querySelector('form');
const catBtn = document.querySelector('#catBtn');
const signUpBtn = document.querySelector('#signUp');

form.addEventListener('change', () => {
  if (form.dog.checked || form.cat.checked) {
    signUpBtn.removeAttribute('disabled');
  }
  if (form.yes.checked) {
    catBtn.removeAttribute('disabled');
  }
});

catBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  alert(`Thank you, you've successfully signed up for cat facts`);
});

signUpBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  alert(`Thank you, you've successfully signed up for cat facts`);
});