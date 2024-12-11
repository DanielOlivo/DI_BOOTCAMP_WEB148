const db = require('../db/db');

exports.up = async function() {
    await db.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('username').unique().notNullable();
        table.string('hash').notNullable();
        table.timestamp('creation_time').defaultTo(db.fn.now());
    });

    await db.schema.createTable('chats', (table) => {
        table.uuid('id').primary().defaultTo(db.fn.uuid());
        table.string('name');
        table.boolean('isDirect').notNullable();
        table.timestamp('creation_time').defaultTo(db.fn.now());
    })

    // await db.schema.createTable('chatnames', (table) => {
    //     table.increments('id').primary();
    //     table.uuid('chatId').notNullable();
    //     table.string('name').notNullable();

    // })

    await db.schema.createTable('members', (table) => {
        table.uuid('id').primary().defaultTo(db.fn.uuid());
        table.uuid('chat');
        table.increments('user');
        table.boolean('isAdmin').defaultTo(false);
        table.timestamp('creation_time').defaultTo(db.fn.now());
        table
            .foreign('user')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
        table
            .foreign('chat')
            .references('id')
            .inTable('chats')
            .onDelete('CASCADE');
    })

    await db.schema.createTable('messages', (table) => {
        table.uuid('id').unique().primary().defaultTo(db.fn.uuid());
        table.uuid('chat');
        table.integer('sender');
        table.string('message').notNullable();
        table.timestamp('creation_time').defaultTo(db.fn.now());
        
        table
            .foreign('chat')
            .references('id')
            .inTable('chats')
            .onDelete('CASCADE');

        table 
            .foreign('sender')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
    })

}

exports.down = async function() {
    for(const name of ['messages','members', 'chats', 'users']){
        console.log(name)
        await db.schema.dropTableIfExists(name);
    }
}