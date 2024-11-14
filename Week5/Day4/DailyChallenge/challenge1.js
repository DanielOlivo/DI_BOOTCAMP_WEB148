const first = document.querySelector('input[name=first]');
const last = document.querySelector('input[name=last]');

document.querySelector('button').onclick = function(e){
    e.preventDefault();
    const data = {
        name: first.value || 'John',
        lastname: last.value || 'Doe'
    };

    const str = JSON.stringify(data);
    
    const newP = document.createElement('p');
    newP.appendChild(document.createTextNode(str));
    document.body.appendChild(newP);
}