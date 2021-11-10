'use strict';


//1.
const items = ['apple', 'banana', 'cat', 'dog'];
const listItems = document.querySelectorAll('li');

listItems.forEach((li, i) => {
    li.innerText = items[i];
});

//2.
const ulElement = document.querySelector('ul');
console.log(ulElement);

ulElement.setAttribute('style', 'background-color: limegreen');