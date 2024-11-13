// let tasks = [];

const text_input = document.getElementById('field');
const addBtn = document.getElementById('add-btn');
addBtn.onclick = handleNewItem;
text_input.onkeydown = handleEnterOnInputField;

function handleEnterOnInputField(e){
    if(e.keyCode == 13){
        handleNewItem(e);
    }
}

// text_input.onkeydown = (e) => console.log(e.keyCode);

function handleNewItem(e){
    // e.preventDefault();

    const text = text_input.value.trim();
    if(text.length == 0){
        console.log('field is empty');
        return;
    } 

    const newitem = {
        content: text,
        isDone: false
    };
    text_input.value = '';

    addItemToList(newitem);
}

function addItemToList(newItem){
    const lst = document.getElementById('list');

    const item = make({
        tag: 'div',
        class: 'item',
        children:[
            {tag: 'button', innerText: 'X'},
            {tag: 'input', attr:{type: 'checkbox'}},
            {tag: 'p', innerText: newItem.content},
            {tag: 's', children:[{tag: 'p', innerText: newItem.content}]}
        ]

    });
    item.querySelector('button').onclick = (e) => item.remove();

    const label = item.querySelector('p');
    const label2 = item.querySelector('s')
    label2.style.display = 'none';

    item.querySelector('input').onchange = function (e){
        if(e.target.checked){
            label.style.display = 'none';
            label2.style.display = 'block';
        }
        else {
            label.style.display = 'block';
            label2.style.display = 'none';
        }
    };

    const last = Array.from(lst.children).slice(-1);
    lst.insertBefore(item, lst.children[lst.children.length - 1]);
}

document.querySelector('#clear-holder button').onclick = function(e){
    e.preventDefault();
    for(child of document.querySelectorAll('#list .item')){
        child.remove();
    }
};


// all this createElement/appendChild manipulations are awful
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
