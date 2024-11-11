// Using Javascript:
// Retrieve the div and console.log it
console.log(document.getElementsByTagName('div')[0]);

// Change the name “Pete” to “Richard”.
document
.getElementsByTagName("ul")[0]
.getElementsByTagName("li")[1].innerText = 'Richard';

// Delete the second <li> of the second <ul>.
document
.getElementsByTagName("ul")[1]
.getElementsByTagName("li")[1].remove();

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
for(const ul of document.getElementsByTagName('ul')){
    ul.getElementsByTagName('li')[0].remove(); 
}


// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
for(ul of document.getElementsByTagName('ul')){
    ul.classList.add("student_list");
}

// Add the classes university and attendance to the first <ul>.
document.getElementsByTagName('ul')[0].classList.add(['university', 'attendance']);


// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
const div = document.getElementsByTagName('div')[0]
div.style.backgroundColor = 'lightblue';
div.style.padding = '10px 10px 10px 10px';

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
const dan = document.getElementsByTagName('ul')[1].getElementsByTagName('li')[0];
dan.style.display = 'none';

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
const richard = document.getElementsByTagName('ul')[0].getElementsByTagName('li')[0];
richard.style.border = '2px dashed black';

// Change the font size of the whole body.
document.body.style.fontSize = '32px';

// Bonus: If the background color of the div is “light blue”, 
// alert “Hello x and y” (x and y are the users in the div).
if(div.style.backgroundColor === 'lightblue'){
    alert(`Hi, ${richard.innerText}`);
}