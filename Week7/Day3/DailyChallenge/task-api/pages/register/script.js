const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email')
const username = document.getElementById('username')
const password = document.getElementById('password')
const msg = document.getElementById('msg')

document.getElementById('send').onclick = async function(e){
    e.preventDefault();

    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        username: username.value,
        password: username.value
    }
    const res = await fetch('http://localhost:5000/register', {
        method: "POST",
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const json = await res.json()

    const {message} = json;
    msg.textContent = message;
}