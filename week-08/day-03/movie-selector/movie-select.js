'use strict';

const genres = document.querySelector('#genre-select');
const movies = document.querySelector('#movie-select');
const result = document.querySelector('.result');

genres.addEventListener('change', (event) => {
  let selectedGenre = event.target.value;
  [...movies.options].forEach(option => {
    if (option.className === selectedGenre) {
      option.removeAttribute('hidden');
    } else {
      option.setAttribute('hidden', '');
    }
  });
});

movies.addEventListener('change', (event) => {
  result.innerHTML = `The selected movie is: - <span>${event.target.value}</span>`;
});