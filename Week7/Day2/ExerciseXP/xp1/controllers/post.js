const postService = require('../service/post');

module.exports = postController = {

    getAll: async(req, res, next) => {
        try {
            const posts = await postService.getAll();
            res.json(posts)
        } catch (err) {
            next(err);
        }
    },

    getById: async (req, res, next) => {
        try {
            const post = await postService.getById(req.params.id);
            res.json(post)
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const post = await postService.create(req.body);
            res.json(post);
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const post = await postService.update(req.params.id, req.body);
            res.json(post);
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const post = await postService.delete(req.params.id);
            res.json(post);
        } catch (err) {
            next(err);
        }
    }
}

// class PostController{
//     async createPost(req, res){
//         try {
//             const id = await postService.createPost(req.body);
//             res.status(200).json(id);
//         }
//         catch (err) {
//             console.error(err);
//         }
//     }
// }

// module.exports = new PostController();