const app = require('./app');
const {Server} = require('socket.io');
const {createServer} = require('node:http');
const verify = require('./verification');
const userController = require('./controller/userController');

// const assert = require('assert')
// const {assert} = require('chai')
const {isNum, ok, notOk, eq, isTrue, isStr, isUUID} = require('./tests/utils')


const online = require('./onlineManager');

const server = createServer(app);
// server.use('/', router)

const io = new Server(server, {
    connectionStateRecovery: {}
});

io.use(verify);

io.on("connection", async (socket) => {

    // assert.ok(socket.user)
    // console.log('connection: ' + socket.id);

    // await addUserToChannels(socket);

    socket.on("dm", async ({sender, recipient}, msg, callback) => {

        // console.log('server: on dm');
        isNum(sender);
        isNum(recipient);
        isStr(msg);
        // console.log('server: on dm');

        // console.log('server: dm')
        await userController.handleDM(sender, recipient, msg, async ({data, err}) => {

            if(err){
                await callback({success: false});
                return;
            }

            callback({success: true})

            ok(online);
            ok(online.userIds);
            isTrue(recipient in online.userIds);

            const {chat: chatId} = data;
            ok(chatId);

            // console.log("server: emitting...")
            io.to(online.userIds[sender].socketId).emit('dm', {msg: msg, chatId: chatId, name: online.userIds[recipient].username, sender: sender});
            io.to(online.userIds[recipient].socketId).emit('dm', {msg: msg, chatId: chatId, name: online.userIds[sender].username, sender: sender});
            // io.to(online.userIds[recipient].socketId).emit('dm', msg);
        })
    });   

    socket.on("gm", async({sender, chatId}, msg, callback) => {
        isNum(sender)
        isNum(chatId)
        isStr(msg)

        await userController.handleGroupMessage(sender, chatId, msg, ({data, err}) => {
            ok(data)
            notOk(err)
            
        })

        throw new Error();
    });


    socket.on('create_chat', async(userId, name, callback) => {
        isNum(userId);
        isStr(name);
        await userController.createChat(userId, name, ({data, err}) => {
            throw new Error();
            callback(data);
        });
    })

    socket.on('remove_chat', async(userId, chatId, callback) => {
        isNum(userId);
        isUUID(chatId);
        await userController.handleGroupRemove(userId, chatId, ({data, err}) => {
            ok(data);
            notOk(err);
            throw new Error();
        })
    })

    socket.on('am', async({adminId, chatId}, memberId, callback) => {
        isUUID(chatId);
        isNum(adminId);
        isNum(memberId);
        await userController.handleNewMember(adminId, memberId, chatId, ({data, err}) => {
            throw new Error();
        });
    })

    socket.on('rm', async({adminId, chatId}, memberId, callback) => {
        isUUID(chatId)
        isNum(adminId)
        isNum(memberId)
        await userController.handleLeaving(memberId, chatId, ({data, err}) => {
            throw new Error();
        })
    });

    socket.on('leave', async(chatId, memberId, callback) => {
        isUUID(chatId)
        isNum(memberId)
        throw new Error();
    })

    socket.on('find_user', async (userInput, arg2, callback) => {

        await userController.handleUserSearch(online.users[socket.id], userInput, (data) => {
            callback(data);
        });
    });

    socket.on('fetch_id', async (username, a2, callback) => {
        await userController.fetchId(username, data => {
            callback(data)
        });
    })

    socket.on('fetch_chats', async (a1, a2, callback) => {
        try {
            const userId = online.users[socket.id].id; 
            isNum(userId);
            await userController.fetchChats(userId, ({chats, err}) => {
                ok(chats)
                notOk(err)
                callback(chats);
            });
        }
        catch(err){
            callback(undefined, {error:String(err)});
        }
    })

    socket.on('fetch_msg', async ({userId, chatId}, latest_time, callback) => {
        isNum(userId);
        isUUID(chatId);        
        ok(latest_time);

        throw new Error();
    })
})

function checkSocketAndRooms(socket, chatId){
    if(socket.rooms.indexOf(chatId) <= 0){
        socket.join(chatId) 
    }
}

async function addUserToChannels(socket){
    const ids = await userController.getAllChats(socket.user);
    for(const {id: chatId} of ids){
        socket.join(chatId);
        // console.log(`${socket.user} in chat: ${chatId}`)
    }
}



module.exports.io = io;
module.exports.server = server;