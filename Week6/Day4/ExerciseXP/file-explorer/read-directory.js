const fs = require('fs');

function showFiles(dir){
    for(const fileName of fs.readdirSync(dir)){
        console.log(fileName);
    }
}

showFiles('./');