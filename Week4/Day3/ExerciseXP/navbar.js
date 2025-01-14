// Using Javascript, in the <div>, change the value of the id 
// attribute from navBar to socialNetworkNavigation, using the setAttribute method.
div = document.getElementById('navBar');
div.setAttribute('id', "socialNetworkNavigation");

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
logout = document.createElement('li');
logout_text = document.createTextNode('Logout');
logout.appendChild(logout_text);
ul = document.getElementsByTagName('ul')[0];
ul.appendChild(logout);


// Use the firstElementChild and the lastElementChild properties to 
// retrieve the first and last <li> elements from their parent element (<ul>). 
// Display the text of each link. (Hint: use the textContent property).
first = ul.firstElementChild;
last = ul.lastElementChild;
console.log(first.textContent);
console.log(last.textContent);