'use strict';

const htmlBody = document.querySelector('body');
const input = document.querySelector('input');
const button = document.querySelector('button');
const charInfoList = document.querySelector('.char-info');
const moviesList = document.querySelector('.movies');

button.onclick = () => {
  fetch(`https://swapi.dev/api/people/?search=${input.value}`)
    .then(response => response.json())
    .then(body => {
      console.log(body);
      const name = document.createElement('li');
      name.setAttribute('class', 'clickable');
      const birth = document.createElement('li');
      const gender = document.createElement('li');
      const height = document.createElement('li');

      name.textContent = `Name: ${body.results[0].name}`;
      birth.textContent = `Birth Year: ${body.results[0].birth_year}`;
      gender.textContent = `Gender: ${body.results[0].gender}`;
      height.textContent = `Height: ${body.results[0].height}`;

      charInfoList.appendChild(name);
      charInfoList.appendChild(birth);
      charInfoList.appendChild(gender);
      charInfoList.appendChild(height);

      charInfoList.style.padding = '5px';

      name.onclick = () => getFilms(body.results[0].films);
    });
};

const getFilms = (films) => {
  films.forEach(film => {
    fetch(film)
      .then(response => response.json())
      .then(body => {
        const title = document.createElement('li');
        title.textContent = `${body.title} (${body.release_date})`;
        moviesList.appendChild(title);
        moviesList.style.padding = '5px';
    });
  });
};
