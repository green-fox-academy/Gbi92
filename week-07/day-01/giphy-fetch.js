'use strict';

const htmlBody = document.querySelector('body');
const limit = 16;

fetch('https://api.giphy.com/v1/gifs/search?api_key=B3IklSivzPUcPsYki5lnGXOXJYSHf0Wf&q=cute&limit=16')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < limit; i++) {
      const img = document.createElement('img');
      img.setAttribute('src', data.data[i].images.fixed_width_still.url);
      img.onclick = () => {
        img.setAttribute('src', data.data[i].images.fixed_width.url)
      };
      htmlBody.appendChild(img);
    }
  });