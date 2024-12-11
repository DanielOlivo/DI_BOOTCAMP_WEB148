const { returning } = require('../db/db');
const {hash, compare} = require('../hashing');

const addMessage = chatId => (sender, message) => db('messages').insert({
        chat: chatId,
        sender: sender,
        message: message
    })

exports.seed = async function(db){
    let [{id: user1}] = await db('users').insert({username: 'user1', hash: '1234'}, ['id']);
    let [{id: user2}] = await db('users').insert({username: 'user2', hash: '1234'}, ['id']);
    let [{id: user3}] = await db('users').insert({username: 'user3', hash: '1234'}, ['id']);
    let [{id: user4}] = await db('users').insert({username: 'user4', hash: '1234'}, ['id']);

    console.log(`user1: ${user1}`)

    let [{id: chatid}] = await db('chats').insert({isDirect: true, name:'user1-user2'},['id']);
    console.log(`chatid: ${chatid}`);

    await db('members').insert({chat: chatid, user: user1}); 
    await db('members').insert({chat: chatid, user: user2}); 

    const dmAdder = addMessage(chatid);
    await dmAdder(user1, 'hey, dude');
    await dmAdder(user2, "hey, what's up");
    await dmAdder(user1, 'great');


    let [{id: groupid}] = await db('chats').insert({isDirect: false, name: 'dudes'}, ['id']);
    await db('members').insert({chat: groupid, user: user2}); 
    await db('members').insert({chat: groupid, user: user3}); 
    await db('members').insert({chat: groupid, user: user4}); 

    const groupAdder = addMessage(groupid);
    groupAdder(user2, 'hi');
    groupAdder(user3, 'hi');
    groupAdder(user4, 'hi');
}

