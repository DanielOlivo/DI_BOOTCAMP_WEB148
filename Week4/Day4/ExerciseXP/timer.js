// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// setTimeout(() => alert("Hello World"), 2000);



// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// setTimeout(() => {
//     const p = document.createElement('p');
//     p.appendChild(document.createTextNode('Hello World!'));
//     document.getElementById('container').appendChild(p);
// }, 2000);



// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// const timer = setInterval(() => {
//     const p = document.createElement('p');
//     p.appendChild(document.createTextNode('Hello World!'));
//     document.getElementById('container').appendChild(p);
// }, 2000);

// document.getElementById('clear').onclick = function(){
//     if(document.getElementById('container').childNodes.length >= 5){
//         clearInterval(timer);
//         console.log('cleared');
//     } else {
//         console.log('wait for 5');
//     }
// }