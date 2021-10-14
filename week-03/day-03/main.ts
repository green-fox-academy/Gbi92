'use strict';

import { Pokemon } from './Pokemon';

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'grass', 'water');

// Which pokemon should Ash use?

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash

function chooseEffective(pokemonArr: Pokemon[], onePokemon: Pokemon): string {
  let chosenPokemon: string = '';
  pokemonArr.forEach((pokemon) => {
    if (pokemon.isEffectiveAgainst(onePokemon)) {
      chosenPokemon = pokemon.name;
    }
  });
  return chosenPokemon;
}

console.log(`I choose you, ${chooseEffective(pokemonOfAsh, wildPokemon)}!`);

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Bulbasaur', 'grass', 'water'),
    new Pokemon('Pikachu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'grass'),
    new Pokemon('Pidgeot', 'flying', 'fighting'),
    new Pokemon('Kingler', 'water', 'fire'),
  ];
}
