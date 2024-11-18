const inquirer = require('inquirer');

inquirer.createPromptModule()([
    {
        name: 'fullName',
        message: "What's your full name?"
    }
]).then(answer => {
    if(answer.fullName.trim().match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/g)){
        console.log('this is a valid name');
    }
    else {
        console.log('it is not a valid name');
    }
})