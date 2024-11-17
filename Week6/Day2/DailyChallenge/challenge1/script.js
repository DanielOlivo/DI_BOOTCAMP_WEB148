const text = document.getElementById('field');
const btn = document.getElementById('get');
const deleteAll = document.getElementById('delete-all');
const container = document.getElementById('container');

btn.onclick = (e) => getNew(e);

deleteAll.onclick = function(e){
    e.preventDefault();
    while(container.lastChild){
        container.lastChild.remove();
    }
}

async function getNew(e){
    e.preventDefault();

    try{
        if(text.value.length == 0){
            console.log('please, specify in the field');
            return;
        }

        const params = {
            tag: text.value,
            api_key: "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
        };

        const url = "https://api.giphy.com/v1/gifs/random?" + Object.entries(params).map(([name, value]) =>
            String(name) + '=' + String(value)).join('&&');

        // console.log(url);

        const response = await fetch(url);
        const json = await response.json();

        // console.log(json);

        // create new item 
        const item = document.createElement('div');
        item.classList.add('item');

        const img = document.createElement('img');
        img.src = json['data']['images']['480w_still'].url;
        item.appendChild(img);

        const deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('Delete'));
        deleteBtn.onclick = function(e){
            e.preventDefault();
            console.log('remove');
            item.remove();
        }
        item.appendChild(deleteBtn);

        container.appendChild(item);
    }
    catch(err){
        console.log(err);
    }
}