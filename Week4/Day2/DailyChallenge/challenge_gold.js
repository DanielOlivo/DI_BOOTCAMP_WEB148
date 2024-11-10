const numbers = [5,0,9,1,7,4,2,6,3,8];
// Using the .toString() method convert the array to a string.
console.log(String(numbers));

// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
console.log(numbers.join(", "));
console.log(numbers.join(""));
console.log(numbers.join("+"));

// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google
function sortReverse(array){
    let sorted = Array.from(array);
    for(i = 0; i < sorted.length - 1; i++){
        for(j = 1; j <= sorted.length - i; j++){
            if(sorted[sorted.length - j] > sorted[sorted.length - j - 1]){
                let temp = sorted[sorted.length - j];
                sorted[sorted.length - j] = sorted[sorted.length - j-1];
                sorted[sorted.length -j - 1] = temp;
            }
        }
        // console.log(sorted);
    }
    return sorted;
}
let arr1 = [0,1,2,3,4,5,6,7,8,9]
console.log(arr1);
let sorted = sortReverse(arr1)
console.log(sorted);