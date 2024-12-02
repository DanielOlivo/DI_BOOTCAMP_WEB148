const express = require('express');
const userController = require('../controllers/user')

const router = express.Router();
router.use(express.json())

router.route('/users')
    .get(userController.getAll)

router.route('/users/:id')
    .get(userController.getById)
    .put(userController.update)

router.route('/register')
    .post(userController.create);

router.route('/login')
    .post(userController.login)


module.exports = router;