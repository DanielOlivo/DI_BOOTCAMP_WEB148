// exercise 1: random number
function getRandom(){
    return Math.floor(Math.random() * 100);
}
// for(i = 0; i < 20; i++){
//     console.log(getRandom());
// }

// exercise 2: capitalized letters
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
function capitalize(s){
    const first = s.split('').map((l,i) => i % 2 == 0 ? l.toUpperCase() : l).join('');
    const second = s.split('').map((l,i) => i % 2 == 1 ? l.toUpperCase() : l).join('');
    return [first, second];
}

// console.log(capitalize("abcdef"))


// exercise 3: is palindrome?
function isPalindrom(s){
    arr = s.split('');
    for(i = 0; i < arr.length / 2; i++){
        if(arr[i] != arr[arr.length - 1 - i])
            return false;
    }
    return true;
}

// console.log(isPalindrom('madam'));
// console.log(isPalindrom('madame'));


// exercise 4: biggest number
function biggestNumberInArray(arrayNumber){
    return Math.max(0, ...arrayNumber.filter((n) => typeof n === 'number'));
}

// console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99]));// should return 100 
// console.log(biggestNumberInArray(['a', 3, 4, 2])); // should return 4 
// console.log(biggestNumberInArray([])); // should return 0

// exercise 5: unique elements
function distinct(array){
    return Array.from(new Set(array));
}
// console.log(distinct([1,2,3,3,3,3,4,5]));


// exercise 6: calendar
function createCalendar(year, month){
    const date = new Date(year, month);
    const numOfDays = new Date(year, month, 0).getDate(); 


    const startDay = date.getDay();
    const lastDay = (new Date(year, month, numOfDays)).getDate();

    table = document.createElement('table');

    header = document.createElement('tr');
    for(d of ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']){
        th = document.createElement('th');
        textNode = document.createTextNode(d);
        th.appendChild(textNode);
        header.appendChild(th);
    }
    table.appendChild(header);

    let day = -startDay;
    while(day <= lastDay){
        tr = document.createElement('tr');

        for(col = 0; col < 7; col++){

            text = day > 0 && day <= lastDay ? String(day) : '.';

            td = document.createElement('td');
            textNode = document.createTextNode(text);
            td.appendChild(textNode);
            tr.appendChild(td);
            day++;
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

createCalendar(2012,9);