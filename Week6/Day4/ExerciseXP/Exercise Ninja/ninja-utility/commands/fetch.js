const axios = require('axios');

async function getISSLocation(){
    try{
        const url = "http://api.open-notify.org/iss-now.json";
        const response = await axios.get(url);
        const {latitude, longitude} = response.data.iss_position;
        console.log(`Current ISS location is: latitude ${latitude}; longitude ${longitude}`);
    }
    catch (err){
        console.log('Something gone wrong. Try later');
    }
}

module.exports = getISSLocation;