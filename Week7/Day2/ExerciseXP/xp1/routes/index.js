const express = require('express');
const postController = require('../controllers/post')

const router = express.Router();
router.use(express.json())

router.route('/')
    .get(postController.getAll)
    .post(postController.create)
router.route('/:id')
    .get(postController.getById)
    .put(postController.update)
    .delete(postController.delete)

module.exports = router;