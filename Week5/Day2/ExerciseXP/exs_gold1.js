// Analyze this code, what will be the output ?
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
//ANSWER: [2, 4, 6]



// Analyze this code, what will be the output ?
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
// ANSWER: [1, 2, 0, 1, 2, 3]



// Using this code:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
// What is the value of i ?
// ANSWER: it is the index: [0, 1, 2, 3, 4, 5]


// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
function extractAt(value, i=0){
    if(i <= 0 || typeof value == 'number'){
        return value;
    } 
    else {
        return extractAt(value[0], i - 1);
    }
}
[[1],[2],[3],[[[4]]],[[[5]]]].reduce((acc, arr) => acc.concat([extractAt(arr, 2)]), []);



// Bonus Try to do it on one line.
// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and 
// modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
greeting.reduce((acc, arr) => acc.concat(arr), []);

// Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.
greeting.reduce((acc, arr) => acc.concat(arr), []).join(' ');

// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const extract = (arr) => typeof arr[0] == 'number' ? arr : extract(arr[0]);
extract(trapped)

