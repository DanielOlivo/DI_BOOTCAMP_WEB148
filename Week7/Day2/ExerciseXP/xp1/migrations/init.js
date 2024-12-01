exports.up = async function(knex){
    return await knex.schema.createTable('post', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('content').notNullable();
    });
}

exports.down = function(knex){
    return knex.schema.dropTable('post');
}