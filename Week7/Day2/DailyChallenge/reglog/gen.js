const {faker} = require('@faker-js/faker')

module.exports = function (){
    const fn = faker.person.firstName();
    const ln = faker.person.lastName();
    const email = faker.internet.email();
    const username = faker.internet.username();
    const password = faker.internet.password()
    return {
        first_name: fn,
        last_name: ln,
        email: email, 
        username: username,
        password: password
    };
};