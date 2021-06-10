
var gif_loadImg, gif_createImg;

function preload() {
  gif_loadImg = loadImage("vegetables.gif");
  gif_createImg = createImg("vegetables.gif");
}

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  
  
  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  gif_createImg.position(50, 50);
}
