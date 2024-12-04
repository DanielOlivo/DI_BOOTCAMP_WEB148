const fs = require('fs');

const path = './data/notes.json';

function readWith(fn){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log(err);
        }
        else {
            fn(JSON.parse(data).notes);
        }
    })
}

async function write(items){
    const content = JSON.stringify({notes: items}, null, 4);
    fs.writeFile(path, content, (err) => console.log(err));
}

module.exports = controller = {
    add: async (title, body) => {
        readWith(async (notes) => {
            notes.push({title: title, body: body});
            await write(notes);
            console.log('Done');
        })
    },

    list: () => {
        readWith((notes) => {
            notes.forEach( ({title, body}) => console.log(`${title}:\t${body}`))
            console.log('Done');
        })
    },

    remove: (title) => {
        readWith(async (notes) => {
            notes = notes.filter((note) => note.title !== title);
            await write(notes);
            console.log('Done');
        })
    }
}