// exercise 1: list of people
let people = ["Greg", "Mary", "Devon", "James"];
people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays
// Write code to remove “Greg” from the people array.
people.splice(0,1);
people

// Write code to replace “James” to “Jason”.
people[2] = "Jason";
people

// Write code to add your name to the end of the people array.
people.push("Vitalii")
people


// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
let people_copy = people.slice(1,3);
people_copy = people.slice(1,3);
people_copy

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people_copy.indexOf("Foo"));
// because it is not in the array

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people_copy.slice(-1);
last


// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for(i = 0; i < people.length; i++){
    console.log(people[i]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for(i = 0; i < people.length; i++){
    console.log(people[i]);
    if (people[i] == "Devon"){
        break;
    }
}


// exercise 2: your favorite color
// Create an array called colors where the value is a list of your five favorite colors.
let colors = ["Blue", "Purple", "Periwinkle", "Pink", "Black"]
colors

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for(i = 1; i <= colors.length; i++){
    console.log(`My #${i} choice is ${colors[i-1]}`);
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
let suffixes = ["st", "nd", "rd"];
suffixes
for(i = 1; i <= colors.length; i++){
    if(i > suffixes.length){
        console.log(`My ${i}th choice is ${colors[i-1]}`);
    } 
    else {
        console.log(`My ${i}${suffixes[i-1]} choice is ${colors[i-1]}`);
    }
}

