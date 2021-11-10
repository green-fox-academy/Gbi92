'use strict';

//1.
const image = document.querySelector('img');
console.log(image.getAttribute('src'));

//2.
image.setAttribute('src', 'https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg');

//3.
const link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com');

//4.
const button = document.querySelector('.this-one');
button.setAttribute('disabled', '');
button.textContent = "Don't click me!";