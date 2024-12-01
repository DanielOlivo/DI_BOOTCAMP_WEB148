exports.up = async function(knex){
    return await knex.schema.createTable('books', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.integer('publishedYear').notNullable();
    });
}

exports.down = function(knex){
    return knex.schema.dropTableIfExists('books');
}