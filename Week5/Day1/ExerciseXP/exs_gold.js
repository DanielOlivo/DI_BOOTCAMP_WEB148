// exercise 1: nested functions
let landscape = function() {

    let result = "";

    let flat = function(x) {
        for(let count = 0; count<x; count++){
            result = result + "_";
        }
    }

    let mountain = function(x) {
        result = result + "/"
        for(let counter = 0; counter<x; counter++){
            result = result + "'"
        }
        result = result + "\\"
    }

    flat(4);
    mountain(4);
    flat(4)

    return result;
}

landscape() // ANSWER: ____/''''\____
// THE CONSOLE: ____/''''\\____
// it is strange, because I thought a single \ is for special characters and double \ displays single \.


// exercise 2: closure
const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);
// ANSWER: 13


// exercise 3: currying 
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
// ANSWER 31: curriedSum returns a function


// exercise 4: currying
{
    const curriedSum = (a) => (b) => a + b
    const add5 = curriedSum(5)
    add5(12)
}
// ANSWER 17: curriedSum returns function


// exercise 5: composing
{
    const compose = (f, g) => (a) => f(g(a));
    const add1 = (num) => num + 1;
    const add5 = (num) => num + 5;
    compose(add1, add5)(10)
}
// ANSWER: 16, firstly it adds 5, then 1