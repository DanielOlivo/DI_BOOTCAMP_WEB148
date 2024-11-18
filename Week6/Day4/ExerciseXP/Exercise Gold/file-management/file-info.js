const path = require('path');
const fs = require('fs');


function checkFile(){
    const dataPath = path.join('data', 'example.txt');
    if(fs.existsSync(dataPath)){
        const stats = fs.statSync(dataPath);

        console.log('size: ' + stats.size);    
        console.log('creation time: ' + stats.birthtime);
    }
    else {
        console.log("file doesn't exist");
    }
}

module.exports = checkFile;