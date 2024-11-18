const persons = require('./data.js');

// console.log(persons);
function getAverage(){
    const avg = persons.reduce((acc, person) => acc + person.age, 0) / persons.length;
    console.log("average: " + avg);
}

getAverage();