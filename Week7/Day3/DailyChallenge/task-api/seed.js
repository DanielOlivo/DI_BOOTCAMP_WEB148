const { faker } = require('@faker-js/faker');
const { hash } = require('./hashing')
const fs = require('fs');
const {v4: uuidv4} = require('uuid');


async function makeUser(username, password){
    const hashed = await hash(password);
    return {
        username: username,
        hash: hashed,
        id: uuidv4()
    }
}

async function makeUsers(){
    const data = await Promise.all(
        Array.from({length: 10}, (_, i) => 
            i == 9  ? ['john.doe', '1234'] 
            : [faker.internet.username(), faker.internet.password()])
        .map(async (args) => await makeUser(...args))
    )

    // console.log(data)
    fs.writeFileSync('./data/users.json', JSON.stringify({users: data}, null, 4));
}

makeUsers()