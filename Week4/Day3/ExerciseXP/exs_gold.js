// exercise 1: is_blank
function isBlank(s){
    return s.trim().length == 0;
}

// console.log(isBlank('')); 
// console.log(isBlank('abc'));

// exercise 2: abbrev_name
function abbrevName(name){
    return name.split(' ').map((e, i) => i == 0 ? e : e[0]+'.').join(' ')
}
// console.log('Robin Singh');
// console.log(abbrevName('Robin Singh'));

// exercise 3: swap case 
function swapCase(s){
    return s.split('').map((l) => l == l.toLowerCase() ? l.toUpperCase() : l.toLowerCase()).join('');
}
// console.log(swapCase('The Quick Brown Fox'));


//exercise 4: omnipresent value
function isOmnipresent(vs, i){
    return vs.slice(1).reduce((s, arr) => s.intersection(new Set(arr)), new Set(vs[0])).has(i);
}

// console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3));
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));


// exercise 5: red table
// Copy the code above and write some Javascript code to color all diagonal table cells in red.
let table = document.body.firstElementChild;
let i = 0
for(row of table.getElementsByTagName('tr')){
    tds = row.getElementsByTagName('td');
    tds[i].style.backgroundColor = 'red';
    tds[tds.length - 1 - i].style.backgroundColor = 'red';
    i++;
}