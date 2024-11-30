const express = require('express');
const {body, param, validationResult} = require('express-validator');

const router = express.Router();

const posts = {};
posts[1] = {
    title: 'post 1', 
    content: "some content",
    timestamp: Date.now() 
};
posts[2] = {
    title: 'post 2', 
    content: "some other content",
    timestamp: Date.now() 
};

let count = 3;

const postValidation = [
    body('title').exists().notEmpty().trim(),
    body('content').exists().notEmpty().trim()
];

const idValidation = [
    param('id').exists().toInt().custom(id => id in posts)
];


router.use(express.json())

router.get('/', (req, res, next) => {
    res.json(posts);
    next();
})

router.post('/', [postValidation], async(req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {title, content} = req.body;
    posts[count++] = {title: title, content: content, timestamp: Date.now()}
    res.json(posts[count - 1]);
    next();
});

router.put('/:id', [idValidation, postValidation], async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({errors: errors.array()});
    }
    const id = Number(req.params.id);
    const {title, completed} = req.body;
    posts[id] = {title: title, completed}; 
    res.json(posts[id]);
    next();
})

router.delete('/:id', [idValidation], (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({errors: errors.array()});
    }

    const id = Number(req.params.id);
    delete posts[id];
    res.end("note removed")
    next()
})

module.exports = router;