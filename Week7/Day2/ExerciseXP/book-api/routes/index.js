const express = require('express');
const bookController = require('../controllers/book')

const router = express.Router();
router.use(express.json())

router.route('/')
    .get(bookController.getAll)
    .post(bookController.create)
router.route('/:id')
    .get(bookController.getById)
    // .put(postController.update)
    // .delete(postController.delete)

module.exports = router;