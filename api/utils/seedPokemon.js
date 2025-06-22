const Pokemon = require('../models/pokemon');

async function seedPokemons() {
  try {
    const existing = await Pokemon.findAll();
    if (existing.length > 0) {
      console.log('Pokemones ya cargados. Carga cancelada.');
      return;
    }

    console.log('Cargando pokemones desde PokéAPI...');

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    const results = data.results;

    for (const poke of results) {
      const detailRes = await fetch(poke.url);
      const details = await detailRes.json();

      const types = details.types.map(t => t.type.name).join(', ');
      const level = Math.floor(Math.random() * 50) + 1;

      await Pokemon.create({
        name: details.name,
        type: types,
        level
      });
    }

    console.log('Pokemones insertados exitosamente');
  } catch (error) {
    console.error('Error al cargar pokemones:', error.message);
  }
}

module.exports = seedPokemons;
