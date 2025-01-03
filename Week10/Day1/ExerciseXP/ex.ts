// ex 1
{
    function printHelloWorld(): void {
        console.log('hello world!')
    }
    // printHelloWorld()
}


// ex 2
{
    let age: number = 30;
    let name: string = 'dude'
    // console.log(`${age} ${name}`)
}


// ex 3
{
    let id: string | number;
    id = 0;
    id = 'zero'
    // id = true;
}

// ex 4
{
    function getSign(n: number): string {
        if(n < 0) return 'negative'
        else if(n > 0) return 'positive'
        else  return 'zero;'
    }
}


// ex 5
{
    function getDetails(name: string, age: number): [string, number, string] {
        return [name, age, `Hello, ${name}! You are ${age} years old.`]
    }
    // console.log(getDetails('Alice', 25))
}


// ex 6
{
    type Person = {
        name: string,
        age: number
    }

    function createPerson(name: string, age: number): Person {
        return {name, age}
    }

    // console.log(createPerson('Alice', 25))
}


// ex 7
{
    // let element = <HTMLInputElement>document.getElementById('container');
    // let val: string = element.value
}


// ex 8
{
    function getAction(role: string): string {
        switch(role){
            case 'admin': return 'Manage users and settings'
            case 'editor': return 'Edit content'
            case 'viewer': return 'View content'
            case 'guest': return 'Limited access'
            default: return 'Invalid role'
        }
    }

    // console.log(getAction("admin")); // Output: Manage users and settings
    // console.log(getAction("editor")); // Output: Edit content
    // console.log(getAction("viewer")); // Output: View content
    // console.log(getAction("guest")); // Output: Limited access
    // console.log(getAction("unknown")); // Output: Invalid role
}

// ex 9
{
    function greet(name?: string): void;

    function greet(name?: string): void {
        let greeting = name ? `Hi, ${name}!` : 'Hi!'
        console.log(greeting);
    }

    // greet()
    // greet('Alice')
}
