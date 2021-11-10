'use strict';

const world = document.querySelector('section.world');

for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    let randomNum2 = Math.floor(Math.random() * 100);
    let star = document.createElement('div');
    star.setAttribute('class', 'star');
    star.setAttribute('style', `left: ${randomNum}%; top: ${randomNum2}%;`);
    world.appendChild(star);
}

// const horizon = document.querySelector('.horizon');
// const trees = document.querySelector('.tree');

// horizon.onclick = () => {

// }