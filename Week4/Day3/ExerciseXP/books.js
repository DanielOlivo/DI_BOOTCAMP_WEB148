// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// In the js file, create an array called allBooks. 
// This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
const allBooks = [
    {
        title:'Alice In Wonderland',
        author: "Lewis Carrol",
        image : 'https://static.wikia.nocookie.net/zenescopeentertainment/images/c/c1/Grimm_Fairy_Tales_Presents_Alice_in_Wonderland_Vol_1_1.jpg/revision/latest?cb=20120415080326',
        alreadyRead : true
    },
    {
        title:'The Player of Games',
        author: "Iain M. Banks",
        image : 'https://m.media-amazon.com/images/I/81SsCu9B1aL._SL1500_.jpg',
        alreadyRead : false
    }
];


// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to 
// the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

section = document.getElementsByClassName('listBooks')[0];
// console.log(allBooks[0].title);

for(const book of allBooks){
    div = document.createElement('div');

    title = document.createElement('h3');
    console.log(book.title)
    titleText = document.createTextNode(book.title);
    title.appendChild(titleText);
    div.appendChild(title);

    author = document.createElement('h4');
    authorText = document.createTextNode(book.author);
    author.appendChild(authorText);
    div.appendChild(author);
    
    img = document.createElement('img');
    img.setAttribute('src', book.image);
    div.appendChild(img);

    if(book.alreadyRead){
        div.classList.add('already_read');
    }

    section.appendChild(div);
}
