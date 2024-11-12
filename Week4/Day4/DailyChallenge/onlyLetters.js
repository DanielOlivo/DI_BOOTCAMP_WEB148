const field = document.getElementById('field');

field.onkeyup = function(e){
    const content = field.value;
    field.value = /^[a-z]*/i.exec(content);
}