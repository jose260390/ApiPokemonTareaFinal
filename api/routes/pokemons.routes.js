const express = require('express');
const router = express.Router();
const { getAllPokemons, getPokemonById, createPokemon, updatePokemon, deletePokemon } = require('../controllers/pokemons.controller');

router.get('/listPokemons', getAllPokemons);
router.get('/pokemon/:id', getPokemonById);
router.post('/insertPokemon', createPokemon);
router.put('/updatePokemon/:id', updatePokemon);
router.delete('/deletePokemon/:id', deletePokemon);

module.exports = router;
