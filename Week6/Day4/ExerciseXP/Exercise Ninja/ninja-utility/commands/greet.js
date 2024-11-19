const chalk = require('chalk');

function greetUser(name){
    console.log('Hi, ' + chalk.green(name) + '!');
}

module.exports = greetUser;