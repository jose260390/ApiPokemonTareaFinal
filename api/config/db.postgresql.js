const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const POSTGRES_URI = process.env.POSTGRES_URI;

const sequelize = new Sequelize(POSTGRES_URI, {
  dialect: 'postgres',
  logging: false
});

async function connectPG() {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('Error al conectar la BD:', error);
    process.exit(1);
  }
}

module.exports = { sequelize, connectPG };
