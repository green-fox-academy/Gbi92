'use strict';

const genres = document.querySelector('#genre-select');
console.log(genres);
const movies = document.querySelector('#movie-select');
console.log(movies.options);
const result = document.querySelector('.result');

genres.addEventListener('change', (event) => {
  let selectedGenre = event.target.value;
  [...movies.options].forEach(option => {
    if (option.className !== selectedGenre) {
      console.log(option);
      //option.remove();
      //option.setAttribute('style', 'display: none');
    }
  });
});

movies.addEventListener('change', (event) => {
  result.innerHTML = `The selected movie is: - <span>${event.target.value}</span>`;
});