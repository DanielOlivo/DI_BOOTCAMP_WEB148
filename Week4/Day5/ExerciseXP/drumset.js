const letters = ['A', 'S','D','F','G', 'H', 'J', 'K','L'];
const keycodes = [65, 83, 68, 70, 71, 72, 74, 75, 76];
const names = ['Boom', 'Clap', 'HiHat', 'Kick', 'OpenHat', 'Ride', 'Snare', 'Tink', 'Tom'];

const elements = letters.map((x, i) => {
    const name = names[i];
    return {
        letter: x,
        name: names[i],
        code: keycodes[i],
        sound: new Audio('sounds/' + name.toLowerCase() + '.wav')
    }
});

document.onkeydown = function(e){
    e.preventDefault();
    for(i = 0; i< elements.length; i++){
        const element = elements[i];
        if(e.keyCode == element.code){
            element.sound.play();
            return;
        }
    }
}


function createButton(){

    const root = document.getElementById('root');

    for(i = 0; i<elements.length; i++){
        const element = elements[i];
        console.log(element);
        let item = make({
            tag: 'div',
            class: 'item',
            children: [
                {tag: 'h1', innerText: element.letter},
                {tag: 'p', innerText: element.name}
            ]
        })

        item.onclick = (e) => {
            element.sound.play();
            console.log(element.letter);
            console.log(item);
        }

        root.appendChild(item)
    }
}

createButton();


function make(o){
    const element = document.createElement(o.tag);

    for(const property in o){

        if(property == 'class'){
            element.classList.add(o[property]);
        }
        else if(property == 'children'){
            for(child of o[property]){
                if(child instanceof Element || child instanceof HTMLElement){
                    element.appendChild(child);
                }
                else {
                    element.appendChild(make(child));
                }
            }
        }
        else if(property == 'innerText'){
            element.appendChild(document.createTextNode(o[property]));
        }
        else if(property == 'attr'){
            for(const attr in o[property]){
                element.setAttribute(attr, o[property][attr]);
            }
        }
    } 

    return element;
}