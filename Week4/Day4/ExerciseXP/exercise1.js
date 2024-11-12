// Using a DOM property, retrieve the h1 and console.log it.
const h1 = document.getElementsByTagName('h1')[0];
console.log(h1.innerText);

// Using DOM methods, remove the last paragraph in the <article> tag.
const p = document.getElementsByTagName('article')[0].lastElementChild;
p.remove()


// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.getElementsByTagName('h2')[0];
h2.addEventListener('click', (e) => e.target.style.backgroundColor = 'red');

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
document
.getElementsByTagName('h3')[0]
.addEventListener('click', (e) => e.target.style.display = 'none');

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const article = document.getElementsByTagName('article')[0];

const btn = document.createElement('input');
btn.setAttribute('type', 'button');
btn.setAttribute('value', 'make everything bold');
btn.onclick = (e) => [...article.children].forEach((el) => el.style.fontWeight = 'bold');
article.appendChild(btn);

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1.onmouseenter = (e) => e.target.style.fontSize = String(Math.floor(Math.random() * 100)) + 'px';


// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
// TODO