const faker = require('@faker-js/faker');
const inquirer = require('inquirer');


let users = []

function addNewUser(){
    users.push({
        name: faker.person.fullName(),
        address: faker.location.streetAddress(),
        country: faker.location.country()
    });
}

function addUserFromInput(){
    const prompt = inquirer.createPromptModule();

    prompt([
        {
            name: 'fullName',
            message: "What's your full name?"
        },
        {
            name: 'address',
            message: "What's is your address?"
        },
        {
            name: 'country',
            message: "What country you are living in?"
        },
    ]).then(answer => {
        users.push({
            name: answer.fullName,
            address: answer.address,
            country: answer.country
        });
        for(const user of users){
            console.log(user);
        }
    });
}

for(i = 0; i < 100; i++){
    addNewUser();
}

addUserFromInput();
