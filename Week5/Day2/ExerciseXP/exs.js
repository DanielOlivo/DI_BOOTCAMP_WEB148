// exercise 1: colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, i) => console.log(i + "# choice is " + color));

if(colors.some((color) => color == 'Violet')){
    console.log('Yeah');
} else {
    console.log('No...');
}


// exercise 2: colors #2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["st","nd","rd","th"]; // I CHANGED IT
colors.forEach((color,idx) => console.log((idx + 1) + ordinal[Math.min(idx, 3)] + ' choice is ' + color));


// exercise 3: analyzing
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // [bread, carrot, potato, chicken, apple, orange]

// ------2------
const country = "USA";
console.log([...country]); //[U, S, A]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray); // [undefined, undefined]


// exercise 4: employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map((e) => 'Hello, ' + e.firstName);
const fullStack = users.filter((e) => e.role == 'Full Stack Resident');
const fullstack2 = users.filter((e) => e.role == 'Full Stack Resident').map((e) => e.lastName);


// exercise 5: star wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
epic.reduce((s, a) => s + ' ' + a);


// exercise 6: employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
students 
.filter((e) => e.isPassed)
.forEach((e) => console.log(`Good job ${e.name}, you passed the course in ${e.course}`));
