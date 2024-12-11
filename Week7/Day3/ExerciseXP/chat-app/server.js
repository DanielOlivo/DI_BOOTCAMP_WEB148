const app = require('./app');
const {Server} = require('socket.io');
const {createServer} = require('node:http');
const verify = require('./verification');
const userController = require('./controller/userController');
const assert = require('assert')


const server = createServer(app);

const io = new Server(server, {
    connectionStateRecovery: {}
});

io.use(verify);

io.on("connection", async (socket) => {

    console.log('connection: ' + socket.id);

    await addUserToChannels(socket);

    socket.on("msg", async ({username, chatId, msg}) => {
        // console.log('server: msg')
        // assert.ok(chatId || username);
        // assert.ok(!(chatId && username));
        assert.ok(msg);
        assert.ok(username);
        assert.ok(chatId);

        const inChat = await userController.userInChat(socket.user, chatId);
        // console.log('inChat', inChat);        

        if(!inChat){
            throw new Error('sender is not chat');
        }

        console.log(socket.rooms.values())
         
        // await userController.addMessage(chatId, username, msg);        
        io.to(chatId).emit('msg', {chatId: chatId, sender: socket.user, msg: msg});

    })    

    socket.on('create_chat', async(name, arg2, callback) => {
        assert.ok(name, 'absent of name');
        const info = await userController.createChat(socket.user, name);
        callback(info);
    })

    socket.on('remove_chat', async(chatId, arg2, callback) => {
        assert.ok(chatId);
        const users = userController.getMembers(chatId);
        assert.ok(users.length > 0);
        io.to(chatId).emit('chat_removed', {chatId: chatId});
        await removeChat(chatId); 
        callback(true)
    })

    socket.on('add_user', async(chatId, userId, callback) => {
        assert.ok(chatId)
        assert.ok(userId)
        assert.ok(chatName)
        await userController.addUserToChat(userId, chatId);
        io.to(userId).emit('added_to', {chatId: chatId, name: chatName});
    })

    socket.on('remove_user', async(chatId, userId, callback) => {
        assert.ok(chatId);
        assert.ok(userId);
        assert.ok(callback)

        await userController.removeUserFromChat(chatId, chatId); 

        io.to(userId).emit('removed', {chatId: chatId});
    });

    socket.on('find_user', async (userInput, arg2, callback) => {
        assert.ok(userInput);
        assert.ok(callback);

        const users = userController.findUsersBy(userInput);
        assert.ok(users)
        callback(users);
    });

    socket.on('fetch_chats', async (a1, a2, callback) => {
        // console.log('server: fetching_chats');
        assert.ok(userController.getChats)
        const chats = await userController.getChats(socket.user);
        assert.ok(chats)
        callback(chats);
    })

    socket.on('fetch_msg', async (chatId, latest_time, callback) => {
        assert.ok(chatId);
        assert.ok(latest_time);
        const messages = await userController.getLastMessages(chatId, latest_time);
        callback(messages);
    })
})

async function addUserToChannels(socket){
    const ids = await userController.getAllChats(socket.user);
    for(const {id: chatId} of ids){
        socket.join(chatId);
        // console.log(`${socket.user} in chat: ${chatId}`)
    }
}

module.exports.io = io;
module.exports.server = server;