// exercise 1: location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person; // ANSWER: person object but without age

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// exercise 2: display student info
function displayStudentInfo(objUser){
    //destructuring
    let {first, last} = objUser;
    return `Your full name is ${first} ${last}`;
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


// exercise 3: user & id
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
const users2 = Object.entries(users);

// Modify the outcome of part 1, by multipling the user’s ID by 2.
const users3 = users2.map(([username, id]) => [username, id * 2]);


// exercise 4: person class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); // object


// exercise 5: dog class
class Dog {
  constructor(name) {
    this.name = name;
  }
};

// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


// exercise 6: challenges
[2] === [2]  // false
{} === {} // error

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // 4, because object2 is a reference to object1
console.log(object3.number) // 4, because object3 is a reference to object1
console.log(object4.number) // 5

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …
class Animal{
    constructor(type, color){
        this.type = type;
        this.color = color;
    }
}

// Create a class Mammal that extends from the Animal class. Inside the class, 
// add a method called sound(). This method takes a parameter: the sound the animal makes, 
// and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mammal extends Animal {
    constructor(type, color, name, sound){
        super(type, color);
        this.name = name;
        this.snd = sound;
    }

    sound(){
        return `${this.snd} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

const cow = new Mammal('cow', 'brown and white', 'Lily', 'Mooo');
cow.sound();