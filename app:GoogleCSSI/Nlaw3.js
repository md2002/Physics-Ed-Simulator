/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, createSprite,createImage, loadImage, windowHeight, noStroke, UP_ARROW, arc, createSprite, drawSprites,
          addAnimation, angleMode, DEGREES, loadImage,textAlign createImg, rotate, loadAnimation, animation,collideRectRect
          ,rectMode, CORNER,createButton*/

let pikachu,
  lightning,
  bolt1,
  bowLoadImg,
  pika,
  lbolts,
  X,
  Y,
  bowser,
  fire,
  fball1,
  fireb,
    bg,
  button;
let velocitySet, isOutOfBounds, song;

function preload() {
  pika = loadImage(
    "https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2F5Q0v.gif?v=1595994822355"
  );
  pikachu = createImg(
    "https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2F5Q0v.gif?v=1595994822355"
  );
  bowLoadImg = loadImage(
    "https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2FZFqc.gif?v=1595995761347"
  );
  bowser = createImg(
    "https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2FZFqc.gif?v=1595995761347"
  );
  lightning = loadImage(
    "https://cdn.glitch.com/dd498a18-8e6f-4a96-a6d2-0931fa4b0bff%2Ffc57d5ec-29c2-4e85-aa34-40b8d2c62106.image.png?v=1596045296735"
  );
  fire = loadImage(
    "https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2FWs1o.gif?v=1595995247509"
  );
  
  bg = loadImage("https://cdn.glitch.com/bfe2ce50-9da9-436f-9fcd-c4834f82cd26%2F814007_super-mario-backgrounds_1920x1200_h.webp?v=1596169122082");
}

function checkCollision() {
  var hit = collideRectRect(
    fball1.x,
    fball1.y,
    fball1.width,
    fball1.height,
    bolt1.x,
    bolt1.y,
    bolt1.width,
    bolt1.height
  );
  print("colliding? " + hit);
  if (hit) {
    fball1.changeAngle();
    bolt1.changeAngle();
  }
}

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);
  bolt1 = new bolts();
  fball1 = new fireBall();
  velocitySet = false;
  isOutOfBounds = false;
  button = createButton("Main Menu");
  button.position(19, 9);
  button.mousePressed(clickButton);
  song = loadSound(
    "https://cdn.glitch.com/4a5b2d28-ea5d-457c-9c1a-07d68fa9e8d1%2FSuper%20Mario%20Bros.%20Original%20Theme%20by%20Nintendo.mp3?v=1595004628767"
  );

  function clickButton() {
    location.href = "index.html";
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

function draw() {
  background(bg)
  pikachu.position(0, 250);
  pikachu.size(160, 150);
  bowser.position(460, 240);
  bowser.size(165, 165);
  fill(200, 10, 95);
  textSize(17)
  text("Equal But Opposite Reaction", 220, 70);
  text("Press The Spacebar", 250, 100);

  if (velocitySet) {
    bolt1.draw();
    fball1.draw();
    if (isOutOfBounds === false) {
      bolt1.move(fball1);
      fball1.move(bolt1);
    }
    checkCollision();
  }
  /// check for bolt and fireball's draw locations
  if (bolt1.OutOfBounds || fball1.OutOfBounds) {
    bolt1.resetLocation();
    fball1.resetLocation();
    velocitySet = false;
  }
  /// you need to reset the draw coordinates of bolt and fireball locations ...
  /// isOutOfBounds = true;
  /// velocitySet = false;
}

function keyPressed() {
  if (32 === keyCode) {
    velocitySet = true;
  }
}
///// end of my main programs ... here on my class definitions will start ...

class bolts {
  constructor() {
    this.resetLocation();
  }

  resetLocation() {
    this.x = 100;
    this.y = 300;
    this.width = 150;
    this.height = 80;
    this.velocityx = random(3, 7);
    this.velocityy = random(3, 7);
    this.bChangeAngle = false;
    this.OutOfBounds = false;
  }

  draw() {
    if (this.OutOfBounds === false) {
      image(lightning, this.x, this.y, this.width, this.height);
    }
    var hit = collideRectRect(
      0,
      0,
      width,
      height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    if (hit === false) {
      this.OutOfBounds = true;
    }
  }

  move() {
    if (this.bChangeAngle === false) {
      this.x += this.velocityx;
      this.y -= this.velocityy;
    } else {
      this.x -= this.velocityx;
      this.y -= this.velocityy;
    }
  }

  changeAngle() {
    if (this.bChangeAngle === false) this.bChangeAngle = true;
  }
}

class fireBall {
  constructor() {
    this.resetLocation();
  }

  resetLocation() {
    this.x = 310;
    this.y = 280;
    this.width = 120;
    this.height = 120;
    this.velocityx = random(3, 7);
    this.velocityy = random(3, 7);
    this.bChangeAngle = false;
    this.OutOfBounds = false;
  }

  draw() {
    if (this.OutOfBounds === false) {
      image(fire, this.x, this.y, this.width, this.height);
    }
    var hit = collideRectRect(
      0,
      0,
      width,
      height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    if (hit === false) {
      this.OutOfBounds = true;
    }
  }

  move() {
    if (this.bChangeAngle === false) {
      this.x -= this.velocityx;
      this.y -= this.velocityy;
    } else {
      this.x += this.velocityx;
      this.y -= this.velocityy;
    }
  }
  changeAngle() {
    if (this.bChangeAngle === false) this.bChangeAngle = true;
  }
  isOutofBounds() {
    var hit = collideRectRect(
      0,
      0,
      width,
      height,
      this.x,
      this.y,
      this.width,
      this.height
    );

    if (hit === false) {
      this.resetLocation();
    }
  }
}
