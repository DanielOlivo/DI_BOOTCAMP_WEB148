const getMinutes = require('./date.js');

async function main(){
    const minutes = await getMinutes();
    console.log('Minutes till your birthday: ' + minutes);
}

main();