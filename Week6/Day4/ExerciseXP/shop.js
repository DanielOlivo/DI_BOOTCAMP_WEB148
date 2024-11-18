const products = require('./products.js');

function search(name){
    const result = products.find(product => product.name == name);
    console.log('Searching for ' + name + ": " + result);
}

search('name1');
search('name2');
search('name3');
search('name4');