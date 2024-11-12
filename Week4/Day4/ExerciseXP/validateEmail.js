// Add an input that has a type="email" to your form.
// Write your own javascript validation function to check if the entered value is a valid email address. 
// The address should contain some valid characters, and the @ sign, more characters then a . (period) and some more characters.
// On “submit”, the validation function should run and validate the email address.

document.getElementById('submit').onclick = function (e){
    e.preventDefault();
    const input = document.getElementById('field').value
    if(input.match(/[a-z0-9.*%]+@[a-z0-9.-]+.[a-z]{2,}/i)){
        console.log('is valid');
    }
    else {
        console.log('not valid');
    }
}