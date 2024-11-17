// exercise 1: giphy api
async function exercise1(){
    try {
        const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    }
    catch(err){
        console.log(err);
    }
}