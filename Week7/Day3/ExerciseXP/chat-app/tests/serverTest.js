const {server} = require('../server');
const app = require('../app')
const {io: Client} = require('socket.io-client');
const getToken = require('../token');

const {assert} = require('chai');
const request = require('supertest')

// const userController = require('../controller/userController');
const SocketClient = require('../makeClient');
// const SocketClient = require('../public/main/client');
const {deleteAfter} = require('../service/users');

describe('server_test', () => {
    
    url = 'http://localhost:5000';
    let startTime;
    let token1, token2;
    let user1, user2;
    let id1, id2;

    before(() => {
        startTime = new Date().toLocaleString();
        server.listen(5000, () => {});
    })

    after(async() => {
        await deleteAfter(startTime);
    })

    it("user1 registers", async () => {
        const response = await request(server)
            .post("/register")
            .send({username: 'dude 1', password: 'password 1'});
        assert.isOk(response);
        assert.equal(response.status, 302);
    })

    it('user1 logins', async () => {
        const response = await request(server)
            .post('/login')
            .send({username: 'dude 1', password: 'password 1'});
        assert.equal(response.status, 200);
        assert.isOk(response.body)
        assert.isOk(response.body.token)
        token1 = response.body.token;
    })

    it('user1 client connected', async () => {
        user1 = new SocketClient(new Client(url, {auth: {token: token1}}), 'dude 1');
        assert.isOk(user1)
        await wait(100);
        assert.isTrue(user1.socket.connected);
    })

    it('user2 registers', async () => {
        const response = await request(server)
            .post("/register")
            .send({username: 'dude 2', password: 'password 2'});
        assert.isOk(response);
        assert.equal(response.status, 302);
    })

    it('user2 logins', async () => {
        const response = await request(server)
            .post('/login')
            .send({username: 'dude 2', password: 'password 2'});
        assert.equal(response.status, 200);
        assert.isOk(response.body)
        assert.isOk(response.body.token)
        token2 = response.body.token;
    })

    it('user2 client connected', async () => {
        user2 = new SocketClient(new Client(url, {auth: {token: token2}}), 'dude 2');
        assert.isOk(user2)
        await wait(100);
        assert.isTrue(user2.socket.connected);
    })

    it('user1 fetches his id', async () => {
        const id = await user1.fetchId();
        // console.log('id: ', id);
        assert.isOk(user1.id)
    })

    it('user2 fetches his id', async() => {
        const id = await user2.fetchId();
        assert.isOk(user2.id);
    })

    it('user1 fetches chats', async () => {
        const chats = await user1.fetchChats();
        assert.isOk(user1.chats.info)
        assert.equal(user1.chats.info.length, 0);
    })

    it('user2 fetches chats', async () => {
        const chats = await user2.fetchChats();
        assert.isOk(user1.chats.info)
        assert.equal(user1.chats.info.length, 0);
    })

    it('user1 searches for user2', async() => {
        const result = await user1.findUser('dude 2'); 
        const {users, err} = result;
        assert.isOk(users);
        assert.isNotOk(err)
        assert.equal(users.length, 1);

        const [{username, id}] = users;
        assert.equal(username, 'dude 2')
        assert.equal(id, user2.id.info);
    });

    it('user1 sends dm to user2', async() => {
        const result = await user2.fetchDirectFrom(user1, 'hey, dude');
        assert.isOk(result)
        // console.log(result)
        const [
            {success},
            data1,
            data2
        ] = result;

        assert.isTrue(success)

        {
            const {msg: {msg, chatId, name, sender}} = data1;
            assert.isTrue(success)
            assert.isOk(chatId)
            assert.equal(name, 'dude 2');
            assert.equal(sender, user1.id.info);
        }
        {
            const {msg: {msg, chatId, name, sender}} = data2;
            assert.isTrue(success)
            assert.isOk(chatId)
            assert.equal(name, 'dude 1');
            assert.equal(sender, user1.id.info);
        }
    });

    it('user2 responds to user1', async() => {
        const result = await user1.fetchDirectFrom(user2, 'hi');
        assert.isOk(result)
        // console.log(result)
        const [
            {success},
            data1,
            data2
        ] = result;

        assert.isTrue(success)

        {
            const {msg: {msg, chatId, name, sender}} = data1;
            assert.isTrue(success)
            assert.isOk(chatId)
            assert.equal(name, 'dude 1');
            assert.equal(sender, user2.id.info);
            assert.equal(msg, 'hi')
        }
        {
            const {msg: {msg, chatId, name, sender}} = data2;
            assert.isTrue(success)
            assert.isOk(chatId)
            assert.equal(name, 'dude 2');
            assert.equal(sender, user2.id.info);
            assert.equal(msg, 'hi')
        }
    })

    // it('user2 creates chat "dudes"', async() => {
    //     const {id, name} = await user2.createChat('dudes');
    //     assert.isOk(id)
    //     assert.isOk(name)
    //     assert.equal(name, 'dudes')
    // })

    // it('user2 sends message to "dudes"', async() => {
    //     const {message, sender, creation_time} = await user2.fetchMessage(dudesId, "is there anyone?");
    //     assert.isOk(message)
    //     assert.isOk(sender)
    //     assert.isOk(creation_time)

    //     assert.equal(sender, user2);
    //     assert.equal(message, "is there anyone?")
    // })

    // it("user2 fetches messages from 'dudes'", async() => {
    //     const messages = await user2.fetchMessages(dudesId);
    //     assert.isOk(messages)
    //     assert.equal(messages.length, 1);
    // })

    // it('user2 fetches members from dudes', async() => {
    //     assert.isTrue(false);
    // })

    // it("user2 adds user3 to 'dudes'", async() => {
    //     assert.isTrue(false);
    // })

    // it("user3 fetches messages (gets none)", async() => {
    //     assert.isTrue(false);
    // })

    // it("user3 fetches members from dudes", async() => {
    //     assert.isTrue(false);
    // })

    // it('user3 sends message to "dudes"', async() => {
    //     assert.isTrue(false);
    // })

    // it("user3 fetches messages from 'dudes' (gets one)", async()=>{
    //     assert.isTrue(false);
    // })

    // it("user3 leaves dudes", async() => {
    //     assert.isTrue(false);
    // }) 

    // it('user2 fethces members (gets only itself)', async() => {
    //     assert.isTrue(false);
    // })    
})

function wait(ms){
    return new Promise(resolve => setTimeout(() => {
        resolve() 
    }, ms));
}
