'use strict';

const htmlBody = document.querySelector('body');
htmlBody.style.backgroundImage = `url('https://loremflickr.com/g/1280/800/hungary/')`;

function updateImg(cache_ord) {
  htmlBody.style.backgroundImage = `url('https://loremflickr.com/g/1280/800/hungary?random=${cache_ord}')`;
}

setInterval(() => {
  let ord = Math.random()*10000000000000000;
  updateImg(ord);
}, 5000);