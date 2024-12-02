const db = require('../db/db');
const knex = require('knex');

module.exports = userService = {
    getAll: async() => {
        const users = await db('users');
        return users;
    },

    getById: async (id) => {
        const user = await db('users').where("id", id);
        return user;
    },

    getHash: async(username) => {
        const row = await db('hashpwd').where("username", username)
        if(row.length != 1){
            return undefined;
        }
        return row[0].password;
    },

    // create: async(user) => {
    //     const {username, email, first_name, last_name, hash} = user;
    //     const id = await db('users').insert({
    //         username: username,
    //         email: email,
    //         first_name: first_name,
    //         last_name: last_name}, ['id']);
    //     const _ = await db('hashpwd').insert({
    //         username: username, 
    //         password: hash}); 
    //     return id;
    // },

    create: async(user) => {
        try{
            db.transaction(
                async function(trx) {
                    const {username, email, first_name, last_name, hash} = user;
                    const id = await db('users').insert({
                        username: username,
                        email: email,
                        first_name: first_name,
                        last_name: last_name}, ['id']
                    );
                    await db('hashpwd').insert({
                        username: username, 
                        password: hash}); 
                    return id;
                })
        }
        catch(err){
            console.log(err);
        }
    },

    update: async(id, info) => {
        const usersInfo = Object.fromEntries(
            ['first_name', 'last_name', 'email']
            .filter((k) => k in info)
            .map((k) => [k, info[k]])
        )
        const users = await db('users').where("id", id).update(usersInfo);
        if(info.password !== undefined){
            const username = await db('hashpwd').select('username').from('users').where('id', id);
            
            await db('hashpwd').where("username", username[0]).update({password: info.password});
        }
        return users;
    },

    delete: async(id) => {
        const posts = await db('users').where("id", id).del();
        return posts;
    }
}