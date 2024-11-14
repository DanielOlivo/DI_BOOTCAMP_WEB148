const images = ['ddd', 'robot1', 'robot2', 'robot3',
    'robot4', 'robot5', 'robot6', 'robot7', 'robot9',
    'robot10', 'robot11', 'robot12']

const names = [
    "Ava Thompson",
    "Noah Peterson",
    "Emma Bennett",
    "Liam Anderson",
    "Sophia Mitchell",
    "Mason Carter",
    "Isabella Stewart",
    "Ethan Hughes",
    "Mia Collins",
    "Oliver Rogers",
    "Amelia Hayes",
    "Lucas Rivera",
    "Grace Martinez"
];

const emails = [
    "ava.thompson@example.com",
    "noah.peterson@example.com",
    "emma.bennett@example.com",
    "liam.anderson@example.com",
    "sophia.mitchell@example.com",
    "mason.carter@example.com",
    "isabella.stewart@example.com",
    "ethan.hughes@example.com",
    "mia.collins@example.com",
    "oliver.rogers@example.com",
    "amelia.hayes@example.com",
    "lucas.rivera@example.com",
    "grace.martinez@example.com"
];

const container = document.getElementById('container');
const items = images.map((img, idx) => ({
        name: names[idx], 
        email: emails[idx],
        image: ('images/' + img + '.png')
    }));

items.forEach(makeItem);


let something = {
    name: 'dude',
    hey: 'man'
};

document.getElementById('filter').onkeyup = function(e){
    const items = document.getElementsByClassName('item');  
    // console.log(items);
    if(e.target.value.trim().length == 0){
        for(const item of items){
            item.style.display = 'block';
        }
    }
    else {
        for(const item of items){
            const p = item.querySelector('p');
            item.style.display = p.textContent.toLowerCase().includes(e.target.value) ? 'block' : 'none';
        }
    }

    // console.log(e.target.value);
}


function makeItem(info){
    const item = document.createElement('div');
    item.classList.add('item');

    const background = document.createElement('div')
    background.classList.add('img-background');
    item.appendChild(background);

    const img = document.createElement('img');
    img.src = info.image;
    background.appendChild(img);

    const text = document.createElement('div');
    item.appendChild(text);
    
    const name = document.createElement('p');
    name.appendChild(document.createTextNode(info.name));
    text.appendChild(name);

    const email = document.createElement('p');
    email.appendChild(document.createTextNode(info.email));
    text.appendChild(email);


    container.appendChild(item);    
}