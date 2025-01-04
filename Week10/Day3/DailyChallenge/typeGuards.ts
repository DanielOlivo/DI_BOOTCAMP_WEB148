type User = {
    type: 'user';
    name: string;
    age: number;
};

type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};

function isUser(user: any): user is User {
    return (user.type === 'user')
}

function isProduct(product: any): product is Product{
    return product.type === 'product'
}

function isOrder(order: any):order is Order{
    return order.type === 'order'
}

function handleData(arr: (User | Product | Order)[]): string[]{
    return arr.map((arg) => {
        if(isUser(arg)){
            const user = arg as User;
            return `Hello, ${user.name}`
        }

        if(isProduct(arg)){
            const {id, price} = arg as Product 
            return `id: ${id}; price: ${price}`
        }

        if(isOrder(arg)){
            const {orderId, amount} = arg as Order
            return `Order: ${orderId}; ${amount}`
        }

        throw new Error('gracefully throwing error')
    })
} 

const items: (User | Product | Order)[] = [
    {type: 'user', name: 'Alice', age: 25},
    {type: 'product', id: 1, price: 100},
    {type: 'order', orderId: '2', amount: 10}
]

console.log(handleData(items))