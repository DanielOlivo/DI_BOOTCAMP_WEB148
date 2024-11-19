const getTimeDifference = require('./date.js');

const {days, hours} = getTimeDifference();

console.log(`the 1st January is in ${days} days and ${hours} hours`);