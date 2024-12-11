const {server, io} = require('../server');
const {io: Client} = require('socket.io-client')
const dotenv = require('dotenv');
const getToken = require('../token');
const {assert} = require('chai');
const userController = require('../controller/userController');
// const makeClient = require('../makeClient')
const SocketClient = require('../makeClient');

describe('connections', () => {

    let users, startTime;
    const url = "http://localhost:5000";
    
    before((done) => {
        users = [];
        startTime = new Date().toLocaleString()
        server.listen(5000, () => {})
        done()
    })

    after(async () => {
        io.close();
        users.forEach(user => user.close());
        await userController.deleteAfter(startTime);
    });


    it('integrational test', async () => {
        try {
            users.push(new Client(url, {auth: {token: getToken({username: 'user1'})}}));
            users.push(new Client(url, {auth: {token: getToken({username: 'user2'})}}));
            users.push(new Client(url, {auth: {token: getToken({username: 'user3'})}}));
            users.push(new Client(url, {auth: {token: getToken({username: 'user4'})}}));

            const user1 = new SocketClient(users[0], 'user1');
            const user2 = new SocketClient(users[1], 'user2');
            const user3 = new SocketClient(users[2], 'user3');
            const user4 = new SocketClient(users[3], 'user4');

            assert.ok(user1)
            assert.ok(user2)
            assert.ok(user3)
            assert.ok(user4)

            await wait(1000);

            await user1.fetchChats()
            await user2.fetchChats()
            await user3.fetchChats()
            await user4.fetchChats()

            { //user2 sends to user1
                assert.ok('user1-user2' in user1.chats.info);
                let {msg, chat, sender} = await user1.fetchDirectFrom(user2, 'user1-user2', 'Hi, dude');
                assert.equal(msg, 'Hi, dude');
            }
            await wait(100);
            { // user1 sends to user2
                let {msg, chat, sender} = await user2.fetchDirectFrom(user1, 'user1-user2', 'Hi');
                assert.equal(msg, 'Hi');
            }

            await wait(100);
            {// user2 types to 'dudes' chat
                let result = await Promise.all([
                    user2.fetchDirectFrom(user2, 'dudes', 'HEEEY'), 
                    user3.fetchDirectFrom(user3, 'dudes', 'HEEEY'), 
                    user4.fetchDirectFrom(user4, 'dudes', 'HEEEY'), 
                ])
                assert.ok(result)
                assert.equal(result.length, 3);                
                assert.isTrue(result.every(({msg}) => msg == 'HEEEY'));
            }

            {// user2 sends message to user3

            }

            {
                // user1 creates group chat
                // const {chatId} = 

                // adds user3 to new chat

            }

            await wait(100);



        }
        catch (err){
            console.error(err);
        }
        finally {
            io.close();
            users.forEach(user => user.close());
            await userController.deleteAfter(startTime);
        }
    })

    it('user1 fetch_msg', () => {
        users.push(new Client(url, {auth: {token: getToken({username: 'user1'})}}));
        const user1 = users[0];
        const timerId = setTimeout(() => assert.isTrue(false), 4000);

        setTimeout(() => {
            user1.emit('fetch_chats', '', '', (chats) => {
                assert.isTrue(chats.length > 0);
                user1.emit('fetch_msg', chats[0].id, new Date().toLocaleString(), (messages) => {
                    assert.isTrue(messages.length > 0);
                    clearTimeout(timerId);
                    // done();
                })
            });
        }, 500);
    })    

    it('users1 fetch_chat', async () => {
        users.push(new Client(url, {auth: {token: getToken({username: 'user1'})}}));
        users[0].on('connect', () => {});
        const timerId = setTimeout(() => assert.isTrue(false), 4000);
        setTimeout(() => {
            users[0].emit('fetch_chats', '', '', (chats) => {
                assert.isTrue(chats.length > 0);
                clearTimeout(timerId);
                // done();
            });
        }, 1000);
    });

    // it('dude', () => {assert.isTrue(true)})
})

async function getChatsAndMessages(user){
    const chats = {}
    await user.emit('fetch_chats', '', '', (chatsIds) => {
        for(const {id} of chatsIds){
            chats[id] = [];
            // await user.emit('fetch_msg', id, new Date().toLocaleDateString(), (messages) => {
            //     chats[id] = messages;
            // })
        }
    })
    // const _ = await setTimeout(2000, 'resolved');
    return chats
}

// function fetch_chats(socket){
//     return new Promise((resolve, reject) =>{
//         // const timer = setTimeout(() => reject(new Error('fetch_chats: fail')), 6000);
//         setTimeout(() =>
//             socket.emit('fetch_chats', '', '', async chats => {
//                 console.log('chats: ');
//                 // chats.forEach(o => console.log(o.id));
//                 const result = await Promise.all(chats.map(async ({id}) => {
//                     const latest_time = new Date().toLocaleString()
//                     const msg = await fetch_messages(socket, id, latest_time)
//                     return [id, msg];
//                 }))
//                 // clearTimeout(timer);
//                 resolve(Object.fromEntries(result));
//             })     
//         ,500) 


//     });
// }

// function fetch_messages(socket, chatId, latest_time){
//     return new Promise((resolve, reject) => {
//         // const timer = setTimeout(() => reject(new Error('fetch_messages: fail')), 6000);
//         setTimeout(() => 
//             socket.emit('fetch_msg', chatId, latest_time, (msg) => {
//                 console.log('fetching msg: ' + msg)
//                 // clearTimeout(timer);
//                 resolve(msg)
//             })
//         , 500)
//     })
// }

function wait(ms){
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}