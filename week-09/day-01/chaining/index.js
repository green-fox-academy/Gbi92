'use strict';

function fetchCharacter(characterId) {
  if(!Number.isInteger(+characterId)) {
    return Promise.reject('characterId must be an integer');
  }
  return fetch(`https://swapi.dev/api/people/${characterId}`);
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const h2 = document.createElement('h2');
  h2.textContent = 'Character Profile';

  fetchCharacter(form.charId.value)
  .then(res => res.json())
  .then(characterData => {
    const name = document.createElement('p');
    const height = document.createElement('p');
    const mass = document.createElement('p');

    name.textContent = `Name: ${characterData.name}`;
    height.textContent = `Height: ${characterData.height}`;
    mass.textContent = `Mass: ${characterData.mass}`;

    form.appendChild(h2);
    form.appendChild(name);
    form.appendChild(height);
    form.appendChild(mass);

    fetch(characterData.homeworld)
    .then(res => res.json())
    .then(planetData => {
      const planet = document.createElement('p');
      planet.textContent = `Planet Name: ${planetData.name}`;
      form.appendChild(planet);
    })
  })
  .catch((error) => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = error;
    errorMessage.style.color = 'red';
    form.appendChild(errorMessage);
  })
})