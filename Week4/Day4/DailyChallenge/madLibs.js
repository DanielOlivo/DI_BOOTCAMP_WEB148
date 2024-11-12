function byId(id){
    return document.getElementById(id);
}

const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}; 

byId('lib-button').onclick = function(e) {
    e.preventDefault();
    const noun = byId('noun').value.trim();
    const adj = byId('adjective').value.trim();
    const person = byId('person').value.trim();
    const verb = byId('verb').value.trim();
    const place = byId('place').value.trim();

    for(word of [noun, adj, person, verb, place]){
        if(word.length == 0){
            console.log('some fields are empty');
            return;
        }
    }

    words = [adj, person, verb, noun, place]

    byId('story').innerText = `${adj} ${person} ${verb} with a ${noun} in a ${place}`;

    byId('shuffle').onclick = function(e){
        e.preventDefault();
        shuffle(words);
        byId('story').innerText = `${words[0]} ${words[1]} ${words[2]} with a ${words[3]} in a ${words[4]}`;
    };
};