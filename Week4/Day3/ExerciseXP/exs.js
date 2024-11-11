
//exercise 1: find the numbers divisible by 23
function displayNumbersDivisible(divisor = 23){
    let arr = 
        Array.from({length: 500}, (_, i) => i + 1)
        .filter((num) => num % 23 == 0);
    console.log(arr); 
    console.log(arr.reduce((s, a) => s + a, 0));
}

displayNumbersDivisible()