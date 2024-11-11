
//exercise 1: find the numbers divisible by 23
function displayNumbersDivisible(divisor = 23){
    let arr = 
        Array.from({length: 500}, (_, i) => i + 1)
        .filter((num) => num % 23 == 0);
    console.log(arr); 
    console.log(arr.reduce((s, a) => s + a, 0));
}

// displayNumbersDivisible()

// exercise 2: shopping list
// Add the stock and prices objects to your js file.
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Create an array called shoppingList with the following items: 
// “banana”, “orange”, and “apple”. It means that you have 1 banana, 
// 1 orange and 1 apple in your cart.
let cart = ['banana', 'orange', 'apple'];

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
function myBill(){
    return cart.filter((item) => stock[item] > 0)
        .map((item) => prices[item])
        .reduce((s,a) => s + a, 0);
}

// Call the myBill() function.
// console.log(myBill())

// Bonus: If the item is in stock, decrease the item’s stock by 1
function myBill2(){
    let sum = 0;
    for(item of cart){
        if(stock[item] > 0){
            stock[item] -= 1;
            sum += prices[item];
        }
    }
    return sum;
}
// console.log(myBill2());
// console.log(stock);


// exercise 3: what's in my wallet?
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price 
// (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price 
// (ie. it means that you cannot afford the item) the function should return false
function changeEnough(itemPrice, amountOfChange){
    let costs = [0.25, 0.10, 0.05, 0.01];
    return itemPrice < amountOfChange.map((a, i) => a * costs[i]).reduce((s, a) => s + a);
}
// console.log(changeEnough(14.11, [2,100,0,0]) ); // false
// console.log(changeEnough(0.75, [0,0,20,5])); // true