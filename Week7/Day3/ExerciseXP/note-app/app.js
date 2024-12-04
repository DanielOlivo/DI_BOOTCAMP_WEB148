const yargs = require('yargs')
const controller = require('./controller');
const { argv } = require('process');

const title = {
    describe: 'Title',
    demandOption: true,
    type: 'string'
}

yargs.command({
    command: 'add',
    describe: 'Adds new note',
    builder: {
        title: title,
        body: {
            describe: 'Content',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        controller.add(argv.title, argv.body)
    }
});

yargs.command({
    command: 'list',
    describe: 'Display all notes',
    handler(argv){
        controller.list()
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove note by title',
    builder: {
        title: title
    },
    handler(argv) {
        controller.remove(argv.title);
    }
})

yargs.parse()