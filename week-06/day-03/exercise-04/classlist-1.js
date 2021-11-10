'use strict';

const pTags = document.querySelectorAll('p');

//1.
if(pTags[3].classList.contains('dolphin')) {
    document.querySelector('.apple').textContent = 'pear';
}

//2.
if(pTags[0].classList.contains('apple')) {
    document.querySelector('.cat').textContent = 'dog';
}

//3.
pTags[0].classList.add('red');

//4.
document.querySelector('.balloon').style.borderRadius = '10%';