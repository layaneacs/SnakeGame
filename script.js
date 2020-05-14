let canvas = document.getElementById("snake");
let context = canvas.getContext("2d") // renderiza o desenho que vai aparecer no canvas
let box = 32;


function criarBG(){
    context.fillStyle = "lightgreen"
    context.fillRect(0,0,16*box,16*box)
}

criarBG()