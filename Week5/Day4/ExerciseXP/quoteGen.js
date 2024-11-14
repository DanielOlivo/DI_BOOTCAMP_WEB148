let quotes = []
let prev = null;

let id = 1;

const pInfo = document.getElementById('info');
document.getElementById('btn1').onclick = function(e){
    e.preventDefault();
    pInfo.innerText = `Number of characters: ${prev.quote.length}`;
}
document.getElementById('btn2').onclick = function(e){
    e.preventDefault();
    pInfo.innerText = `Number of characters inside each quote: ${quotes.reduce((acc, q) => 
        acc + q.quote.length, 0)}`;
}
document.getElementById('btn3').onclick = function(e){
    e.preventDefault();
    pInfo.innerText = "Number of words in each quote: " + quotes.reduce((acc, q) =>
        acc + q.quote.split(' ').length, 0);
}
document.getElementById('btn4').onclick = function(e){
    e.preventDefault();
    prev.likes++;
}

function fillWithDummy(){
    for(i = 0; i < 10; i++){
        const quote = {
            id: id,
            author: 'author' + String(id),
            quote: 'quote',
            likes: 0
        }
        quotes.push(quote);

        id++;
    }
}

function getRandom(){
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function showNext(){
    // e.preventDefault(); 
    
    let next = getRandom()
    while (next === prev){
        next = getRandom();
    }

    prev = next;
    document.getElementById('quote').textContent = next.quote;
    document.getElementById('author').textContent = next.author;
}

const newForm = document.getElementById('new');
document.getElementById('add-new').onclick = function(e){
    e.preventDefault();
    const newAuthor = document.getElementById('new-author').value.trim();
    const newQuote = document.getElementById('new-quote').value.trim();

    if(newAuthor.length == 0 || newQuote.length == 0){
        alert("empty fields");
        return;
    }

    quotes.push({
        id : Math.floor(Math.random() * 100000),
        author : newAuthor,
        quote : newQuote,
        likes : 0
    });
}


fillWithDummy();
document.querySelector('button').onclick = showNext;
showNext();