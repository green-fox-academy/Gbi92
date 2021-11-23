'use strict';

const button = document.querySelector('button');

function logCurrentTimestamp() {
  console.log(Date.now());
  // button.disabled = true; OR
  button.removeEventListener('click', logCurrentTimestamp);
}

button.addEventListener('click', logCurrentTimestamp);
