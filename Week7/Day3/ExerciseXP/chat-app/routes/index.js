const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();
router.use(express.json());

router.route('/')
    .get(userController.getMainPage);

router.route('/register')
    .get(userController.getRegistrationPage)
    .post(userController.createUser);

router.route('/login')
    .get(userController.getLoginPage)
    // .post(userController);

module.exports = router;