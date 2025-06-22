/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {

    await knex.schema.createTable('users', table => {
        table.increments('id').primary()
    })

     await knex.schema.createTable('pokemons', table => {
        table.increments('id').primary()
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {

    await knex.schema.dropTableIfExists('users')
    await knex.schema.dropTableIfExists('pokemons')
  
};
