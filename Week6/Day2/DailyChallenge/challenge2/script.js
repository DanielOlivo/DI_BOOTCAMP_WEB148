const lat1 = document.getElementById('lat1');
const lng1 = document.getElementById('lng1');
const lat2 = document.getElementById('lat2');
const lng2 = document.getElementById('lng2');
const p1 = document.getElementById('city1');
const p2 = document.getElementById('city2');

lat1.value = 48.864716;
lng1.value = 2.349014;

lat2.value = 40.730610;
lng2.value = -73.935242

document.getElementById('btn').onclick = function(e){
    e.preventDefault();
    retrieve();
}

async function retrieve(){
    try{
        const url1 = `https://api.sunrise-sunset.org/json?lat=${parseFloat(lat1.value)}&lng=${parseFloat(lng1.value)}`;
        const url2 = `https://api.sunrise-sunset.org/json?lat=${parseFloat(lat2.value)}&lng=${parseFloat(lng2.value)}`;

        const getResponse = async(url) => {
            const response = await fetch(url);
            const json = await response.json();
            return json;
        }

        const [time1, time2] = await Promise.all([getResponse(url1), getResponse(url2)]);

        p1.textContent = time1.results.sunrise;
        p2.textContent = time2.results.sunrise;
    }
    catch(err){
        console.log(err);
    }
}