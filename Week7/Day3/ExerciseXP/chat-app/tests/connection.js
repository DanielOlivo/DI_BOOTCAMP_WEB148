const {server, io} = require('../server');
const {io: Client} = require('socket.io-client')
const dotenv = require('dotenv');
const getToken = require('../token');
const {assert} = require('chai')

describe('connections', () => {

    let users;
    const url = "http://localhost:5000";
    
    before((done) => {
        server.listen(5000, () => {})
        users = [];
        done();
    })

    after((done) => {
        io.close();
        users.forEach(user => user.close());
        done()
    })

    it('users1 fetch_chat', (done) => {
        users.push(new Client(url, {auth: {token: getToken({username: 'user1'})}}));
        users[0].on('connect', () => {});
        const timerId = setTimeout(() => assert.isTrue(false), 4000);
        setTimeout(() => {
            users[0].emit('fetch_chats', '', '', (chats) => {
                assert.isTrue(chats.length > 0);
                clearTimeout(timerId);
                done();
            });
        }, 1000);
    });

    it('dude', (done) => {done()})
})
