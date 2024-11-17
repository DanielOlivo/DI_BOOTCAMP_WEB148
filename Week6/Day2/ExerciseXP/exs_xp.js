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
// exercise1()

// exercise 2: giphy api
async function exercise2(){
    try{
        let url = "https://api.giphy.com/v1/gifs/search?"
        const params = {
            q: 'sun',
            api_key : "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My",
            offset : 2,
            limit : 10
        }
        const line = Object.entries(params).map(([name, value]) => String(name) + '=' + String(value)).join('&&');
        url += line;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    }
    catch(err){
        console.log(err);
    }
}
// exercise2();