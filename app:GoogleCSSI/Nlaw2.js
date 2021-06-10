/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW sqrt, DOWN_ARROW , DEGREES, RIGHT_ARROW,
          LEFT_ARROW, collideRectRect, noFill, Clickable, createButton, clear, rotate, angleMode, createInput */

let backgroundColor,button, xVel, yVel, forceArrow, force, acceleration, mass,a,c,d,color,
    spaceship;

function setup() {
  // Canvas & color settings
  createCanvas(500, 500);
  angleMode(DEGREES);
  
  colorMode(HSB, 360, 100, 100);
  backgroundColor = loadImage("https://cdn.glitch.com/65e6b9a0-3b1b-46cc-b9ad-353234dd24ac%2Fb5ed6612-cefd-48ef-bb06-05f49e3ec76d.image.png?v=1596167082623");
  spaceship=loadImage("https://cdn.glitch.com/65e6b9a0-3b1b-46cc-b9ad-353234dd24ac%2Foutput-onlinepngtools%20(8).png?v=1596167677401")
  button = createButton('Main Menu');
   button.position(19, 9);
   button.mousePressed(clickButton);
  
   
function clickButton() {
  location.href = 'index.html';
  
}
  
  xVel=5
  c=200;
  d=200;
  a=2;
  color=random(0,360)
  
  yVel=`${acceleration}`;
  forceArrow= loadImage("https://cdn.glitch.com/a6180e89-66a2-43a1-bc49-66e620fa2835%2Foutput-onlinepngtools.png?v=1595819589896")

}

function draw() {
  background(backgroundColor);
  fill(0,0,0);
  text("Press M to enter mass and acceleration", 20,40);
  force;
  text(`The mass is ${mass} grams`, 300,70);
  text(`The acceleration is ${acceleration} m/s^2`, 300,90);
  force= (`${mass* acceleration}`);
  text(`The force is ${force} newtons`, 300,110); 
  fill(color,50,80);
  moveRect();
 
}

function moveRect(){
 image(spaceship,c,d,`${mass}`,`${mass}`);
 image(forceArrow,`${c+mass/a -10}`,`${d+mass/a}`,20,`${force/3.5}`);
  c += xVel;
  if (c>width){
     if(d> 400){
      d = 50*-1;
    }else {
      d+=50;
    }
    xVel= random(3,10) *-1;   
  }else if (c < 0){
    xVel= random(-10,-3)*-1;
  }
  if (`${acceleration}`==0){
    if(c>width){
    xVel=-5;
    }
    else if (c<width){
      xVel= xVel;
    }
}
}

function keyPressed(){
   if (keyCode === 77 ){
   mass= window.prompt("Input the mass");
   acceleration= window.prompt("Input the acceleration");
   }
}