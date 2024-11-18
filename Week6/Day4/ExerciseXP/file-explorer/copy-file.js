const fs = require('fs');

fs.writeFileSync('./destination.txt', fs.readFileSync('./source.txt', 'utf-8'));