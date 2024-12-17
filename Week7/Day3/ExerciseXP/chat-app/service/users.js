const db = require('../db/db');
const queries = require('./queries');
// const assert = require('node:assert').strict;
const {ok, isNum} = require('../tests/utils')

module.exports = userService = {

    getUsersAmount: async() => {
        const [{count}] = await db('users').count('id');
        return count;
    },

    // user management
    userExists: async username => {
        const [{count}] = await db('users').count('username').where('username', username);
        return Number(count) == 1;
    },

    /**
     * check if user exists
     * @param {number} id 
     * @returns {boolean}
     */
    userIdExists: async id => {
        const [{count}] = await db('users').count('id').where('id', id);
        return Number(count) == 1;
    },

    fetchId: async (username) => {
        const {id} = await db('users').where('username', username).select('id').first()
        return id;
    },

    createUser: async (username, hash) => {
        const [result] = 
            await db('users')
            .insert(
                {username: username, hash: hash}, 
                ['id', 'username', 'creation_time'])
        return result;
    },

    deleteUser: async (userId) => {
        const [result] = await db('users').where('id', userId).del(['id', 'username']);
        return result;
    },

    deleteUsers: async (userIds) => {
        const result = await db('users')
            .whereIn('id', userIds)
            .del(['id', 'username']);
        return result;
    },

    findUser: async(str) => await db('users').whereLike('username', '%' + str + '%').select('id', 'username'),

    getHash: async (username) => {
        const {hash} = await db('users').where('username', username).select('hash').first()
        return hash;
    },

    checkUserInChat: async (userId, chatid) => {
        const [{count}] = await db('members')
            .count('members.id')
            .where('members.user', userId)
            .andWhere('members.chat', chatid)
            .first()
        return count == 1;
    },

    getAllChats: async (userId) => {
        const result = await db('members')
            .join('chats', 'members.chat', '=', 'chats.id')
            .where('members.user', userId)
            .select('members.chat', 'chats.name')
        return result;
    },

    getLastMessages: async(userId, chatId, amount) => {
        const {creation_time} = await db('members').where('user', userId).select('creation_time').first();

        const result = await db('messages')
            // .join('members', 'messages.chat', '=', "members.chat")
            .orderBy('messages.creation_time', 'desc')
            .where('messages.chat', chatId)
            .andWhere('messages.creation_time', '>', creation_time)
            .select('messages.sender', 'messages.message', 'messages.creation_time', 'messages.chat', 'messages.id')
            .limit(amount)
        return result;
    },

    getChatsByUsername: async (username) => 
        await db('chats')
            .join('members', 'chats.id', '=', 'members.chat')
            .join('users', 'members.user', '=', 'users.id')
            .where('users.username', username)
            .select('chats.name', 'chats.id'),

    getChats: async (userId) => {
        isNum(userId)
        const result = await db('members')
            .join('chats', 'members.chat', '=', 'chats.id')
            .where('members.user', userId)
            .select('chats.name', 'chats.id')
        return result;
    },

    getDMs: async(userId) => await db('members')
        .join('chats', 'chats.id', '=', 'members.chat')
        .where('members.user', userId)
        .andWhere('chats.isDirect', true)
        .select('chats.id'),

    /**
     * 
     * @param {number} userId1 
     * @param {number} userId2 
     * @returns 
     */
    getDM: async(userId1, userId2) => {
        isNum(userId1)
        isNum(userId2)
        const result = await db.select('a AS id').fromRaw(`
            (
                select chats.id as a from chats
                inner join members on chats.id = members.chat
                where (members.user = ? and "isDirect"=TRUE))
            inner join (
                select chats.id as b from chats 
                inner join members on chats.id = members.chat 
                where (members.user = ? and "isDirect"=TRUE))
            on a = b  
            `, [userId1, userId2])
        return result;
    },

    /**
     * creates new DM
     * @returns {number} id - id of the dm chat
     */
    createDM: async () => {
        const [result] = await db('chats').insert({isDirect: true}, ['id']);
        return result;
    },

    /**
     * 
     * @param {string} name 
     * @returns {ChatInfo} info
     */
    createChat: async(name) => {
        const [result] = 
            await db('chats')
                .insert(
                    {isDirect: false, name: name}, 
                    ['id', 'name', 'isDirect'])
        return result;
    },

    getGroupAdmins: async(chatId) => {
        const result = await db('members')
            .join('chats', 'members.chat', 'chats.id')
            .where('chats.id', chatId)
            .andWhere('members.isAdmin', true)
            .select('members.user');
        return result
    },


    /**
     * 
     * @param {number} userId - id of the member
     * @param {UUID} chatId - id of the chat
     * @param {boolean} isAdmin 
     * @returns {Member} member object
     */
    addMember: async(userId, chatId, isAdmin=false) => {
        const [result] = 
            await db('members')
                .insert({user: userId, chat: chatId, isAdmin: isAdmin}, ['id', 'chat', 'user', 'isAdmin'])
        return result;
    },

    getAllMembers: async (chatId) => {
        const result = await db('users')
            .join('members', 'members.user', '=', 'users.id')
            .where('members.chat', chatId)
            .select('users.id', 'users.username')
        return result;
    },

    countMembers: async(chatId) => 
        db('members')
        .count('id')
        .where('members.chat', chatId),

    removeMember: async (userId, chatId) => {
        // const subquery = db('users').where('id', userId).select('username')

        // return await db('members')
        // .where('user', userId)
        // .where('chat', chatId)
        // .del(['members.user', subquery])
        const [result] =  await db('members')
            .where('user', userId)
            .andWhere('chat', chatId)
            .del(['user', 'chat']);
        return result;
    },

    isMember: async( userId, chatId) => {
        const [{count}] = await db('members')
            .join('chats', 'members.chat', 'chats.id')
            .count('user')
            .where('chats.id', chatId)
            .andWhere('members.user', userId);
        return count == 1;
    },

    removeMembers: async (userIds, chatId) => 
        await db('members')
        .whereIn('user', userIds)
        .where('chat', chatId)
        .del('user'),

    getChatInfo: async (chatId) => 
        await db('chats')
        .where('id', chatId)
        .first(),

    deleteChat: async(chatId) => {
        const [result] = await db('chats')
            .where('id', chatId)
            .del(['id', 'name'])
        return result;
    },

    addMessage: async(userId, chatId, msg) => {
        const [result] = await db('messages')
            .insert(
                {chat: chatId, sender: userId, message: msg}, 
                ['id', 'sender', 'chat', 'message']);
        return result;
    },

    // getLastMessages: async(userId, chatId, amount) => {
    //     throw new Error()
    // },

    // getLastMessage: async(chatId) => {
    //     throw new Error();
    // },

    countMessages: async(chatId) => {
        const {count} = await db('messages')
            .count('messages.id')
            .where('messages.chat', chatId)
            .first();
        return count;
    },

    getAllMessages: async(chatId) => 
        await db('messages')
            .where('chat', chatId)
            .select('id', 'sender', 'message', 'chat'),

    deleteAfter: async (startTime) => {
        // assert.ok(startTime)
        await db('users')
            .where('creation_time', '>=', startTime)
            .del();
        await db('chats')
            .where('creation_time', '>=', startTime)
            .del();
        await db('members')
            .where('creation_time', '>=', startTime)
            .del();
        await db('messages')
            .where('creation_time', '>=', startTime)
            .del()
    },

    // reset: async () => {
    //     for(const name of ['messages', 'chats', 'users']){
    //         await db.schema.dropTableIfExists(name);
    //     }

    //     console.log('tables removed')

    //     await db.schema.createTable('users', (table) => {
    //         table.increments('id').primary();
    //         table.string('username').unique().notNullable();
    //         table.string('hash').notNullable();
    //         table.timestamp('creation_date').defaultTo(db.fn.now());
    //     });

    //     await db.schema.createTable('chats', (table) => {
    //         table.uuid('id').primary();
    //         table.integer('user').notNullable(); 
    //         table.boolean('isDirect').notNullable();
    //         table.timestamp('creation_time').defaultTo(db.fn.now());
    //         table
    //             .foreign('user')
    //             .references('id')
    //             .inTable('users')
    //             .onDelete('CASCADE'); 
    //     })

    //     await db.schema.createTable('messages', (table) => {
    //         table.uuid('id').primary();
    //         table.uuid('chat');
    //         table.integer('sender');
    //         table.string('message').notNullable();
    //         table.timestamp('creation_time').defaultTo(db.fn.now());
            
    //         table
    //             .foreign('chat')
    //             .references('id')
    //             .inTable('chats')
    //             .onDelete('CASCADE');

    //         table 
    //             .foreign('sender')
    //             .references('id')
    //             .inTable('users')
    //             .onDelete('CASCADE');
    //     })

    //     console.log('tables created');
    // }
}