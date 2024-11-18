function returnNumbers(s){
    return Number(s.match(/\d+/g).join(''));
}

console.log(returnNumbers('k5k3q2g5z6x9bn'));