const fs = require('fs');
const {validationResult} = require('express-validator');
const {v4: uuidv4} = require('uuid');

const path = './data/tasks.json'

function tasks(){
    return JSON.parse(fs.readFileSync(path)).tasks;
}

function write(items){
    return fs.writeFileSync(path, JSON.stringify({tasks: items}, null, 4));
}

const run = (fn) => (req, res, next) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        else {
            fn(req, res, next);
        }
    } catch (err) {
        next(err);
    }
}

module.exports = taskController = {
    getAll: run((req, res, next) => {
            res.status(200).json(tasks());
    }),

    getById: run((req, res, next) => {
        let items = tasks();
        const item = items.find((task) => task.id === req.params.id);
        if(item === undefined){
            res.status(404).send('task not found');
        }
        else {
            res.status(200).json(item);
        };
    }),

    create: run((req, res, next) => {
        let item = {id: uuidv4(), title: req.body.title, completed: false};
        let items = tasks();
        items.push(item);
        write(items);
        res.status(200).json(item);
    }),

    update: run((req, res, next) => {
        const items = tasks();
        const idx = items.findIndex((task) => task.id === req.params.id);
        if(idx == -1){
            res.status(404).send('not found');
        }
        else {
            const {title = items[idx].title, completed = items[idx].completed} = req.body;
            items[idx].title = title;
            items[idx].completed = completed
            write(items)
            res.status(200).json(items[idx]);
        }
    }),

    delete: run((req, res, next) => {
        let items = tasks();
        if(!items.some((item) => item.id === req.params.id)){
            res.status(404).send('not found');
        }        
        else {
            items = items.filter((item) => item.id !== req.params.id);
            write(items);
            res.status(200).send('removed');
        }
    })
}