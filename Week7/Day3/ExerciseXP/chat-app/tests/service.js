const {assert} = require('chai')
// const service = require('../service/user');
const queries = require('../service/queries');
const service = require('../service/users');
const db = require('../db/db')

describe("service unit tests", () => {

    after(() => {
        db.destroy()
    })

    it('user1 exists', async () => {
        const result = await service.userExists('user1');
        assert.isTrue(result);
    })

    it('getAll', async () => {
        const users = await queries.getAll();
        assert.isTrue(users.length > 0);
    })

    it('user1', async () => {
        const count = await queries.countUser('user1');
        assert.equal(count, 1);
    })

    it('user1 hash', async () => {
        const hashed = await queries.getHash('user1');
        assert.equal(hashed, '1234');
    })

    it('user1 chats', async() => {
        const chats = await queries.getAllChatsId('user1');
        assert.isTrue(chats.length > 0);
    })

    it('user1 user2 dm', async() => {
        const dm = await queries.getDM('user1', 'user2');
        assert.isTrue(dm !== undefined);
    })

    it('get all messages from dm', async() => {
        const chatId = await queries.getDM('user1', 'user2');
        const messages = await queries.getMessages(chatId);
        assert.isTrue(messages.length > 0);
    })

    // it('get all messages from group chat', async() => {
          
    // })


})