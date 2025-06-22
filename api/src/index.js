const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const { connectPG, sequelize } = require('../config/db.postgresql');

const app = express();
app.use(cors());
app.use(express.json());

const pokemonRoutes = require('../routes/pokemons.routes');
const authenticate = require('../middlewares/auth');
app.use('/pokemons', authenticate, pokemonRoutes);

const seedPokemons = require('../utils/seedPokemon');
const seedAdminUser = require('../utils/seedAdmin');

const authRoutes = require('../routes/auth.routes');
app.use('/auth', authRoutes);


(async () => {
  await connectPG();

  await sequelize.sync(); 
  await seedPokemons(); //Carga de pokemones automáticamente a postgres
  await seedAdminUser(); //Carga user y password automáticamente a postgres

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
})();
