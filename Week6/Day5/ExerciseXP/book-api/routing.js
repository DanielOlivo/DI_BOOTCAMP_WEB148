const express = require('express')
const app = express()

let books = [
    {id: 1, title: "Alice in Wonderland", author: "Lewis Caroll", publishedYear: 1865},
    {id: 2, title: "Player of Games", author: "Iain M. Banks", publishedYear: 1988},
]

app.use(express.json())

app.get("/api/books", (req, res) => {
    res.json(books)
})

app.get("/api/books/:bookID", (req, res) => {
    const id = Number(req.params.bookID);
    const book = books.find((book) => book.id === id);
    if(!book){
        return res.status(404).send("book not found")
    }
    res.json(book);
})


app.post("/api/books", (req, res) => {
    const {id, title, author, publishedYear} = req.body;
    const newBook = {
        id: id,
        title: title,
        author: author,
        publishedYear: publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
})

module.exports = app;