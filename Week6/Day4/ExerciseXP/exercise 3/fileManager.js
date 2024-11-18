const fs = require('fs');

function readFile(path){
    return fs.readFileSync(path, 'utf-8');
}

function writeFile(path, content){
    fs.writeFile(path, content, function (err){
        if(err){
            console.log('error: ' + err);
        }
        else {
            console.log('file written successfully');
        }
    })
}

module.exports.writeFile = writeFile;
module.exports.readFile = readFile;