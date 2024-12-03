const express = require('express');
const taskController = require('../controllers/task');
const validators = require('../controllers/validators.js');

const router = express.Router();
router.use(express.json())

router.route('/')
    .get(taskController.getAll)
    .post(validators.validPost(), taskController.create)

router.route(
    '/:id', 
)
    .get(validators.validUUID(), taskController.getById)
    .put(validators.validPut(), taskController.update)
    .delete(validators.validUUID(), taskController.delete)

module.exports = router;