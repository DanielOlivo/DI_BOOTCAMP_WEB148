const img = document.querySelector("#container > img");
const field = document.querySelector("#controls > input");
const question =document.getElementById("question");
const total = document.getElementById('total')
const success = document.getElementById('success')


async function update() {

    const response = await fetch("http://localhost:5000/init");
    const json = await response.json()

    console.log(json);

    question.innerText = json.question;
    total.textContent = json.total;
    success.textContent = json.success;
    field.value = "";
}

document.getElementById('btn').onclick = function(e){
    e.preventDefault();
    send()
}

field.addEventListener('keyup', function (e) {
    if(e.key === 'Enter' && field.value.length > 0){
        send()
    }
})

async function send(){
    const response = await fetch("http://localhost:5000/answers", {
        method: "POST",
        body: JSON.stringify({
            answer: field.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const json = await response.json();
    question.innerText = json.question;
    total.textContent = json.total;
    success.textContent = json.success;
    field.value = "";

    field.focus();
}

window.onload = update;