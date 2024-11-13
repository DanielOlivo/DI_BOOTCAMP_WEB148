function mergeWord(word, prev=[]){
    if(word === undefined){
        return prev.join(' ');
    } 
    else {
        prev.push(word)
        return (other) => mergeWord(other, prev);
    }
}
