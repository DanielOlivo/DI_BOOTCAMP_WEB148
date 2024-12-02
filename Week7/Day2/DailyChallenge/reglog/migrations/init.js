exports.up = async function(knex){
    return await knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('email').unique();
        table.string('username').unique();
        table.string('first_name');
        table.string('last_name');
    })
    .createTable('hashpwd', (table) => {
        table.increments('id').primary();
        table.string('password');
        table.string('username').unique();
        table
            .foreign('username')
            .references('users.username')
            .onDelete('CASCADE');
    });
}

exports.down = function(knex){
    return knex.schema
        .dropTableIfExists('hashpwd')
        .dropTableIfExists('users');
}