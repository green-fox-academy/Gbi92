'use stricy';

const display = document.querySelector('.display');
const button = document.querySelector('button');

let second = 10;

const intervalID = setInterval(() => {
  display.textContent = second - 1;
  second--;
  if (second === 1) {
    clearInterval(intervalID);
  }
}, 1000);

const timerID = setTimeout(() => {
  display.textContent = 'Bomb exploded';
}, 10000);

button.onclick = () => {
  if(display.textContent !== 'Bomb exploded') {
    display.textContent = 'Bomb defused';
    clearTimeout(timerID);
    clearInterval(intervalID);
  };
};