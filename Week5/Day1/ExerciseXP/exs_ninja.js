function mergeWords(word, prev=[]){
    if(word === undefined){
        return prev.join(' ');
    } 
    else {
        prev.push(word)
        return (other) => mergeWords(other, prev);
    }
}

// mergeWords('There')('is')('no')('spoon.')();