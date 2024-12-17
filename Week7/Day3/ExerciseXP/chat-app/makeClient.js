const { setTimeout } = require('node:timers/promises');

const assert = require('node:assert').strict;

module.exports = class SocketClient{
    constructor(socket, username){
        this.socket = socket;
        this.id = new Ref(undefined);
        this.msgRef = new Ref(undefined);
        this.chats = new Ref(undefined);
        this.username = username;

        socket.on('dm', (msg) => {
            // console.log('client: dm');
            this.msgRef.update({msg: msg});
        })

        // socket.on('')
    }

    async fetchId(){
        assert.ok(this.socket);
        const result = await this.id.waitUpdateWith(() => {
            this.socket.emit('fetch_id', this.username, '', (data) => {
                this.id.update(data)
            })
        })
        return result;
    }

    async fetchChats(){
        const result = await this.chats.waitUpdateWith(() => {
            this.socket.emit('fetch_chats', '', '', (chats) => {
                this.chats.update(chats);
            })}
        )
        return result;
    }

    async fetchDirectFrom(sender, msg){
        assert.notEqual(sender.username, this.username);
        assert.ok(sender, 'sender undefined');
        assert.ok(this.id, 'recipient undefined');

        const response = new Ref();
        const getResponse = () => response.waitUpdateWith(() => {
            // console.log('wait for 100ms...');
            // console.log('emitting')
            sender.socket.emit('dm',{sender: sender.id.info, recipient: this.id.info}, msg, (success) => {
                // console.log('success')
                response.update(success);
        })})

        const getMsg = () => this.msgRef.waitUpdateWith(async () => 
            // console.log('socket.on(msg)...')
            {}
        )

        const getMsg2 = () => sender.msgRef.waitUpdateWith(async() => {});

        // console.log('running total...')
        const total = await Promise.all([
            getResponse(), 
            getMsg2(),
            getMsg(),
        ]);
        // console.log('total: ', total)

        return total;
    }

    // async fetchDirectFrom(sender, msg){
    //     return new Promise((res, rej) => {
    //         sender.socket.emit('dm', {sender: sender.id, })
    //     })
    // }

    async fetchMessages(chatId){
        throw new Error();
    }

    async fetchMessage(chatId, msg){
        throw new Error();
    }

    async findUser(username){
        const list = new Ref();
        const result = await list.waitUpdateWith(() => {
            this.socket.emit('find_user', username, '', (data) => {
                list.update(data)
            })
        })
        return result;
    }

    async createChat(chatName){
        throw new Error();
    }

    // async fetchNewChat(chatName){
        
    // }

}


class Ref {
    constructor(info = undefined){
        this.info = info;
        this.promiseResolver;
        this.rejectId;
    }

    update (newInfo) {
        this.info = newInfo;
        if(this.promiseResolver){
            if(this.rejectId){
                clearTimeout(this.rejectId);
            }
            this.promiseResolver(newInfo);
            this.promiseResolver = undefined;
        }
    }

    waitUpdateWith(fn) {
        const promise = new Promise((resolve, reject) => {
            try{
                this.promiseResolver = resolve;
                this.rejectId = setTimeout(() => reject('timeout'), 2000);
                fn()
            } 
            catch(err){
                reject(err)
            }
        })
        // console.log('promise created')
        return promise;
    }
}

function wait(ms){
    return new Promise(resolve => {
        console.log('running timeout');
        setTimeout(() => {
            console.log('timeout now');
            resolve(ms)
        }, ms)
    });
}

function fetch_chats(socket){
    return new Promise((resolve, reject) =>{
        // const timer = setTimeout(() => reject(new Error('fetch_chats: fail')), 6000);
        setTimeout(() =>
            socket.emit('fetch_chats', '', '', async chats => {
                // console.log('chats: ');
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

