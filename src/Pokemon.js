import React from "react";

export const Pokemon = ({ resource }) => {
  const pokemon = resource.pokemon.read();

  return <div>
  <div>
  <h1>{pokemon.name}</h1>
  <img src={pokemon.sprites.front_default} alt='didnt load'></img>
  </div>
  </div>
};