const fs = require('fs');

function displayContent() {
    console.log(fs.readFileSync('./files/file-data.txt', 'utf-8'));
}

module.exports = displayContent;