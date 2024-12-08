const db = require('../db/db');
const queries = require('./queries');

module.exports = userService = {

    userExists: async username => {
        const count = await queries.countUser(username)
        return count == 1;
    },

    createUser: queries.createUser,

    checkUserInChat: async (username, chatid) => {
        const result = await db('members')
            .join('users', 'members.user', '=', 'users.id')
            .where('users.username', username)
            .andWhere('chat', chatid)
            .count('chatId').first();
        return result.count == 1;
    },

    getAllChats: async username => {
        const ids = await queries.getAllChatsId(username)
        return ids
    },

    getLastMessages: async(chatId, latest_time, amount) =>
        await db('messages')
            .orderBy('creation_time', 'desc')
            .where('chat', chatId)
            .andWhere('creation_time', "<=", latest_time)
            .limit(amount),

    reset: async () => {
        for(const name of ['messages', 'chats', 'users']){
            await db.schema.dropTableIfExists(name);
        }

        console.log('tables removed')

        await db.schema.createTable('users', (table) => {
            table.increments('id').primary();
            table.string('username').unique().notNullable();
            table.string('hash').notNullable();
            table.timestamp('creation_date').defaultTo(db.fn.now());
        });

        await db.schema.createTable('chats', (table) => {
            table.uuid('id').primary();
            table.integer('user').notNullable(); 
            table.boolean('isDirect').notNullable();
            table.timestamp('creation_time').defaultTo(db.fn.now());
            table
                .foreign('user')
                .references('id')
                .inTable('users')
                .onDelete('CASCADE'); 
        })

        await db.schema.createTable('messages', (table) => {
            table.uuid('id').primary();
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

        console.log('tables created');
    }
}