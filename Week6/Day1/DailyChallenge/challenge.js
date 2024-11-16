// exercise 1
function makeAllCaps(words){
    return new Promise((resolve, reject) => {
        if(words.every(word => typeof word == 'string')){
            resolve(words.map(word => word.toUpperCase()));
        }
        else {
            reject('not strings: ' + words.filter(word => typeof word !='string').join(' '));
        }
    });
}

function sortWords(words){
    return new Promise((resolve, reject) =>{
        if(words.length > 4){
            words.sort();
            resolve(words);
        }
        else {
            reject('wrong length: ' + words.length);
        }
    });
}

makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


// exercise 2: 
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`

function toJs(){
    return new Promise((resolve, reject) => {
        const obj = JSON.parse(morse); 
        if(Object.keys(obj).length > 0){
            resolve(obj);
        }
        else {
            reject('empty object');
        }
    });
}

function toMorse(morseJS){
    return new Promise((resolve, reject) => {
        const userInput = prompt('type a word or a sentence: ').toLowerCase();
        const bad = userInput.split('').filter(c => !(Object.keys(morseJS).includes(c)));
        if(bad.length == 0){
            resolve(userInput.split('').map(c => morseJS[c]));
        }
        else {
            reject('bad characters: ' + bad.join(', '));
        }
    });
}

function joinWords(morseTranslation){
    return new Promise((resolve) => {
        console.log(morseTranslation.join('\n'));
    })
}

toJs().then(obj => toMorse(obj).then(n => joinWords(n)))