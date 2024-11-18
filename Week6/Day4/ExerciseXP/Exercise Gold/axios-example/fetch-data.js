const axios = require('axios');

async function getData(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
    for(const item of response.data){
        console.log(item.title);
    }
}

module.exports = getData;