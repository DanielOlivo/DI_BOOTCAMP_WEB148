// ex1
{
    type Person = {
        name: string
        age: number
    }

    type Address = {
        street: string 
        city: string
    }

    type PersonWithAdress = Person & Address

    const person = {
        name: 'Alice',
        age: 25,
        street: 'Dizengoff St',
        city: 'Tel Aviv'
    } as PersonWithAdress;
}

// ex 2 
{
    type Alphanumeric = string | number
    function describeValue(arg: Alphanumeric): string {
        if(typeof arg === 'string') return 'This is a string'
        return 'This is a number'
    }
}


// ex 3
{
    let someValue: any = 'dude'
    // console.log((someValue as string).length)
}

// ex 4
{
    function getFirstElement(arr: (number | string)[]): string {
        return arr[0] as string;
    }

    // console.log(getFirstElement(['hello', 42]))
    // console.log(getFirstElement([42, 'hello']))
}

// ex 5
{
    type HasLength = {
        length: number
    }

    function logLength<T extends HasLength>(arg: T): void {
        console.log(arg.length)
    }

    // logLength([1,2,3])
    // logLength('dude')
    // logLength(true)
}

// ex 6
{
    type Person = {
        name: string 
        age: number
    }

    type Job = {
        position: string 
        department: string
    }

    type Employee = Person & Job

    type Developer = Employee
    type Manager = Employee

    function isDeveloper(employee : Employee): employee is Developer {
        return employee.position.toLowerCase() == 'developer'
    }

    function isManager(employee : Employee): employee is Manager {
        return employee.position.toLowerCase() == 'manager'
    }

    function describeEmployee(employee: Employee): string {
        if(isDeveloper(employee)){
            return `Developer: ${employee.name}`
        }

        if(isManager(employee)){
            return `Manager: ${employee.name}`
        }

        // ???
        throw new Error()
    }

    const employee1 = {
        name: "Alice Johnson",
        age: 35,
        position: "Manager",
        department: "Operations"
    };

    const employee2 = {
        name: "Bob Smith",
        age: 28,
        position: "Developer",
        department: "Engineering"
    };

    // console.log(describeEmployee(employee1))
    // console.log(describeEmployee(employee2))
}


// ex 7 
{
    type HasToString = {
        toString(): string
    }

    function foramtInput <T extends HasToString>(arg: T): string{
        return (arg as HasToString).toString()
    }
}
