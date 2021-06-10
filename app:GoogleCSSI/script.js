/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW sqrt, DOWN_ARROW , DEGREES, RIGHT_ARROW,
          LEFT_ARROW, collideRectRect, noFill, Clickable, createButton, clear, rotate,
          angleMode, createInput, push,pop,translate, textFont,loadFont,createImg*/

let button,
  button1,
  button2,
  button3,
  button4,
  button5,
  fontBold,
  a,
  b,
  bcreate,
  border1,
  b2,
  b3,
  b4,
  b5,
  b6,
  backback;
// function preload(){
//    b = loadImage("https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2FCad.gif?v=1595995250283")
//    bcreate = createImg("https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2FCad.gif?v=1595995250283")
// }
let foregroundImg, backgroundImg, groundImg, title;
let soundMode, bodyMode, howToPlay;
let startGround, ground, endGroud;
let introSong, coinSound, jumpSound;

function preload() {
  // set the global sound format
  //soundFormats('mp3')
  // load background Images
  backgroundImg = loadImage(
    "https://cdn.glitch.com/50920415-fe15-4aea-9ad7-9c53c1fea72d%2FBuilding-PNG-Clipart-Background-1.png?v=1596202694678"
  );
  foregroundImg = loadImage(
    "https://cdn.glitch.com/50920415-fe15-4aea-9ad7-9c53c1fea72d%2FWebp.net-resizeimage%20(1).png?v=1596202387135"
  );
  groundImg = loadImage(
    "https://cdn.glitch.com/50920415-fe15-4aea-9ad7-9c53c1fea72d%2FWebp.net-resizeimage%20(1).png?v=1596202387135"
  );
  title = loadImage(
    "https://cdn.glitch.com/50920415-fe15-4aea-9ad7-9c53c1fea72d%2FRocket-PNG-Clipart.png?v=1596203365691");
  startGround = loadImage(
    "https://cdn.glitch.com/50920415-fe15-4aea-9ad7-9c53c1fea72d%2FWebp.net-resizeimage%20(1).png?v=1596202387135"
  );
  backback = loadImage(
    "https://cdn.glitch.com/bfe2ce50-9da9-436f-9fcd-c4834f82cd26%2Fcartoon-retro-night-sky-with-stars-background-vector-3637231.jpg?v=1596204824768")}

function setup() {
  createCanvas(500, 570);
  background(backback);
  colorMode(HSB, 360, 100, 100);
  frameRate(40);

  var mgr = new SceneManager();
  mgr.fImage = foregroundImg;
  mgr.bImage = backgroundImg;
  mgr.gImage = groundImg;
  mgr.title = title;

  mgr.wire();
  mgr.showScene(Intro);

  button = createButton("Main Menu");
  button.style('background-color', color(200,30,90));
  button.position(225,199);
  button.mousePressed(clickButton);
  fill(random(90, 360), 30, 90);
  textSize(50);
  textFont("Broadway");
  text("PHYSICS", 150, 250);
  textSize(50);
  textFont("Imprint MT Shadow");
  fill(random(100, 360), 60, 80);
  text("SIMULATION", 97, 300);
  //    b = loadImage("https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2FCad.gif?v=1595995250283")
  //    bcreate = createImg("https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2FCad.gif?v=1595995250283")

  function clickButton() {
    location.href = "index.html";
  }
  button1 = createButton("Newton's First Law");
  button2 = createButton("Newton's Second Law");
  button3 = createButton("Newton's Third Law");
  button5 = createButton("Charged Particles");
  button4 = createButton("Kepler's Law");
  //button1.style('background-color',  255, 30, 20);
  button1.style('background-color', color(203,50,90));
  button1.style('font-color',color(0,0,95));
  button1.position(56, 225);
  button1.mousePressed(clickButton1);

  button2.position(190, 225);
  button2.style('background-color', color(218,50,90));
  button2.mousePressed(clickButton2);

  button3.position(345, 225);
  button3.style('background-color', color(230,60,90));
  button3.mousePressed(clickButton3);

  button4.position(165, 255);
  button4.style('background-color', color(260,80,90));
  button4.mousePressed(clickButton4);

  button5.position(265, 255);
  button5.style('background-color', color(275,85,90));
  button5.mousePressed(clickButton5);
  //create borders
  border1 = new borders(30, 130, 160);
  b2 = new borders(50, 150, 210);
  b3 = new borders(70, 135, 240);
  b4 = new borders(90, 95, 270);
  b5 = new borders(110, 125, 320);
  b6 = new borders(0, 85, 130);
}
function Intro() {
  let bgX = 0; // To scroll the background
  let choice = "";
  //introSong = loadSound('https://cdn.glitch.com/075b311a-0371-463a-a6ba-c4f6c09e32cb%2F1%20-%20Title%20Bgm.mp3?v=1596018063130')
  //introSong.play();

  this.draw = function() {
    background(backback);
    this.showBackground();
    this.moveBackground();
  };

  this.showBackground = function() {
    image(this.sceneManager.fImage, bgX, 77);
    image(this.sceneManager.bImage, bgX, 280);
    image(this.sceneManager.gImage, bgX, 540);
    image(this.sceneManager.title, 176, 20, 150, 150);
    if (Math.floor(frameCount / 30) % 2 == 0) {
      // A blinking Info
      textAlign(CENTER);
      textFont("VT323");
      textSize(20);
      // text("Select mode to start game", width/2, height - 20);
    }
  };
  this.moveBackground = function() {
    // Reset bgX when it runs out
    bgX -= 2;
    bgX %= 256;
  };
}

function draw() {
  border1.draw();
  b2.draw();
  b3.draw();
  b4.draw();
  b5.draw();
  b6.draw();
  b.postion(400, 400);
  b.size(200, 200);
}

function clickButton1() {
  location.href = "Nlaw1.html";
}

function clickButton2() {
  location.href = "Nlaw2.html";
}

function clickButton3() {
  location.href = "Nlaw3.html";
}

function clickButton4() {
  location.href = "centripetal.html";
}

function clickButton5() {
  location.href = "charged.html";
}

class borders {
  constructor(y, w, h) {
    this.x = 10;
    this.y = y;
    this.hue = h;
    this.width = w;
    this.height = 21;
  }
  draw() {
    stroke(this.hue, 80, 80);
    strokeWeight(5);
    noFill();
    rect(this.x, this.y, this.width, this.height);
  }
}
