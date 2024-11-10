// exercise 1: checking the bmi

// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height
// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
let person1 = {
    FullName : "Person One",
    Mass : 60,
    Height : 180,
    get_BMI: function(){
        return this.Height / this.Mass;
    }
};

let person2 = {
    FullName : "Person Two",
    Mass : 70,
    Height : 185,
    get_BMI: function(){
        return this.Height / this.Mass;
    }
};


// Outside of the objects, create a JS function that compares the BMI of both objects.
function compareBMI(o1, o2){
    return o1.get_BMI() > o2.get_BMI();
}

// Display the name of the person who has the largest BMI.
let firstIsGreater = compareBMI(person1, person2);
if(firstIsGreater){
    console.log(`${person1.FullName} has BMI larger`);
}
else {
    console.log(`${person2.FullName} has BMI larger`);
}
