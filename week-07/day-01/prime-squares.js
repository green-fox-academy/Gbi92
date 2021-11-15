'use strict';

const section = document.querySelector('section');
let indexNum = 1;
let numberOfDivs = 100;

function isPrime(n) {
  if (n === 1) {
    return false;
  } else if(n === 2) {
    return true;
  } else {
    for(let x = 2; x < n; x++) {
      if(n % x === 0) {
        return false;
      }
    }
    return true;  
  }
}

for (let i = 0; i < numberOfDivs; i++) {
  let myDiv = document.createElement('div');
  myDiv.textContent = indexNum;
  indexNum++;
  section.appendChild(myDiv);
}

const divList = document.querySelectorAll('div');

function primeValidator(div) {
  if (isPrime(parseInt(div.textContent))) {
    div.classList.add('prime');
  } else {
    div.classList.add('not-prime');
  }
}

let counter = 0;

let intervalId = setInterval(() => {
  primeValidator(divList[counter]);
  counter++;
  if (counter === numberOfDivs) {
    clearInterval(intervalId);
  }
}, 100);