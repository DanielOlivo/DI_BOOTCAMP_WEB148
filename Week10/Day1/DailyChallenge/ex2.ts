interface Person {
    name: string,
    age: number
}

function getProperty(obj: Person, prop: keyof Person){
    return obj[prop];
}

const person: Person = {name: 'Alice', age: 25}

console.log(getProperty(person, 'name'))
console.log(getProperty(person, 'age'))
// console.log(getProperty(person, 'height')) // compile error