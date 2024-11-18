const lodash = require('lodash');
const {add, multiply} = require('./math.js');

{
    const result1 = lodash.add(1,2);
    const result2 = add(1,2);
    console.log(`result1 vs result2: ${result1} vs ${result2}` )
}

{
    const result1 = lodash.multiply(1,2);
    const result2 = multiply(1,2);
    console.log(`result1 vs result2: ${result1} vs ${result2}` )
}