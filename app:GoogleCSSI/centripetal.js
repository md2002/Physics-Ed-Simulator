// Name any p5.js functions we use in the global so Glitch can recognize them.    *
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          sin,frameRate, createLoop, animLoop, cos, translate, mouseIsPressed, windowWidth, createSprite, windowHeight, 
          noStroke, UP_ARROW, arc, createImg,createButton */
let bg,button, bgcreate,earth,earthCreate,accVector,velVector,sun,dur;

// galaxy -- https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif
// sun -- https://media.giphy.com/media/l1J9Nd2okdiIq7K9O/giphy.gif
// earth -- https://media.giphy.com/media/Ph5aF5qbxRZqRxV3E6/giphy.gif

function setup() {
    createCanvas(800, 800)
    colorMode(HSB,360,100,100);
  frameRate(80)
  
  button = createButton('Main Menu');
   button.position(19, 9);
   button.mousePressed(clickButton);
  
    
    frameRate(30)
    createLoop({duration: 4, gif:true})
    bg= loadImage("https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif");
   // bgcreate= createImg("https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif");
    earth= createImg("https://media.giphy.com/media/Ph5aF5qbxRZqRxV3E6/giphy.gif");
    //earthCreate= createImg("https://media.giphy.com/media/XHYGgMLpSaazBiAIcm/giphy.gif");
   sun= createImg("https://media.giphy.com/media/l1J9Nd2okdiIq7K9O/giphy.gif")
    // lakitu= loadImage("https://cdn.glitch.com/00f37255-55f8-4fb7-94cc-df7ade656527%2Foutput-onlinepngtools%20(5).png?v=1595988174813");
   accVector= loadImage("https://cdn.glitch.com/00f37255-55f8-4fb7-94cc-df7ade656527%2F24f0af9d-e920-4113-a8fb-46b335f457c7.image.png?v=1596083158195");
  
}
 
function draw() {
 background(bg);
  // background(95);
    translate(width / 3, height / 4);
    const radius = 2*height / 7;
    const x = cos(animLoop.theta) * (radius +100) + 40;
    const y = sin(animLoop.theta) * radius;
  
  strokeWeight(4);
  stroke(5, 100, 85)
  
  line(200 ,60 ,x + 60 ,y + 60);
 //line(x+20,y-20, x +50, y+90);
  sun.size(220,220)
  sun.position(370, 150)
  
  earth.size(130, 110)
  earth.position(x + 270, y + 200)
  // image(earth,x, y, 170, 150);
 // image(accVector,x+70,y+200,20,20);
  
  // image(sun,100,0,200,200)
  
}

function keyPressed(){
   if (keyCode === 77 ){
   dur= window.prompt("Enter the duration");
   }
}

   
function clickButton() {
  location.href = 'index.html';
  
}