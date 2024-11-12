// Retrieve the form and console.log it.
const form = document.getElementsByTagName('form')[0];
// console.log(form);


// Retrieve the inputs by their id and console.log them.
// for(id of ['fname', 'lname', 'submit']){
//     const input = document.getElementById(id);
//     console.log(input);
// }

// Retrieve the inputs by their name attribute and console.log them.
// for(attr of ['firstname', 'lastname']){
//     const input = document.querySelector(`[name="${attr}"]`);
//     console.log(input);
// }


// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// var form = document.getElementsByTagName("form")[0];
    function submitForm(event) {
        event.preventDefault(); // to prevent autoreloading
        const fname = document.getElementById('fname');
        const lname = document.getElementById('lname');

        if(fname.value.trim().length == 0 || lname.value.trim().length == 0){
            console.log('one of the fields is empty');
            return;
        }

        const ul = document.querySelector("ul.usersAnswer");

        const liFirst = document.createElement('li');
        liFirst.appendChild(document.createTextNode(fname.value));

        const liLast = document.createElement('li');
        liLast.appendChild(document.createTextNode(lname.value));

        ul.appendChild(liFirst);
        ul.appendChild(liLast);
        event.preventDefault();
    }
form.addEventListener('submit', submitForm);
