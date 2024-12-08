const app = require('./app');
const {Server} = require('socket.io');
const {createServer} = require('node:http');
const verify = require('./verification');
const userController = require('./controller/userController');


const server = createServer(app);

const io = new Server(server, {
    connectionStateRecovery: {}
});

io.use(verify);

io.on("connection", async (socket) => {
    await addUserToChannels(socket);

    socket.on("msg", async ({chatId, msg}) => {
        const inChat = await userController.userInChat(socket.user, chatId);
        if(!inChat){
            throw new Error();
        }
        io.to(chatId).emit({chat: chatId, sender: socket.user, msg: msg});
    })    

    socket.on('fetch_chats', async (a1, a2, callback) => {
        const chats = await userController.getAllChats(socket.user);
        callback(chats);
    })

    socket.on('fetch_msg', async (chatId, latest_time, callback) => {
        const messages = await userController.getLastMessages(chatId, latest_time);
        callback(messages);
    })
})

async function addUserToChannels(socket){
    const ids = await userController.getAllChats(socket.user);
    for(const chatId of ids){
        socket.join(chatId);
    }
}

module.exports.io = io;
module.exports.server = server;