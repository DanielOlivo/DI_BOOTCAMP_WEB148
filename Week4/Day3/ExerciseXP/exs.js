
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