const db = require('../db/db');

module.exports = postService = {
    getAll: async() => {
        const books = await db('books');
        return books;
    },

    getById: async (id) => {
        const books = await db('books').where("id", id);
        return books;
    },

    create: async(post) => {
        const posts = await db('books').insert(post, ['id']);
        return posts;
    },

    // update: async(id, post) => {
    //     const posts = await db('post').where("id", id).update({
    //         title: post.title,
    //         content: post.content
    //     }, ['title', 'content']);
    //     return posts;
    // },

    // delete: async(id) => {
    //     const posts = await db('post').where("id", id).del();
    //     return posts;
    // }
}