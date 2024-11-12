// exercise 1: select kind of music
// Display the value of the selected option.
document.getElementById('genres').onchange = function(e){
    console.log(e.target.value);
}

// Add an additional option to the select tag:
// <option value="classic">Classic</option>
// The newly added option should be selected by default.



// Add a click event listener to the <input type="button">. 
// When clicked on, it should call a function named : removecolor() that removes 
// the selected color from the dropdown list.
document.querySelector('form input').onclick = function(e){
    e.preventDefault(); 
    const select = document.getElementById('colorSelect');
    for(option of select.childNodes){
        // console.log(`${select.value} vs ${option.value}`);
        if(option.innerText == select.value){
            option.remove();
            return;
        }
    }
}



// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on 
// the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.
let shoppingList = [];

const root = document.getElementById('root');
const form = document.createElement('form');
root.appendChild(form);

const input = document.createElement('input');
input.setAttribute('type', 'text');
form.appendChild(input);

const addBtn = document.createElement('button');
addBtn.innerText = 'add';
form.appendChild(addBtn);
addBtn.onclick = function(e){
    e.preventDefault();
    if(input.value.trim().length > 0){
        shoppingList.push(input.value.trim());
        input.value = '';
        console.log(`adding item: the list is ${shoppingList}`);
    }
}

const clearBtn = document.createElement('button');
clearBtn.innerText = 'clear';
form.appendChild(clearBtn);
clearBtn.onclick = function(e){
    e.preventDefault();
    shoppingList = [];
    console.log('cleared');
}