'use strict';

const planetData = [
    {
      category: 'inhabited',
      content: 'Foxes',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true,
    },
    {
      category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false,
    },
    {
      category: 'inhabited',
      content: 'Sheep',
      asteroid: true,
    },
  ];

  const asteroidList = document.querySelector('ul.asteroids');

  planetData.forEach(el => {
    if(el.asteroid === true) {
        let asteroid = document.createElement('li');
        asteroid.textContent = el.content;
        asteroid.setAttribute('class', el.category);
        asteroidList.appendChild(asteroid);
    }
  });