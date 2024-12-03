const express = require('express');
const userController = require('../controllers/user');
const pageController = require('../controllers/pageController')
const validators = require('../controllers/validators.js');

const router = express.Router();
router.use(express.json())

router.route('/users')
    .get(userController.getAll)

router.route('/users/:id')
    .get(validators.validUUID(), userController.getById)
    .put(validators.validPut(), userController.update)

router.route('/login')
    .get(pageController.login)
    .post(validators.validPost(), userController.login)


router.route('/register')
    .get(pageController.register)
    .post(validators.validPost(), userController.create)

module.exports = router;