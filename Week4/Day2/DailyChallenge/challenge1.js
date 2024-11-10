// Create a variable called sentence. The value of the variable 
// should be a string that contains the words “not” and “bad”.
// let sentence = "The movie is not that bad, I like it."
let sentence = "The movie is not that bad, I like it."
// For example, “The movie is not that bad, I like it”.

// Create a variable called wordNot where it’s value is the first appearance 
// (ie. the position) of the substring “not” (from the sentence variable).
let wordNot = sentence.indexOf('not');
console.log(wordNot);

// Create a variable called wordBad where it’s value is the first 
// appearance (ie. the position) of the substring “bad” (from the sentence variable).
let bad = sentence.indexOf('bad');
console.log(bad);

// If the word “bad” comes after the word “not”, 
// you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
if(bad > wordNot){
    const regex = /not.*bad/i;
    console.log(sentence.replace(regex, 'good'));
}
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
else if(bad == -1 || wordNot == -1 || wordNot > bad){
    console.log(sentence)
}