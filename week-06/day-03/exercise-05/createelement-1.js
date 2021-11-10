'use strict';

const asteroidList = document.querySelector('ul.asteroids');

//1.
const asteroidGF = document.createElement('li');
asteroidGF.textContent = 'The Green Fox';
asteroidList.appendChild(asteroidGF);

//2.
const lamplighter = document.createElement('li');
lamplighter.textContent = 'The Lamplighter';
asteroidList.appendChild(lamplighter);

//3.
const heading = document.createElement('h2');
heading.textContent = 'I can add elements to the DOM!';
document.querySelector('.container').appendChild(heading);

//4.
const image = document.createElement('img');
image.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/04/20/19/00/macarons-732017_1280.jpg');
document.querySelector('.container').appendChild(image);