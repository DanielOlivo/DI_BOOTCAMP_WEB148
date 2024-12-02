const gen = require('../gen');
const {hash} = require('../hashing');

exports.seed = async function(knex){
    await knex('users').del();
    await knex('hashpwd').del();

    for(i = 0; i < 10; i++){
        const {first_name, last_name, email, username, password} = gen();
        const hashed = await hash(password);

        await knex('users').insert({
            first_name: first_name,
            last_name: last_name,
            email: email,
            username: username
        });

        await knex('hashpwd').insert({
            username: username,
            password: hashed
        })

    }

    await knex('users').insert({
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@mail.com',
        username: 'john.doe'
    });

    const hashed = await hash('1234');

    await knex('hashpwd').insert({
        username: 'john.doe',
        password: hashed
    });
}