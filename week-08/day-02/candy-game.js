'use strict';

// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const createCandies = document.querySelector('.create-candies');
const buyLollipop = document.querySelector('.buy-lollypops');
const candyRain = document.querySelector('.candy-machine');

const candiesField = document.querySelector('.candies');
const lollypopField = document.querySelector('.lollypops');
const speedField = document.querySelector('.speed');

let candyCount = 0;
let lollypopCount = 3;
let speedCount = 0;
//let candyRain = false; for later

createCandies.addEventListener('click', () => {
  candyCount++;
  candiesField.innerText = `${candyCount}`;
});

buyLollipop.addEventListener('click', () => {
  if (candyCount > 100) {
    candyCount -= 100;
    candiesField.innerText = `${candyCount}`;
    lollypopField.innerText += '🍭';
    lollypopCount++;
  }
  if (lollypopCount % 10 === 0) {
    speedCount += 1;
    speedField.innerText = `${speedCount}`;
  }
});

candyRain.addEventListener('click', () => {
  speedCount *= 10;
  speedField.innerText = `${speedCount}`
});