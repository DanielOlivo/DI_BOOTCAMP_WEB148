const dotenv = require('dotenv');
const path = require('path');
const userService = require('../service/users');
const {hash, compare} = require('../hashing');
const getToken = require('../token');

const passport = require('passport');
const passportJwt = require('passport-jwt');
const jwt = require('jsonwebtoken');
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const {parsed: {SECRET}} = dotenv.config();

const assert = require('node:assert').strict;

module.exports = userController = {
    
    handleRegistration: async (username, password, callback) => {
        const exists = await userService.userExists(username);
        if(exists){
            callback({err: 'user exists'});
            return;
        }
        const hashed = await hash(password); 
        const data = await userService.createUser(username, hashed);
        callback({data: data});
    },

    handleLogin: async (username, password, callback) => {
        const exists = await userService.userExists(username);
        if(!exists){
            callback({err: 'not matched'});
            return;
        }
        const hashed = await userService.getHash(username);
        const result = await compare(password, hashed);
        if(!result){
            callback({err: 'not matched'});
            return
        }
        callback({data: true});
    },

    fetchId: async(username, callback) => {
        const userExists = await userService.userExists(username);
        if(!userExists){
            callback(undefined, {error: 'not found'});
        }
        else {
            const id = await userService.fetchId(username);
            callback(id, undefined);
        }
    },

    fetchChatsByUsername: async(username, callback) => {
        const chats = await userService.getChatsByUsername(username)
        callback(chats, undefined);
    },

    fetchChats: async (userId, callback) => {
        try {
            const chats = await userService.getChats(userId);
            callback({chats: chats});
        }
        catch(err){
            callback({err: String(err)});
        }
    },

    fetchMessages: async(userId, chatId, since, callback) => {
        try {
            const result = await userService.getAllMessages(chatId)
            callback({messages: result});
        }
        catch(err){
            callback({err: String(err)})
        }
    },

    // handleUserSearch: async (userId, text, callback) => {
    //     throw new Error()
    // },

    /**
     * 
     * @param {number} senderId 
     * @param {number} recepientId 
     * @param {string} msg 
     * @param {Function} callback 
     * @returns 
     */
    handleDM: async (senderId, recepientId, msg, callback) =>{
        try{
            const exist = await Promise.all([
                userService.userIdExists(senderId),
                userService.userIdExists(recepientId)
            ])

            if(!exist){
                console.log('users do not exist');
                await callback({err: 'forbidden'});
                return;
            }
            console.log('both exist');

            let dmId;
            const dms = await userService.getDM(senderId, recepientId);
            if(dms.length == 0){
                console.log('creating dm...');
                ({id: dmId} = await userService.createDM());
                await userService.addMember(senderId, dmId);
                await userService.addMember(recepientId, dmId);
            }
            else{
                console.log('getting dm...')
                ({id: dmId} = dms[0]);
            }

            const data = await userService.addMessage(senderId, dmId, msg);
            await callback({data: data});
            return 
        }
        catch(err){
            callback({err: String(err)});
        }
    },

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

    createUser: async(req, res) => {
        const {username, password} = req.body;
        if(await userService.userExists(username)){
            return res.status(400).json({message: 'user already exists'})
        }
        const hashed = await hash(password);
        await userService.createUser(username, hashed);
        res.redirect('/login');
        // res.status(201).json({message: "success"});
    },

    createChat: async(userId, name, callback) => {
        try{
            const {id: chatId, name: chatName} = await userService.createChat(name);
            const {user: adminId} = await userService.addMember(userId, chatId, true);
            await callback({data: {admin: adminId, name: chatName, chatId: chatId}});
            return;
        }
        catch{error} {
            console.log('err: ', error)
            callback({error: "some error"});
        }
    },

    handleNewMember: async(adminId, userId, chatId, callback) => {
        try {
            const data = await userService.addMember(userId, chatId, false);
            callback({member: data})
            return;
        }
        catch(err){
            callback({err: String(err)})
        }
    },

    handleLeaving: async(userId, chatId, callback) => {
        try {
            const data = await userService.removeMember(userId, chatId);
            await callback({data: data});
            return;
        }
        catch(err){
            await callback({err: String(err)})
            return;
        }
    },

    handleGroupRemove: async(adminId, chatId, callback) => {
        try {
            const admins = await userService.getGroupAdmins(chatId); 
            const adminIds = admins.map(i => i.user);
            const isAdmin = adminIds.includes(adminId);

            // console.log('isAdmin: ', isAdmin);
            if(!isAdmin){
                await callback({err: 'forbidden'});
                return;
            }

            const data = await userService.deleteChat(chatId);
            // console.log(data)
            await callback({data: data})
            return;
        }
        catch{err} {
            // console.log('who calls you????!!!')
            await callback({err: String(err)})
        }
    },

    handleGroupMessage: async (userId, chatId, message, callback) => {
        try {
            const isMember = await userService.isMember(userId, chatId);
            // console.log('isMember: ', isMember)
            if(!isMember){
                await callback({err: 'forbidden'})
            }
            else {
                const data = await userService.addMessage(userId, chatId, message);
                await callback({data: data});
            }
            return
        }
        catch (err){
            await callback({err: String(err)});
        }
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

    handleUserSearch: async(userId, userInput, callback) => {
        const exists = userService.userIdExists(userId);
        if(!exists){
            callback({err: 'unauthorized access'})
            return;
        }
        try {
            const searchResult = await userService.findUser(userInput);
            callback({users: searchResult})
        }
        catch(err){
            callback({err: String(err)})
        }
    },

    login: async(req, res) => {
        const {username, password} = req.body; 
        const hashed = await userService.getHash(username);
        const comparisonResult = await compare(password, hashed);      
        if(!comparisonResult){
            return res.status(404).json({message: 'not found'})
        }
        res.status(200).json({token: getToken(username)});
    },

    getMainPage: async(req, res, next) => {
        res.send(path.join(__dirname, '../public/login/index.html'));
    }
}