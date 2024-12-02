const userService = require('../service/user');
const {hash, compare} = require('../hashing');

module.exports = userController = {

    getAll: async(req, res, next) => {
        try {
            const users = await userService.getAll();
            res.json(users)
        } catch (err) {
            next(err);
        }
    },

    getById: async (req, res, next) => {
        try {
            const post = await userService.getById(req.params.id);
            res.json(post)
        } catch (err) {
            next(err);
        }
    },

    login: async (req, res, next) => {
        try {
            const hash = await userService.getHash(req.body.username); 
            if(hash === undefined){
                res.status(404).send('failed to login')
            }
            else {
                const result = await compare(req.body.password, hash);
                if(result){
                    res.status(200).send('user authorised');
                }
                else {
                    res.status(404).send('failed to login')
                }
            }
        } catch(err) {
            next(err); 
        }
    },

    create: async (req, res, next) => {
        try {
            const post = await userService.create(req.body);
            res.json(post);
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            let data = req.body; 
            if('password' in data){
                data.password = await hash(String(data.password))
            }
            const post = await userService.update(Number(req.params.id), req.body);
            res.json(post);
        } catch (err) {
            next(err);
        }
    },

}