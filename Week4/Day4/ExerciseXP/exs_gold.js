// exercise 1: select kind of music
// Display the value of the selected option.
document.getElementById('genres').onchange = function(e){
    console.log(e.target.value);
}

// Add an additional option to the select tag:
// <option value="classic">Classic</option>
// The newly added option should be selected by default.