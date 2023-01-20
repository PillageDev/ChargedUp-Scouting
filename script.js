//prevent screen movement on arrow key and space
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
var map = $("#map")[0];
var canvas = $("#canvas")[0];
canvas.width = screen.width * 0.66;
var ctx = canvas.getContext("2d");

function drawField(){
    ctx.drawImage(map, 0, 0, canvas.width, canvas.height);
}

//main loop
setInterval(function(){
    drawField();
},1)