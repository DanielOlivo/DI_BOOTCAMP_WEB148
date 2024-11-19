const { Command } = require('commander');
const greet = require('./commands/greet.js');
const getISSLocation = require('./commands/fetch.js');
const readFile = require('./commands/read.js');

const program = new Command();

program.command('greet')
    .description('Greet a username')
    .argument('<username>', 'name of user')
    .action((arg, options) => {
        greet(arg);
    });

program.command('iss')
    .description('get ISS locations')
    .action((arg, options) => {
        getISSLocation();
    });

program.command('read')
    .description('display the content of file')
    .argument('path', 'path to the file')
    .action((path, options) => {
        readFile(path);
    });


program.parse();