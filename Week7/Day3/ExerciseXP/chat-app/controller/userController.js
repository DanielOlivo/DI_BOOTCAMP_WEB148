const dotenv = require('dotenv');
const path = require('path');
const userService = require('../service/users');
const {hash, compare} = require('../hashing');

const passport = require('passport');
const passportJwt = require('passport-jwt');
const jwt = require('jsonwebtoken');
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const {parsed: {SECRET}} = dotenv.config();

module.exports = userController = {
    
    userInChat: async (username, chatid) => {
        const result = await userService.checkUserInChat(username, chatid);
        return result;
    },

    getAllChats: async (username) => {
        const result = await userService.getAllChats(username);
        return result;
    },

    getRegistrationPage: async (req, res, next) => {
        res.send(path.join(__dirname, '../public/registration/index.html'));
    },

    getLastMessages: async (chatId, latest_time) => await userService.getLastMessages(chatId, latest_time, 10),

    createUser: async(req, res, next) => {
        const {username, password} = req.body;
        if(userService.userExists(username)){
            return res.status(400).json({message: 'user already exists'})
        }
        const hashed = await hash(password);
        userService.createUser(username, hashed);
        res.redirect('/login');
    },

    getLoginPage: async(req, res, next) => {
        res.send(path.join(__dirname, '../public/login/index.html'));
    },

    login: async(req, res, next) => {},

    getMainPage: async(req, res, next) => {
        res.send(path.join(__dirname, '../public/login/index.html'));
    }
}