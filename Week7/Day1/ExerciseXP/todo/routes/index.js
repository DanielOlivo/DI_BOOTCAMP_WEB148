const express = require('express')

const router = express.Router();

const todos = {};
todos[1] = {title: 'make a burger', completed: false};
let count = 2;

router.use(express.json())

router.get('/todos', (req, res, next) => {
    res.json(todos);
    next();
})

router.post('/todos', (req, res, next) => {
    try{
        const {title} = req.body;
        todos[count++] = {title: title, completed: false};
        res.json(todos[count - 1]);
        next();
    } catch (err) {
        console.log(err)
        console.log(req)
    }
})

router.put('/todos/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const {title, completed} = req.body;
    todos[id] = {title: title, completed}; 
    res.json(todos[id]);
    next();
})

router.delete('/todos/:id', (req, res, next) => {
    const id = Number(req.params.id);
    delete todos[id];
    res.end("note removed")
    next()
})

module.exports = router;