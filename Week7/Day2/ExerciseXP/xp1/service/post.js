const db = require('../db/db');

module.exports = postService = {
    getAll: async() => {
        const posts = await db('post');
        return posts;
    },

    getById: async (id) => {
        const post = await db('post').where("id", id);
        return post;
    },

    create: async(post) => {
        const posts = await db('post').insert(post, ['id']);
        return posts;
    },

    update: async(id, post) => {
        const posts = await db('post').where("id", id).update({
            title: post.title,
            content: post.content
        }, ['title', 'content']);
        return posts;
    },

    delete: async(id) => {
        const posts = await db('post').where("id", id).del();
        return posts;
    }
}