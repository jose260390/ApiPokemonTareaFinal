const Pokemon = require('../models/pokemon');

const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener pokemones', error: error.message });
  }
};


const getPokemonById = async (req, res) => {

  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findByPk(id);

    if (!pokemon) {
      return res.status(404).json({ message: 'Pokémon no encontrado' });
    }

    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el pokémon', error: error.message });
  }

};

async function createPokemon(req, res) {

  try {
    const { name, type, level } = req.body;

    if (!name || !type) {
      return res.status(400).json({ message: 'Nombre y tipo son obligatorios' });
    }

    const newPokemon = await Pokemon.create({ name, type, level });
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el pokemon', error: error.message });
  }

}

const updatePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, level } = req.body;

    const pokemon = await Pokemon.findByPk(id);
    if (!pokemon) {
      return res.status(404).json({ message: 'Pokémon no encontrado' });
    }

    pokemon.name = name ?? pokemon.name;
    pokemon.type = type ?? pokemon.type;
    pokemon.level = level ?? pokemon.level;

    await pokemon.save();

    res.status(200).json({ message: 'Pokémon actualizado correctamente', pokemon });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el pokémon', error: error.message });
  }
};

const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findByPk(id);

    if (!pokemon) {
      return res.status(404).json({ message: 'Pokémon no encontrado' });
    }

    await pokemon.destroy();
    res.status(200).json({ message: 'Pokémon eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el pokémon', error: error.message });
  }
};


module.exports = { getAllPokemons, getPokemonById, createPokemon, updatePokemon, deletePokemon };
