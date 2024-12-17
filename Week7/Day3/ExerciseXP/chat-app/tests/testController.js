const {assert} = require('chai');
const userController = require('../controller/userController');
const userService = require('../service/users')

describe('controller test', () => {
    let startTime;
    let userId1, userId2, userId3;
    let name1, name2, name3;
    let dm1, dudesId;

    before(() => {
        startTime = new Date().toLocaleString();
    })

    after(async() => {
        await userService.deleteAfter(startTime);
    })

    it("users do not exist", async() => {
        const result = await Promise.all([
            userService.userExists("dude 1"),
            userService.userExists("dude 2"),
            userService.userExists("dude 3")
        ])

        assert.isTrue(result.every(i => !i));
    })

    it("dude1 registration", async() => {
        await userController.handleRegistration('dude 1', 'hash 1', ({data, err}) => {
            assert.isNotOk(err);
            assert.isOk(data);
            // console.log('DATA ', data)
            ({id: userId1, username: name1} = data);
            assert.isOk(name1);
            assert.isOk(userId1);
            assert.equal(name1, 'dude 1')
        });
    })

    it("dude2 registration", async() => {
        await userController.handleRegistration('dude 2', 'hash 2', ({data, err}) => {
            assert.isNotOk(err);
            assert.isOk(data);
            ({id: userId2, username: name2} = data);
            assert.isOk(name2);
            assert.isOk(userId2);
            assert.equal(name2, 'dude 2')
        });
    })

    it("dude3 registration", async() => {
        await userController.handleRegistration('dude 3', 'hash 3', ({data, err}) => {
            assert.isNotOk(err);
            assert.isOk(data);
            ({id: userId3, username: name3} = data);
            assert.isOk(name3);
            assert.isOk(userId3);
            assert.equal(name3, 'dude 3')
        });
    })

    it("dude1 logins", async() => {
        await userController.handleLogin('dude 1', 'hash 1', ({data, err}) => {
            assert.isNotOk(err);
            assert.isOk(data);
        }) 
    })

    it("dude2 logins with wrong password", async() => {
        await userController.handleLogin('dude 2', 'wrong hash', ({data, err}) => {
            assert.isNotOk(data);
            assert.isOk(err);
        }) 
    })

    it("dude2 logins", async() => {
        await userController.handleLogin('dude 2', 'hash 2', ({data, err}) => {
            assert.isNotOk(err);
            assert.isOk(data);
        }) 
    })

    it("dude1 fetches chats (has none)", async() => {
        await userController.fetchChats(userId1, ({chats, err}) => {
            assert.isNotOk(err);
            assert.isOk(chats);
            assert.equal(chats.length, 0);
        });
    })

    it("user1 searches for user2", async() => {
        await userController.handleUserSearch(userId1, 'dude 2', ({users, err}) => {
            assert.isOk(users);
            assert.isNotOk(err);
            assert.equal(users.length, 1)
            const {username, id} = users[0];
            assert.equal(username, 'dude 2')
            assert.equal(id, userId2);
        }) 
    })

    it("user1 sends message to user2", async() => {
        await userController.handleDM(userId1, userId2, 'hey, dude', ({data, err}) => {
            // console.log('err', err);
            // console.log('data ', data)
            assert.isNotOk(err);
            assert.isOk(data);
            const {sender, message} = data;
            assert.equal(sender, userId1);
            assert.equal(message, 'hey, dude');
        });
    })

    it("user1 and user2 fetch messages", async() => {
        await userController.fetchChats(userId1, async (chats) => {
            assert.isOk(chats);
            assert.equal(chats.length, 1)
            const {id, name} = chats[0];
            assert.isOk(id);
            assert.isNotOk(name);
            await userController.fetchMessages(userId1, id, new Date(), async (messages) => {
                assert.isOk(messages);
                assert.equal(messages.length, 1);
                assert.equal(messages[0].message, 'hey, dude');
            });
        })
    })

    it("user2 responds to user1", async() => {
        const msg = "hi, what's up?"
        await userController.handleDM(userId1, userId2, msg, ({data, err}) => {
            assert.isOk(data)
            assert.isNotOk(err)
            const {message, sender} = data;
            assert.isOk(message)
            assert.equal(message, msg)
            assert.equal(sender, userId1);
        });
    })

    it("user1 fetches chats and messages", async() => {
        await userController.fetchChats(userId1, async ({chats, err}) => {
            assert.isOk(chats)
            assert.isNotOk(err)
            const {id} = chats[0];
            await userController.fetchMessages(userId1, id, new Date(), async ({messages, err}) => {
                assert.equal(messages.length, 2);
                assert.equal(messages[0].message, "hi, what's up?");
                assert.equal(messages[1].message, 'hey, dude');
            });
        })
    })

    it("user2 creates group chat 'dudes'", async() => {
        await userController.createChat(userId2, 'dudes', async ({data, err}) => {
            assert.isNotOk(err);
            assert.isOk(data);
            const {admin, name, chatId} = data;
            assert.equal(admin, userId2);
            assert.equal(name, 'dudes');
            assert.isOk(chatId);

            dudesId = chatId;
        }) 
    });

    it("user2 sends message to 'dudes'", async() => {
        await userController.handleGroupMessage(userId2, dudesId, "is anyone here?", ({data, err}) => {
            assert.isOk(data);
            assert.isNotOk(err);
        });
    })

    it("user2 adds user3 to 'dudes'", async() => {
        await userController.handleNewMember(userId2, userId3, dudesId, ({member, err}) => {
            assert.isNotOk(err);
            assert.isOk(member);
        })
    })    

    it("user3 sends message to 'dudes'", async() => {
        await userController.handleGroupMessage(userId3, dudesId, "i'm here", ({data, err}) => {
            assert.isOk(data);
            assert.isNotOk(err);
        })
    })

    // wrong
    it("user3 fetches messages from 'dudes' (gets one)", async() => {
        await userController.fetchMessages(userId3, dudesId, new Date(), ({messages, err}) => {
            assert.isOk(messages);
            assert.isNotOk(err);
        })
    })

    // wrong
    it("user2 fetches messages from 'dudes' (gets two)", async() => {
        await userController.fetchMessages(userId2, dudesId, new Date(), ({messages, err}) => {
            assert.isOk(messages);
            assert.isNotOk(err);
        })
    })

    it("user3 leaves the 'dudes'", async() => {
        await userController.handleLeaving(userId3, dudesId, async ({data, err}) => {
            assert.isNotOk(err);
            assert.isOk(data);
            const {user, chat} = data;
            assert.equal(user, userId3);
            assert.equal(chat, dudesId);
        });
    })

    it("user1 tries to send message into 'dudes' (he is not a member", async() => {
        await userController.handleGroupMessage(userId1, dudesId, 'i am not a member', ({data, err}) => {
            assert.isOk(err);
            assert.isNotOk(data);
            assert.equal(err, 'forbidden');
        })
    })

    it("user1 tries to remove chat 'dudes' (he is not a member)", async() => {
        await userController.handleGroupRemove(userId1, dudesId, ({data, err}) => {
            assert.isOk(err);
            assert.isNotOk(data);
            assert.equal(err, 'forbidden');
        })
    })

    it("user2 removes the 'dudes'", async() => {
        await userController.handleGroupRemove(userId2, dudesId, async ({data, err}) => {
            assert.isOk(data);
            assert.isNotOk(err);
            const {id, name} = data;
            assert.equal(id, dudesId);
            assert.equal(name, 'dudes');
        })
    })
})