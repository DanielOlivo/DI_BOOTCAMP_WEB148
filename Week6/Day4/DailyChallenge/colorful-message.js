const chalk = require('chalk');

function display(message){
    console.log(chalk.red(message));
}

module.exports = display;