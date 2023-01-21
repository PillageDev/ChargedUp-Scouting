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


//adds +1 to circle placements
var number = 0;

document.getElementById("map").addEventListener("click", addCircle);

/* on click, add a circle to the canvas */
function addCircle(e) {
    var x = e.clientX;
    var y = e.clientY;
    var circle = document.getElementById("map").cloneNode(true);
    circle.className = "circle";
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.innerHTML = number;
    number++;
    document.body.appendChild(circle);
}

//draws a circle on the canvas

 function drawCircle() {
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();

 }
 function drawShape(){
    var canvas = document.getElementById("mapBackground");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "https://cdn.discordapp.com/attachments/1061391170678296736/1066107954765512815/2160pDark.png";
    img.onload = function(){
        ctx.drawImage(img,0,0);
    }
}
window.onload = drawShape();



//To create an image marking system in Svelte, we can use the following code:

//imports
import { createEventDispatcher } from 'svelte';

let markedImages = []; // array to store marked images
let currentImage; // the current image that is being marked

// event dispatcher
const dispatch = createEventDispatcher();

// function to mark an image
function markImage(image) {
  markedImages.push(image);
  dispatch("markedImage", image);
}

// function to unmark an image
function unmarkImage(image) {
  const index = markedImages.indexOf(image);
  if (index > -1) {
    markedImages.splice(index, 1);
  }
  dispatch("unmarkedImage", image);
}

// function to set the current image
function setImage(image) {
  currentImage = image;
  dispatch("setImage", image);
}

// function to get the current image
function getImage() {
  return currentImage;
}

// function to get the marked images
function getMarkedImages() {
  return markedImages;
}

// export the functions
export { markImage, unmarkImage, setImage, getImage, getMarkedImages };