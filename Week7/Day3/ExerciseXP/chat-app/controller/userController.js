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

const assert = require('node:assert').strict;

module.exports = userController = {
    
    userInChat: async (username, chatid) => {
        assert.ok(username);
        assert.ok(chatid);
        const result = await userService.checkUserInChat(username, chatid);
        assert.ok(result);
        return result;
    },

    getAllChats: async (username) => {
        const result = await userService.getAllChats(username);
        return result;
    },

    getChats: async (username) => {
        assert.ok(username);
        assert.ok(userService.getChats)
        const result = await userService.getChats(username);
        assert.ok(result);
        return result;
    },

    deleteAfter: async startTime => {
        assert.ok(startTime);
        assert.ok(new Date(startTime));
        await userService.deleteAfter(startTime)
    },

    getRegistrationPage: async (req, res, next) => {
        res.send(path.join(__dirname, '../public/registration/index.html'));
    },

    getLastMessages: async (chatId, latest_time) => await userService.getLastMessages(chatId, latest_time, 10),

    addMessage: async(chatId, sender, message) => {throw new Error('not implemented')},

    createUser: async(req, res, next) => {
        const {username, password} = req.body;
        if(userService.userExists(username)){
            return res.status(400).json({message: 'user already exists'})
        }
        const hashed = await hash(password);
        userService.createUser(username, hashed);
        res.redirect('/login');
    },

    createChat: async(userId, name) => {
        throw new Error()
    },

    getMembers: async(chatId) => {
        throw new Error();
    },

    getLoginPage: async(req, res, next) => {
        res.send(path.join(__dirname, '../public/login/index.html'));
    },

    addUserToChat: async (userId, chatId) => {
        throw new Error();
    },

    removeUserFromChat: async(userId, chatId) => {
        throw new Error()
    },

    findUsersBy: async(userInput) => {
        throw new Error();
    },

    login: async(req, res, next) => {},

    getMainPage: async(req, res, next) => {
        res.send(path.join(__dirname, '../public/login/index.html'));
    }
}