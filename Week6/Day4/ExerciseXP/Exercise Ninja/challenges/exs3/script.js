const getNextHoliday = require('./date.js');

async function main(){
    const {holiday, days, hours, minutes} = await getNextHoliday();

    console.log(`The next holiday ${holiday} is in ${days} days and ${hours}:${minutes}`); 
}

main();