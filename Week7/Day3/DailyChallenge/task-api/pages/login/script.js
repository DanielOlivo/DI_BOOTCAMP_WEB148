const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('send');
const msg = document.getElementById('msg');

btn.onclick = async function(e){
    e.preventDefault();

    const res = await fetch('http://localhost:5000/login',{
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value 
        })
    });

    const {message} = await res.json()

    msg.textContent = message;
}

