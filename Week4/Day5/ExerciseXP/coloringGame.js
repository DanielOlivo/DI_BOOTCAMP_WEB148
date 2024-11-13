colors = [
    "ff0000", "ff4500", "ffa500",
    "ffff00", "9acd32", "90ee90",
    "008000", "40e0d0", "40e0d0",
    "87cefa", "1e90ff", "0000ff",
    "00008b", "4b0082", "8b008b", 
    "ee82ee", "ffb6c1", "d3d3d3",
    "808080", "000000", "ffffff"
];

currentColor = '#ffffff';
draw = false;

function fillThePalette(){
    const palette = document.getElementById('palette');
    for(color of colors){
        const div = document.createElement('div');
        div.style.backgroundColor = '#' + color;
        div.classList.add('color')
        div.onclick = function(e){
            currentColor = div.style.backgroundColor;
        }
        palette.appendChild(div);
    }
}

function makeCanvas(){
    const canvas = document.getElementById('canvas');
    canvas.onmouseleave = function(e){
        draw = false;
    }

    for(row = 0; row < 20; row++){
        for(col = 0; col < 50; col++){
            const pixel = document.createElement('div');
            pixel.style.border = "1px solid grey";
            pixel.classList.add('pixel');
            pixel.onmousedown = (e) => draw = true;
            pixel.onmouseup = (e) => draw = false;
            pixel.onmouseenter = function(e){
                if(draw){
                    pixel.style.backgroundColor = currentColor;
                }
            }
            canvas.appendChild(pixel);
        }
    }
}

function clearAll(){
    for(pixel of document.getElementsByClassName('pixel')){
        pixel.style.backgroundColor = '#ffffff';
    }
}

fillThePalette();
makeCanvas();
clearAll();