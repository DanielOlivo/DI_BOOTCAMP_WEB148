function allTruthy(...args){
    console.log(args);
    return args.every((item) => typeof item === 'boolean' && item);
};

console.log(allTruthy(true, true, true))
console.log(allTruthy(true, false, true))
console.log(allTruthy(5, 4, 3, 2, 1, 0))