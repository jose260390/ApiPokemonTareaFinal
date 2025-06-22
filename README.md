
# Tarea Final - Módulo 2 - PokeAPI con Autenticación y Sequelize

Este proyecto es una API REST construida con **Node.js**, **Express**, **Sequelize**, y **PostgreSQL**, diseñada para gestionar una base de datos de Pokemones. Incluye autenticación por JWT y contiene los 4 métodos principales: **GET**, **POST**, **PUT**, y **DELETE**.

---

## Estructura del Proyecto

```
TAREAFINALMODULO2/
├──api/
   ├── config/                # Configuración de base de datos
   │   └── db.postgresql.js
   ├── controllers/           # Lógica de negocio
   │   ├── auth.controller.js
   │   └── pokemons.controller.js
   ├── middlewares/          # Middleware de autenticación
   │   └── auth.js
   ├── migrations/           # Migraciones con Knex
   │   ├── 20250622205517_create_users_table.js
   │   └── 20250622205517_create_pokemons_table.js
   ├── models/               # Modelos Sequelize
   │   ├── pokemon.js
   │   └── user.js
   ├── routes/               # Rutas de la API
   │   ├── auth.routes.js
   │   └── pokemons.routes.js
   ├── src/                  # Punto de entrada principal
   │   └── index.js
   ├── utils/                # Utilidades como cargas automáticas
   │   ├── seedAdmin.js
   │   └── seedPokemon.js
   ├── .env                  # Variables de entorno
   ├── Dockerfile            # Dockerfile del contenedor API
   ├── knexfile.js           # Configuración de Knex
   └── package.json          # Librerías instaladas
|
├── docker-compose.yml    # Orquestador de contenedores
└── PokeApi ENDPOINTS.postman_collection.json # Archivo de carga para pruebas de ENDPOINTS

---

## Usuario de prueba precargado

- **Email:** `admin@node.com`
- **Password:** `123456`

---

## Endpoints disponibles

### Autenticación

- `POST /auth/login`: Login de usuario y genera token JWT

### Pokemones (Todos los ENDPOINTS requiere el uso del token generado anteriormente)

- `GET /pokemons/listPokemons`: Lista todos los pokemones
- `GET /pokemons/listPokemons/:id`: Obtener un pokemon por ID
- `POST /pokemons/createPokemon`: Crear un nuevo pokemon
- `PUT /pokemons/updatePokemon/:id`: Actualizar un pokemon
- `DELETE /pokemons/removePokemon/:id`: Eliminar un pokemon

---

## Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- JWT (JSON Web Tokens)
- Docker & Docker Compose

---

## 📬 Observaciones

- Los datos de pokemones se cargan automáticamente al iniciar el contenedor.
- Las contraseñas se encriptan con `bcryptjs`.
- El middleware `auth.js` protege todos los endpoints.
