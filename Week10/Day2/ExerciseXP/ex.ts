// ex 1
class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(name: string, salary: number, position: string, department: string){
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    public getEmployeeInfo(){
        return {
            name: this.name,
            position: this.position
        }
    }
}

// ex2
class Product {
    readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getProductInfo(): string{
        return `Product ${this.name}; price: ${this.price}`
    }
}

let product = new Product(1, 'car', 10000)
// product.id = 2;  // fail


// ex 3
class Animal {
    public name: string;

    constructor(name: string){
        this.name = name;
    }

    public makeSound(): string {
        return '?'
    }
}

class Dog extends Animal {
    constructor(){
        super('Dog')
    }

    public makeSound(): string {
        return 'Bark';
    }
}

const [animal, dog] = [new Animal('?'), new Dog()]
// console.log(animal.makeSound())
// console.log(dog.makeSound())


// ex 4
class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}
// console.log(Calculator.add(1,2))
// console.log(Calculator.subtract(1,2))


// ex 5
interface User {
    readonly id: number
    name: string 
    email: string
}

interface PremiumUser extends User {
    membershipLevel?: number
}

function printUserDetails(user: PremiumUser): void {
    const {id, name, email, membershipLevel = 0} = user
    console.log(`Premium user: ${id}; name: ${name}; email: ${email}; level: ${membershipLevel}`)
}

const user = <PremiumUser>{
    id: 1, name: 'Alice', email: 'alice@gmail.com'
}

// printUserDetails(user)