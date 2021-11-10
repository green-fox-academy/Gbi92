'use strict';

const pTags = document.querySelectorAll('p');
const lastPTag = document.querySelector('.animals');
console.log(pTags);
//1.
pTags.forEach((p) => {
    if(p.getAttribute('class') != 'animals') {
        p.innerHTML += ' ' + lastPTag.textContent;
    }
});

//2.
pTags.forEach(p => {
    if(p.getAttribute('class') != 'animals') {
        p.innerHTML += ' ' + lastPTag.innerHTML;
    }
});