const assert = require('node:assert').strict;

module.exports = class SocketClient{
    constructor(socket, username){
        this.socket = socket;
        this.msgRef = new Ref(undefined);
        this.chats = new Ref(undefined);
        this.username = username;

        socket.on('msg', ({sender, chatId, msg}) => {
            // console.log('client: receiving msg');
            this.msgRef.update({sender: sender, chatId: chatId, msg: msg});
        })

        socket.on('')
    }

    async fetchChats(){
        // assert.ok(this.socket.connected)
        const result = await this.chats.waitUpdateWith(() => {
            // console.log('emitting');
            this.socket.emit('fetch_chats', '', '', (chats) => {
                this.chats.update(Object.fromEntries(
                    chats.map(({id, name}) => [name, id])
                ));
            })}
        )
        // console.log(result)
        return result;
    }

    async fetchDirectFrom(sender, chatName, msg){
        assert.ok(sender)
        assert.ok(sender.socket);
        assert.ok(chatName);
        assert.ok(msg)
        const result = await this.msgRef.waitUpdateWith(() => {
            sender.socket.emit('msg', {
                username: sender.username, 
                chatId: this.chats.info[chatName], 
                msg: msg
            })
            // console.log('emitted')
        }) 
        return result;
    }

    async fetchNewChat(chatName){
        
    }

}


class Ref {
    constructor(info){
        this.info = info;
        this.promiseResolver;
    }

    update (newInfo) {
        this.info = newInfo;
        if(this.promiseResolver){
            this.promiseResolver(newInfo);
            this.promiseResolver = undefined;
        }
    }

    waitUpdateWith(fn) {
        const promise = new Promise(resolve => {
            this.promiseResolver = resolve;
        })
        // console.log('promise created')
        fn()
        return promise;
    }
}


function fetch_chats(socket){
    return new Promise((resolve, reject) =>{
        // const timer = setTimeout(() => reject(new Error('fetch_chats: fail')), 6000);
        setTimeout(() =>
            socket.emit('fetch_chats', '', '', async chats => {
                console.log('chats: ');
                // chats.forEach(o => console.log(o.id));
                const result = await Promise.all(chats.map(async ({id}) => {
                    const latest_time = new Date().toLocaleString()
                    const msg = await fetch_messages(socket, id, latest_time)
                    return [id, msg];
                }))
                // clearTimeout(timer);
                resolve(Object.fromEntries(result));
            })     
        ,500) 


    });
}

function fetch_messages(socket, chatId, latest_time){
    return new Promise((resolve, reject) => {
        // const timer = setTimeout(() => reject(new Error('fetch_messages: fail')), 6000);
        setTimeout(() => 
            socket.emit('fetch_msg', chatId, latest_time, (msg) => {
                console.log('fetching msg: ' + msg)
                // clearTimeout(timer);
                resolve(msg)
            })
        , 500)
    })
}

