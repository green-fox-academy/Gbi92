'use strict';

const form = document.querySelector('form');
const catBtn = document.querySelector('#catBtn');
const signUpBtn = document.querySelector('#signUp');

form.addEventListener('change', () => {
  if (form.dog.checked || form.cat.checked || form.fish.checked) {
    signUpBtn.removeAttribute('disabled');
  }
  if (form.yes.checked) {
    catBtn.removeAttribute('disabled');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.no.checked) {
    alert(`Sigh, we still added you to the cat facts list`);
  } else {
    alert(`Thank you, you've successfully signed up for cat facts`);
  }
});