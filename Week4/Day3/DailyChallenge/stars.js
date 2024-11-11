// const line = "Hello, Wolrd, in, a, frame";
const line = prompt("your input:");

const lines = line.split(',').map((l) => l.trim());
const width = lines.reduce((m, a) => m > a.length ? m : a.length, 0);


console.log('*'.repeat(width+4));

for(l of lines){
    console.log(`* ${l.padEnd(width, ' ')} *`);    
}

console.log('*'.repeat(width+4));