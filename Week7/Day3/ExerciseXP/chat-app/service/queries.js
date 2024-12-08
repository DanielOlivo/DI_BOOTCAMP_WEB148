const db = require('../db/db');

module.exports = queries = {

    countUser: async username => {
        const result = await db('users')
            .where('username', username)
            .count('username');
        return result[0].count;
    },

    createUser: (username, hashed) =>
        db('users').insert({username: username, hash: hashed}),

    getAll: async () => await db('users').select('username'),

    getHash: async (username) => {
        const res = await db('users')
            .select('hash')
            .where('username', username)
            .first();
        return res.hash;
    },

    getAllChatsId: async (username) => {
        const res = await db('members')
            .join('users', 'members.user', '=', 'users.id')
            .join('chats', 'members.chat', '=', 'chats.id')
            .where('users.username', username)
            .select('chats.id');
        return res;
    },

    getDM: async (username1, username2) => {
        const res = await db('members')
            .join('users', 'members.user', '=', 'users.id')
            .join('chats', 'members.chat', '=', 'chats.id')
            .whereIn('users.username', [username1, username2])
            .andWhere('chats.isDirect', true)
            .select('chats.id')
            .first();
        return res.id;
    },

    getChatIdsByName: async (name) => 
        await db('chats')
            .where('name', name)
            .select('chats.id'),

    getMessages: async(chatId) => 
        await db('chats')
            .join('messages', 'chats.id', '=', 'messages.chat')
            .join('users', 'messages.sender','=', 'users.id')
            .select(['users.username', 'messages.message', 'messages.creation_time']),

    
}