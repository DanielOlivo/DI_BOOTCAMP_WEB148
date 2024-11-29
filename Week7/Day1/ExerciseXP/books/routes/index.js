const express = require('express')

const router = express.Router();

const books = {};
books[1] = {
    author: "Lewis Carrol",
    title: 'Alice In Wonderland'
};
books[2] = {
    author: "Iain M. Banks",
    title: 'Player of Games'
}

let count = 3;

router.use(express.json())

router.get('/books', (req, res, next) => {
    res.json(books);
    next();
})

router.post('/books', (req, res, next) => {
    try{
        const {author, title} = req.body;
        books[count++] = {title: title, author: author};
        res.json(books[count - 1]);
        next();
    } catch (err) {
        console.log(err)
        console.log(req)
    }
})

router.put('/books/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const {title, author} = req.body;
    books[id] = {title: title, author: author}; 
    res.json(books[id]);
    next();
})

router.delete('/books/:id', (req, res, next) => {
    const id = Number(req.params.id);
    delete books[id];
    res.end("book removed")
    next()
})

module.exports = router;