// const db = require('../db/db')
// import db from '../db/db';
const { assert } = require('chai')
const userService = require('../service/users')

describe('testdb', () => {

    it('test', async () => {
        let startTime = new Date().toLocaleString();
        let dudesChatId, dudesChat;
        let dm1;
        let userId1, userId2, userId3;
        let username1, username2, username3;


        try{
            { // make users don't exist
                const exist1 = await userService.userExists('dude 1');
                const exist2 = await userService.userExists('dude 2');
                const exist3 = await userService.userExists('dude 3');

                assert.isFalse(exist1)
                assert.isFalse(exist2)
                assert.isFalse(exist3)
            }            

            {// create users

                const userAmount = await userService.getUsersAmount();
                // assert.ok(userAmount, 'userAmount error')

                ({id: userId1, username: username1} = await userService.createUser('dude 1', 'hash1')); 
                ({id: userId2, username: username2} = await userService.createUser('dude 2', 'hash2')); 
                ({id: userId3, username: username3} = await userService.createUser('dude 3', 'hash3')); 

                assert.isOk(userId1, "userId1 is not ok");
                assert.isOk(userId2, "userId2 is not ok");
                assert.isOk(userId3, "userId3 is not ok");

                assert.equal(username1, 'dude 1');
                assert.equal(username2, 'dude 2');
                assert.equal(username3, 'dude 3');

                const userAmount2 = await userService.getUsersAmount(); 
                assert.isOk(userAmount2)
                assert.equal(userAmount2 - userAmount, 3);
            }

            { // create direct between user1 and user2 
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
            }

            { // dude1 sends dm to dude2
                let messages = await userService.getAllMessages(dm1);
                assert.equal(messages.length, 0);

                let {message, chat} = await userService.addMessage(userId1, dm1, 'hi');
                assert.equal(message, 'hi')
                assert.equal(chat, dm1)
                messages = await userService.getAllMessages(dm1);
                // console.log(messages)
                assert.equal(messages.length, 1);
                assert.equal(messages[0].message, 'hi');
            } 

            { //dude2 fetches last messages from dm1
                const messages = await userService.getLastMessages(userId2, dm1, 10);
                // console.log(messages)
                assert.isOk(messages)
                assert.equal(messages.length, 1);
            }

            { // dude2 responds to dude1
                const {message, chat} = await userService.addMessage(userId2, dm1, 'hey, man');
                assert.equal(message, 'hey, man')
                assert.equal(chat, dm1)

                const messages = await userService.getAllMessages(dm1);
                assert.equal(messages.length, 2);
            }

            { // dude2 creates group 'dudes'
                let isDirect;
                ({id: dudesChatId, name: dudesChat, isDirect} = 
                    await userService.createChat('dudes'));
                assert.isOk(dudesChatId);
                assert.isFalse(isDirect);
                assert.equal(dudesChat, 'dudes');
            } 

            { // dude2 is the admin of 'dudes'
                const {user, chat, isAdmin} = await userService.addMember(userId2, dudesChatId, true);
                assert.equal(chat, dudesChatId);
                assert.equal(user, userId2);
                assert.isTrue(isAdmin);
            }

            { // fetch the amount of users in 'dudes'
                const [{count}] = await userService.countMembers(dudesChatId);
                assert.equal(count, 1);
            }

            { // dude2 sends message to 'dudes'
                const {message} = await userService.addMessage(userId2, dudesChatId, 'anybody here?')
                assert.equal(message, 'anybody here?')
            }

            { // count amount of messages in 'dudes' 
                const count = await userService.countMessages(dudesChatId);
                assert.equal(count, 1);
            }
            
            { // dude2 adds the dude3
                const {user, chat, isAdmin} = await userService.addMember(userId3, dudesChatId);
                assert.equal(user, userId3)
                assert.equal(chat, dudesChatId);
                assert.isFalse(isAdmin)
            }

            { // dude3 fetches messages from 'dudes' (0 messages)
                const messages = await userService.getLastMessages(userId3, dudesChatId, 10);
                assert.equal(messages.length, 0);
            }

            { // dude3 fetches info of chat 'dudes'
                const {id: chatId, name: chatName, created_time} = await userService.getChatInfo(dudesChatId);
                assert.equal(chatId, dudesChatId);
                assert.equal(chatName, 'dudes');
                // assert.isOk(created_time);
            }

            { // dude3 sends hi to chat 'dudes'
                const {message, creation_time} = await userService.addMessage(userId3, dudesChatId, "i'm here, guys");
                assert.equal(message, "i'm here, guys");
                // assert.isOk(new Date(timestamp));
            }

            { // dude3 fetches again messages from 'dudes'
                const messages = await userService.getLastMessages(userId3, dudesChatId, 10);
                assert.equal(messages.length, 1);
            }

            { // count total amount of messages in 'dudes'
                const count = await userService.countMessages(dudesChatId);
                assert.equal(count, 2);
            }

            { // dude3 leaves 'dudes'
                const {user, chat} = await userService.removeMember(userId3, dudesChatId);
                assert.isOk(user)
                assert.isOk(chat)
            }

            {// dude2 removes 'dudes' chat
                const {id, name} = await userService.deleteChat(dudesChatId);
                assert.equal(id, dudesChatId)
                assert.equal(name, 'dudes')
            }

            { // remove dude1
                const {id, username} = await userService.deleteUser(userId1);
                assert.equal(id, userId1);
                assert.equal(username, 'dude 1')
            }

            { // remove dude2 and dude3
                const items = await userService.deleteUsers([Number(userId2), Number(userId3)]);
                assert.equal(items[0].id, userId2)
                assert.equal(items[0].username, 'dude 2')
                assert.equal(items[1].id, userId3)
                assert.equal(items[1].username, 'dude 3')
            }
        } 
        catch (err){
            console.error(err)
            assert.isTrue(false);
        }
        finally {
            userService.deleteAfter(startTime);
        }

    })
})
