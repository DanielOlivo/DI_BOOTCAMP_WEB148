const fs = require('fs');
const {validationResult} = require('express-validator');
const {hash, compare} = require('../hashing');
const {v4: uuidv4} = require('uuid')

const path = './data/users.json'

function users(){
    return JSON.parse(fs.readFileSync(path)).users;
}

async function readWith(res, itemsHandler){
    fs.readFile(path, 'utf8', async (err, data) => {
        if(err){
            res.status(400).json({errors: err})
        }
        else {
            await itemsHandler(JSON.parse(data).users);
        }
    })
}

function write(items){
    return fs.writeFileSync(path, JSON.stringify({users: items}, null, 4));
}

function run(fn){
    async function handler (req, res, next) {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }
            else {
                await fn(req, res, next);
            }
        } catch (err) {
            next(err);
        }
    }
    return handler;
}

module.exports = userController = {

    getAll: run(async (req, res, next) => {
        readWith(res, (items) => res.status(200).json(items));
    }),

    getById: run(async (req, res, next) => {
        readWith(res, (items) => {
            const item = items.find((task) => task.id === req.params.id);
            if(item === undefined){
                res.status(404).send('task not found');
            }
            else {
                res.status(200).json(item);
            };
        })
    }),

    create: run(async (req, res, next) => {
        const {username, password} = req.body;
        readWith(res, async (items) => {
            if(items.some((user) => user.username === username)){
                return res.status(400).json({message: 'user already exists'})
            }
            const hashed = await hash(password)
            let user = {id: uuidv4(), username: username, hash: hashed};
            items.push(user);
            const obj = JSON.stringify({users: items}, null, 4);
            fs.writeFile(path, obj, (err) => {
                if(err){
                    console.log(err)
                }
            });
            res.status(200).json({message: `Hi! Your account (id = ${user.id}) was created!`});
        })
    }),

    update: run(async (req, res, next) => {
        readWith(res, async (users) => {
            const idx = users.findIndex((user) => user.id === req.params.id);
            if(idx == -1){
                return res.status(404).send('not found');
            }
            const {password} = req.body;
            const hashed = await hash(password);
            users[idx].hash = hashed;
            fs.writeFile(path, users);
            res.status(200).json({id: users[idx].id});
        })
    }),

    login: run(async (req, res, next) => {
        readWith(res, async items => {
            const {username, password} = req.body;
            const user = items.find((user) => user.username === username);
            if(user === undefined){
                return res.status(404).send('unmatched');
            }
            const isMatched = await compare(password, user.hash)
            if(!isMatched){
                return res.status(400).json({message: 'login or password not matching'});
            }
            return res.status(200).json({message: `Welcome, ${user.username}`});
        })
    })
}