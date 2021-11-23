'use strict';

let navBar = document.querySelector('nav');
let img = document.querySelector('.img-inspector');

let startingSize = 200;
let startX = 0;
let startY = 0;

navBar.addEventListener('click', (event) => {
  if(event.target.dataset.direction === 'out') {
    img.style.backgroundSize = `${startingSize - 20}%`;
    startingSize -= 20;
  };
  if(event.target.dataset.direction === 'in') {
    img.style.backgroundSize = `${startingSize + 20}%`;
    startingSize += 20;
  };
});

navBar.addEventListener('click', (event) => {
  if(event.target.dataset.direction === 'right') {
    img.style.backgroundPosition = `${startX - 10}px ${startY}px`;
    startX -= 10;
  };
  if(event.target.dataset.direction === 'left') {
    img.style.backgroundPosition = `${startX + 10}px ${startY}px`;
    startX += 10;
  };
  if(event.target.dataset.direction === 'down') {
    img.style.backgroundPosition = `${startX}px ${startY - 10}px`;
    startY -= 10;
  };
  if(event.target.dataset.direction === 'up') {
    img.style.backgroundPosition = `${startX}px ${startY + 10}px`;
    startY += 10;
  };
});