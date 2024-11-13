// sum elements
const getSum = (arr) => arr.reduce((acc, x) => acc + x, 0);
getSum([1,2,3,4]);


// remove duplicates
[1,1,2,1,3].map((x, i) => [x,i])

function distinct(arr){
    let result = [];
    let visited = new Set()

    for(i = 0; i < arr.length; i++){
        if(!visited.has(arr[i])){
            result.push(arr[i]);
            visited.add(arr[i]);
        }
    }
    return result;
}

distinct([1,1,2,3,2,2,4,8,1]);


// remove certain values
[NaN, 0, 15, false, -22, '',undefined, 47, null].filter(x => x !== undefined && x !== null && !isNaN(x) && x !== false && x !== 0 && x !== '');


// Write a JavaScript function to concatenate a given string n times (default is 1).
function repeat(s, count){
    let result = ''
    for(i = 0; i < count; i++){
        result += s;
    }
    return result;
}
console.log(repeat('Ha!',3));


// turtle and rabbit 
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

console.log(startLine);
console.log(turtle.padStart(9, ' '));
console.log(rabbit.padStart(9, ' '));