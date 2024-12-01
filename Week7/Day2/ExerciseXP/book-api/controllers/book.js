const bookService = require('../service/book');

module.exports = bookController = {

    getAll: async(req, res, next) => {
        try {
            const books = await bookService.getAll();
            res.json(books)
        } catch (err) {
            next(err);
        }
    },

    getById: async (req, res, next) => {
        try {
            const book = await bookService.getById(req.params.id);
            if(book.length == 0){
                res.status(404).send({error: 'book not found'});
            }
            else {
                res.json(book)
            }
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const book = await bookService.create(req.body);
            res.json(book);
        } catch (err) {
            next(err)
        }
    },

    // update: async (req, res, next) => {
    //     try {
    //         const post = await postService.update(req.params.id, req.body);
    //         res.json(post);
    //     } catch (err) {
    //         next(err);
    //     }
    // },

    // delete: async (req, res, next) => {
    //     try {
    //         const post = await postService.delete(req.params.id);
    //         res.json(post);
    //     } catch (err) {
    //         next(err);
    //     }
    // }
}
