/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW sqrt, DOWN_ARROW , DEGREES, RIGHT_ARROW,
          LEFT_ARROW, collideRectRect, noFill, Clickable, createButton, clear, rotate,
          angleMode, createInput, push,pop,translate */

let backgroundColor, button, buttons, myButton, button1, button2, button3, button4, button5,
bowlingBall, bBallX, bBallY, ballxvel,ballyvel,bbwid,bbht,arrow,arrowX, arrowY, 
arrowyVel, arrowW, arrowH, pins, mass, acceleration, forceArrow,bg,
press;
let pin1,pin2, pin3,pin4,pin5,pin6, bPins, fallenpin;
let prevRotValue;
function setup() {
  // Canvas & color settings
  prevRotValue = 0;
  createCanvas(500, 500);
  
  button = createButton('Main Menu');
   button.position(19, 9);
   button.mousePressed(clickButton);
  
   
function clickButton() {
  location.href = 'index.html';
  
}
  
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  bowlingBall = loadImage("https://cdn.glitch.com/52edd453-2e8d-4def-a55e-b462dab3233f%2Foutput-onlinepngtools%20(3).png?v=1595943671564");
  bBallX = 200;
  bBallY = 420;
  bbwid = 50;
  bbht = 50;
  ballyvel=4;
  arrow= loadImage("https://cdn.glitch.com/65e6b9a0-3b1b-46cc-b9ad-353234dd24ac%2Foutput-onlinepngtools%20(9).png?v=1596169287695")
  arrowX=220;
  arrowY=520;
  arrowW=30;
  arrowH=20;
  arrowyVel=4;
  pins=loadImage("https://cdn.glitch.com/52edd453-2e8d-4def-a55e-b462dab3233f%2F159594320665803458.png?v=1595943266436");
  fallenpin=  loadImage("https://cdn.glitch.com/bfe2ce50-9da9-436f-9fcd-c4834f82cd26%2Foutput-onlinepngtools%20(7).png?v=1596166492222");
  bg= loadImage("https://cdn.glitch.com/bfe2ce50-9da9-436f-9fcd-c4834f82cd26%2Fbowling_alley-dribbble_2x.png?v=1596170310166");
}

function draw() {
   background(bg); 
  image(bowlingBall, bBallX, bBallY, bbwid +20,bbht);
        
  if (bBallY>201){   
  pin1= new bowlingPin(230,230,60);
  pin1.draw(false); 
  pin1.checkCollision();
  
  pin2= new bowlingPin(210,220,70);
  pin2.draw(false); 
  pin2.checkCollision();
  
  pin3= new bowlingPin(250,220,70);
  pin3.draw(false); 
  pin3.checkCollision();
  
  pin4 = new bowlingPin(190,210,70);
  pin4.draw(false); 
  pin4.checkCollision();
  
  pin5= new bowlingPin(230,210,80);
  pin5.draw(false); 
  pin5.checkCollision();
  
  pin6= new bowlingPin(270,210,70);
  pin6.draw(false); 
  pin6.checkCollision();
  }
  keyPressed();
  fill("white"); 
  textSize(17)

 // text("An object at rest will remain at rest until an unbalanced force acts upon it", 20,450);
  text("Press P for the demonstration",140,120);
  ballMove();
 if( bBallY<201 && bBallY>0){ 
  dropPin();
  }
  
} 


class bowlingPin {
  constructor(x,y,h){
    this.x=x;
    this.y=y;
    this.width=18;
    this.height=h;
  }
  
  draw(fPin){
    if( fPin === false){
      image(pins, this.x, this.y, this.width, this.height);
    }
    else{
      image(fallenpin, this.x, this.y, 40, 60);
    }
  }
  
  checkCollision(){
    //when the bowling ball hits the pins - have them rotate at an angle
    if (collideRectRect(bBallX, bBallY, bbwid,bbht,this.x, this.y, this.width, this.height )){
      this.x+=10;
      ballxvel -1;
      //dropPin();
    }
    //when the bowling ball> width have the pins go straight up
    
  }
}
function reset(){
  arrowY=510;
}

function keyPressed(){
  if (keyCode===80){
   image(arrow,arrowX, arrowY, arrowW,arrowH);
    if(arrowY>410){
    arrowY -= arrowyVel; 
    }
   }
  
}
function ballMove(){
 if(arrowY<410){
  bBallY -= ballyvel;
  arrowyVel=0;
   
   if (bBallY <0){
    bBallY= 410;
    reset(); 
  }
   }

}

function dropPin(){
 // translate(width/2,height/2);
  pin1.draw(true);
  pin2.draw(true);
  pin3.draw(true);
  pin4.draw(true);
  pin5.draw(true);
  pin6.draw(true);
}

