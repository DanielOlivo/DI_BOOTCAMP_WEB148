// exercise 1: print full name
const printFullName = ({first = 'John', last = 'Doe'}) => `Your full name is ${first} ${last}`;


// exercise 2: keys and values
const keysAndValues = (obj) => [Object.keys(obj).sort(), Object.values(obj).sort()];


// exercise 3: counter class
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment(); // count = 1
counterOne.increment(); // count = 2

const counterTwo = counterOne;
counterTwo.increment(); //the same object, count = 3

console.log(counterOne.count); //3