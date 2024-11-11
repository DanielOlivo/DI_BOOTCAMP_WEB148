
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


//exercise 4: vacations costs
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
function hotelCost(){
    while (true){
        const pattern = /^\s*\d+\s*$/;
        const userInput = prompt("how many nights? ");

        if(!userInput.match(pattern)){
            console.log(`failed to parse ${userInput}; try again`);
            continue;
        }

        const number = Number(userInput);
        return number * 140;
    }
}
// console.log(hotelCost());

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
function planeRideCost(){
    const destinations = {
        "London" : 183,
        "Paris" : 220,
    };

    while (true) {
        const destination = prompt("your destination? ").trim();

        if(destination.length == 0 || !destination.match(/^\w/i)){
                console.log(`failed to parse ${destination}; try again`);
                continue;
        }

        return destination in destinations ? destinations[destination] : 300;
    }
}
// console.log(planeRideCost());


// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
function rentalCost(){
    while (true){
        const userInput = prompt("how many days you need a car?").trim();

        if(!userInput.match(/\d+/i)){
            console.log(`failed to parse ${userInput}; try again`);
            continue;
        }

        const days = Number(userInput);
        return days <= 10 ? days * 40 : days * 40 * 0.95;
    }
}
// console.log(rentalCost());

// Define a function called totalVacationCost() that returns 
// the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
function totalVacationCost(){
    const hotelCost = hotelCost();
    const rideCost = planeRideCost();
    const rentCost = rentalCost();
    return hotelCost + rideCost + rentCost;
}
// Call the function totalVacationCost()
// console.log(totalVacationCost());

// Bonus: Instead of using a prompt inside the 3 first functions, 
// only use a prompt inside the totalVacationCost() function. 
// You need to change the 3 first functions, accordingly.
function hotelCost2(nights = null){
    let nights2 = nights;
    while (nights2 === null){
        const pattern = /^\s*\d+\s*$/;
        const userInput = prompt("how many nights? ");

        if(!userInput.match(pattern)){
            console.log(`failed to parse ${userInput}; try again`);
            continue;
        }

        nights2 = Number(userInput);
    }
    return nights2 * 140;
}

function planeRideCost2(dst = null){
    const destinations = {
        "London" : 183,
        "Paris" : 220,
    };

    let destination = dst;
    while(destination === null){
        const userInput = prompt("your destination? ").trim();

        if(userInput.length == 0 || !userInput.match(/^\w/i)){
            console.log(`failed to parse ${userInput}; try again`);
            continue;
        }

        destination = userInput;
        break;
    }

    return destination in destinations ? destinations[destination] : 300;
}

function rentalCost2(days = null){
    let days2 = days;
    while (days2 === null){
        const userInput = prompt("how many days you need a car?").trim();

        if(!userInput.match(/\d+/i)){
            console.log(`failed to parse ${userInput}; try again`);
            continue;
        }

        days2 = Number(userInput);
        break;
    }
    return days2 <= 10 ? days2 * 40 : days2 * 40 * 0.95;
}

function totalVacationCost2(){
    nights = Number(prompt("nigths: ").trim());
    destination = prompt('destination: ');
    days = Number(prompt("rental: ").trim());
    const hotelCost = hotelCost2(nights);
    const rideCost = planeRideCost2(destination);
    const rentCost = rentalCost2(days);
    return hotelCost + rideCost + rentCost;
}

// console.log(totalVacationCost2());