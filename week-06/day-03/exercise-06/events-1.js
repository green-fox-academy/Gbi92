'use strict';

const button = document.querySelector('button');
const myDiv = document.querySelector('div');

button.onclick = () => {
    if(myDiv.classList.contains('party')) {
        myDiv.classList.remove('party');
    } else {
        myDiv.classList.add('party');
    }
};
