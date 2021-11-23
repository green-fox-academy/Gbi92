'use strict';

const myH1 = document.querySelector('h1');

window.addEventListener('keyup', (event) => {
  console.log(event);
  myH1.innerHTML = `Last pressed key code is: ${event.code}`; //event.keyCode
});