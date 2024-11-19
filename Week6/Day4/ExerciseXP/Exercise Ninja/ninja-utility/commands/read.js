const fs = require('fs');

function readFile(path){
    if(!fs.existsSync(path)){
        console.log('failed to find a file');
    }
    else {
        const content = fs.readFileSync(path, 'utf-8');
        console.log(content);
    }
}

module.exports = readFile;