const {readFile, writeFile} = require('./fileManager.js');


writeFile('./Buy World.txt', readFile('./HelloWorld.txt'));

