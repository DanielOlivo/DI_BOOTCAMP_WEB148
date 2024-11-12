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