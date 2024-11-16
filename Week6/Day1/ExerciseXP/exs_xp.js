// exercise 1: comparison
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
function compareToTen(num){
    return new Promise((resolve, reject) => {
        if(num <= 10){
            resolve('<= 10');
        }
        else {
            reject('> 10');
        }
    });
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))


compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))



// exercise 2: promises
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
function exercise2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => console.log('success'), 4000);
    })
}
exercise2()


//exercise 3: resolve & reject
Promise.resolve('success');
Promise.reject('error');