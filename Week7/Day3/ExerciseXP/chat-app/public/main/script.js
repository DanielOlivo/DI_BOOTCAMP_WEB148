// const socket = io();
const lst = document.getElementById('list')
const msg = document.getElementById('msg')

function handleClasses(element, classes=[]){
    for(const cls of classes){
        console.log('class: ' + cls);
        element.classList.add(cls);
    }
}
function handleTextContent(element, text){
    if(text!==undefined){
        element.appendChild(document.createTextNode(text));
    }
}
function handleChildren(element, children){
    if(children){
        for(const child of children){
            element.appendChild(child);
        }
    }
}

function handle(element, classes, textContent, children){
    handleClasses(element, classes);
    handleTextContent(element, textContent);
    handleChildren(element, children);
}

function div(classes=[], children=[], textContent = undefined){
    const element = document.createElement('div');
    handle(element, classes, textContent, children);
    return element;
}

function p(textContent, classes=[], children=[]){
    const element = document.createElement('p')
    handle(element, classes, textContent, children);
    return element;
}

function img(src, classes=[] ){
    const element = document.createElement('img');
    handleClasses(element, classes);
    element.src = src;
    return element;
}



function makeListItem(content){
    return div(
        classes = ['list-item'],
        children = [
            img(
                src = 'user.png',
            ),
            p(
                textContent=content
            )
        ]
    );
}

for(i = 0; i < 10; i++){
    lst.appendChild(makeListItem(String("item " + i)));
}

console.log('dude')