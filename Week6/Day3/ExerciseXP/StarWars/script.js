const nameField = document.getElementById('name');
const height = document.getElementById('height');
const birth = document.getElementById('birth');
const home = document.getElementById('home');

const text = document.getElementById('text');
const loading = document.getElementById('loading');
const onStart = document.getElementById('on-start');
const onError = document.getElementById('on-error');

const btn = document.getElementById('btn');

onStart.style.display = 'block';
onError.style.display = 'none';
loading.style.display = 'none';
text.style.display = 'none';

btn.onclick = (e) => {
    e.preventDefault();
    retrieve();
}


async function retrieve(){
    onStart.style.display = 'none';
    onError.style.display = 'none';
    try {
        const url = `https://www.swapi.tech/api/people/` + Math.floor(Math.random() * 83);
        setLoadScrenn();
        const response = await fetch(url);
        const json = await response.json();
        
        const props = json.result.properties;
        nameField.textContent = props.name;
        height.textContent = props.height;
        birth.textContent = props.birth_year;

        const response2 = await fetch(props.homeworld);
        const json2 = await response2.json();

        home.textContent = json2.result.properties.name;
        unserLoadScreen();
    }
    catch(err){
        loading.style.display = 'none';
        text.style.display = 'none';
        onError.style.display = 'block';
    }
}

function setLoadScrenn(){
    loading.style.display = 'block';
    text.style.display = 'none';
}

function unserLoadScreen(){
    loading.style.display = 'none';
    text.style.display = 'block';
}