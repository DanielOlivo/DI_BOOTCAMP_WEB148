// exercise 1: scope

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// ANSWER: it displays alert with message: "inside the funcOne function 3"

// with const instead of let ?

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // ANSWER: a = 0
funcTwo()
funcThree() // ANSEWR: a = 5

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// ANSWER: error, because const can't be reassigned

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive() // 'hello'

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix() // ANSWER: test, because the function has its own scope
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// ANSWER: nothing, because they're in both scopes and unchanged


// exercise 2: ternary operator
const winBattle = () => {
    return true;
}
const experiencePoints = winBattle() ? 10 : 1;


// exercise 3: is it a string?
const isString = (arg) => typeof arg === 'string';
console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));


// exercise 4: find the sum
const sum = (a,b) => a + b;


// exercise 5: kg and grams

function toGrams1(kg) { // function declaration
    return kg * 1000;
}
// console.log(toGrams1(1));

const toGrams2 = function(kg) { // funciton expression
    return kg * 1000;
}
// console.log(toGrams2(1));

// expression starts as variable
const toGrams3 = (kg) => kg * 1000;
// console.log(toGrams3(1));


// exercise 6: fortune teller
(function fortuneTeller(job, geogpaphic, partner, numOfChildren){
    const p = document.createElement('p')
    p.appendChild(document.createTextNode(`You will be a ${job} in ${geogpaphic}, and married to ${partner} with ${numOfChildren} kids.`))
    document.getElementById('exs6').appendChild(p);
})('CEO', 'USA', 'Annabel', 10);


// exercise 7: welcome
(function (name){
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(name));
    document.getElementsByTagName('nav')[0].appendChild(div);
})('Vitalii')


// exercise 8: juice bar
function makeJuice(size){
    function addIngredients(fst, snd, thrd) {
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(`The client wants a ${size} juice, containing ${fst}, ${snd}, ${thrd}.`));
        document.getElementById('juice').appendChild(p);
    }
    addIngredients('one', 'two', 'three');
}
makeJuice('large');


function makeJuice2(size){
    let ingredients = []
    function addIngredients(fst, snd, thrd){
        ingredients.push(fst);
        ingredients.push(snd);
        ingredients.push(thrd);
    }

    function displayJuice(){
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(`The client wants a ${size} juice, containing ${ingredients.join(', ')}.`));
        document.getElementById('juice2').appendChild(p);
    }

    return [addIngredients, displayJuice];
}

const [fn1, fn2] = makeJuice2('large');
fn1('fst', 'snd', 'thrd');
fn1('fourth', 'fifth', 'sixth');
fn2();