const countLetters = (s) => s.split('').reduce((acc, l) => {
    if(l == ' '){

    }
    else if(l in acc){
        acc[l] += 1;
    }
    else {
        acc[l] = 1;
    }
    return acc;
}, {})


function compareCounts(c1, c2){
    if(c1.length != c2.length){
        return false;
    }
    const keys1 = Object.keys(c1).sort()
    const keys2 = Object.keys(c2).sort()

    for(i = 0; i < keys1.length; i++){
        if(keys1[i] != keys2[i] || c1[keys1[i] != c2[keys2[i]]]){
            return false;
        }
    }
    return true;
}


function areAnagrams(s1, s2){
    return compareCounts(countLetters(s1.toLowerCase()), countLetters(s2.toLowerCase()));
}

console.log(areAnagrams('astronomer', 'moon starer'));
console.log(areAnagrams("School master", "The classroom"));
console.log(areAnagrams("The Morse Code", "Here come dots"));