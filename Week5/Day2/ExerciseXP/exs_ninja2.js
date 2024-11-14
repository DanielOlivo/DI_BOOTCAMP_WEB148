// exercise 1: menu
const menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "dessert",
    name : "Chocolate Cake"
  }
];

// Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
menu.some(item => item.type == 'dessert');

// Using an array method, check if all the elements in the array are starters.
menu.every(item => item.type == 'starter');

// Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.
if(!menu.some(item => item.type == 'main course')){
    menu.push({
        type: 'main course',
        name : "I don't know"
    });
}
menu.some(item => item.type == 'main course')


const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]
menu.forEach(item => item['vegetarian'] = vegetarian.some(meal => item.name.toLowerCase().includes(meal)));


// exercise 2: chop into chunks
// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.
const string_chop = (str, num) => [...Array(str.length / num).keys()].map(i => str.slice(i*num, i*num + num));
string_chop('developers',2);


// exercise 3: you said string?
function search_word(text, word){
    let idxs = [...Array(text.length).keys()];
    let idx = 0;
    while(idx < word.length && idxs.length > 0){
        idxs = idxs.filter(i => text[i + idx] == word[idx]);
        idx++;
    }
    return idxs.length;
}
console.log(search_word('The quick brown fox fox fox fox', 'fox')); 


// exercise 4 : reverse array
function reverseArray(arr){
    let result = [...Array(arr.length)];
    for(i = 0; i < arr.length; i++){
        result[i] = arr[arr.length - 1 - i];
    }
    return result;
}

reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
reverseArray([1,2]) // [2,1]
reverseArray([]) // []
reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1]