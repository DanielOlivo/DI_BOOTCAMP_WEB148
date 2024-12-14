// const db = require('../db/db')
// import db from '../db/db';
const { assert } = require('chai')
const userService = require('../service/users')

describe('testdb', () => {
    let startTime = new Date().toLocaleString();
    let dudesChatId, dudesChat;
    let dm1;
    let userId1, userId2, userId3;
    let username1, username2, username3;

    after(async() => {
        userService.deleteAfter(startTime);
    })

    it('users not exist', async () => {
        const exist1 = await userService.userExists('dude 1');
        const exist2 = await userService.userExists('dude 2');
        const exist3 = await userService.userExists('dude 3');

        assert.isFalse(exist1)
        assert.isFalse(exist2)
        assert.isFalse(exist3)
    })

    it('create users', async() => {
        const userAmount = await userService.getUsersAmount();

        ({id: userId1, username: username1} = await userService.createUser('dude 1', 'hash1')); 
        ({id: userId2, username: username2} = await userService.createUser('dude 2', 'hash2')); 
        ({id: userId3, username: username3} = await userService.createUser('dude 3', 'hash3')); 

        assert.isOk(userId1, "userId1 is not ok");
        assert.isOk(userId2, "userId2 is not ok");
        assert.isOk(userId3, "userId3 is not ok");

        assert.equal(username1, 'dude 1');
        assert.equal(username2, 'dude 2');
        assert.equal(username3, 'dude 3');
    });

    it("create dm between user1 and user2", async () => {
        ({id: dm1} = await userService.createDM(userId1));
        assert.isOk(dm1)

        let result1 = await userService.addMember(userId1, dm1);
        let result2 = await userService.addMember(userId2, dm1);
        assert.isOk(result1)
        assert.isOk(result2)

        const members = await userService.getAllMembers(dm1); 
        assert.isOk(members) 
        assert.equal(members.length, 2);

        const [{count}] = await userService.countMembers(dm1);
        assert.isOk(count)
        assert.equal(count, 2)
    })

    it("dude1 sends dm to dude2", async () => {
        let messages = await userService.getAllMessages(dm1);
        assert.equal(messages.length, 0);

        let {message, chat} = await userService.addMessage(userId1, dm1, 'hi');
        assert.equal(message, 'hi')
        assert.equal(chat, dm1)
        messages = await userService.getAllMessages(dm1);
        // console.log(messages)
        assert.equal(messages.length, 1);
        assert.equal(messages[0].message, 'hi');
    })

    it("dude2 fetches last message from dm1", async() => {
        const messages = await userService.getLastMessages(userId2, dm1, 10);
        assert.isOk(messages)
        assert.equal(messages.length, 1);
    })

    it("dude2 responds to dude1", async() => {
        const {message, chat} = await userService.addMessage(userId2, dm1, 'hey, man');
        assert.equal(message, 'hey, man')
        assert.equal(chat, dm1)

        const messages = await userService.getAllMessages(dm1);
        assert.equal(messages.length, 2);
    })

    it("dude2 creates group 'dudes'", async() => {
        let isDirect;
        ({id: dudesChatId, name: dudesChat, isDirect} = 
            await userService.createChat('dudes'));
        assert.isOk(dudesChatId);
        assert.isFalse(isDirect);
        assert.equal(dudesChat, 'dudes');
    })

    it("dude2 is the admin of 'dudes'", async() => {
        const {user, chat, isAdmin} = await userService.addMember(userId2, dudesChatId, true);
        assert.equal(chat, dudesChatId);
        assert.equal(user, userId2);
        assert.isTrue(isAdmin);
    })

    it("fetch the amount of users in 'dudes'", async() => {
        const [{count}] = await userService.countMembers(dudesChatId);
        assert.equal(count, 1);
    })

    it("dude2 sends message to 'dudes'", async() => {
        const {message} = await userService.addMessage(userId2, dudesChatId, 'anybody here?')
        assert.equal(message, 'anybody here?')
    })

    it("count amount of messages in 'dudes'", async() => {
        const count = await userService.countMessages(dudesChatId);
        assert.equal(count, 1);
    })

    it("dude2 adds the dude3", async() => {
        const {user, chat, isAdmin} = await userService.addMember(userId3, dudesChatId);
        assert.equal(user, userId3)
        assert.equal(chat, dudesChatId);
        assert.isFalse(isAdmin)

    })

    it("dude3 fetches message from 'dudes' (0 messages)", async() => {
        const messages = await userService.getLastMessages(userId3, dudesChatId, 10);
        assert.equal(messages.length, 0);
    })

    it("dude3 fetches info of chat 'dudes'", async() => {
        const {id: chatId, name: chatName, created_time} = await userService.getChatInfo(dudesChatId);
        assert.equal(chatId, dudesChatId);
        assert.equal(chatName, 'dudes');
    })

    it("dude3 sends hi to chat 'dudes'", async() => {
        const {message, creation_time} = await userService.addMessage(userId3, dudesChatId, "i'm here, guys");
        assert.equal(message, "i'm here, guys");
    })

    it("dude3 fetches again messages from 'dudes'", async () => {
        const messages = await userService.getLastMessages(userId3, dudesChatId, 10);
        assert.equal(messages.length, 1);
    })

    it("count total amount of messages in 'dudes'", async() => {
        const count = await userService.countMessages(dudesChatId);
        assert.equal(count, 2);
    })

    it("dude3 leaves 'dudes'", async () => {
        const {user, chat} = await userService.removeMember(userId3, dudesChatId);
        assert.isOk(user)
        assert.isOk(chat)
    })

    it("dude2 removes 'dudes' chat", async() => {
        const {id, name} = await userService.deleteChat(dudesChatId);
        assert.equal(id, dudesChatId)
        assert.equal(name, 'dudes')
    })

    it("remove dude1", async() => {
        const {id, username} = await userService.deleteUser(userId1);
        assert.equal(id, userId1);
        assert.equal(username, 'dude 1')
    })

    it("remove dude2 and dude3", async() => {
        const items = await userService.deleteUsers([Number(userId2), Number(userId3)]);
        assert.equal(items[0].id, userId2)
        assert.equal(items[0].username, 'dude 2')
        assert.equal(items[1].id, userId3)
        assert.equal(items[1].username, 'dude 3')
    })
})
