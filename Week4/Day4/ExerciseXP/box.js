function myMove() {
    const box = document.getElementById('animate');
    var pos = 0;
    let id = setInterval(function(){
        if(pos == 350){
            clearInterval(id);
        }
        else {
            pos++;
            box.style.left = pos + "px";
        }
    })
};