// code help taken from p5js web editor examples

var particles = [];

var attractors = [];




function mousePressed() {

  attractors.push(createVector(mouseX , mouseY));

}


function setup() {
 
  createCanvas(500 , 500);
  colorMode(HSB, 360, 100, 100)
for (var i = 0 ; i < 150 ; i++) {
    particles.push(new Particle(random(width) ,random(height)));
}
  
  button = createButton('Main Menu');
   button.position(19, 9);
   button.mousePressed(clickButton);
  
   
function clickButton() {
  location.href = 'index.html';
  
}
}


function draw() {
background(4, 80, 78);
stroke(0 , 0 , 255);
strokeWeight(4);
for (var i = 0 ; i < attractors.length ; i++) {
  point(attractors[i].x , attractors[i].y);
}

for (var i = 0 ; i < particles.length ; i++) {
var particle = particles[i];

  for(var j = 0 ; j < attractors.length ;j++){
    particle.attraction(attractors[j]);

  }

particle.update();
particle.show();
}

}

// Particle Contructor Function 


function Particle(x , y) {
this.pos = createVector(x , y);
this.vel = createVector();//p5.Vector.random2D();
this.acc = createVector();
this.prev = createVector(x ,y);



this.show = function () {

stroke(255 , 255);
strokeWeight(1);
line(this.pos.x , this.pos.y , this.prev.x , this.prev.y);

//point(this.pos.x , this.pos.y);

this.prev.x = this.pos.x;
this.prev.y = this.pos.y;


  

}


this.update = function () {
this.pos.add(this.vel);
this.vel.add(this.acc);
 this.vel.limit(5);
this.acc.mult(0);

}


this.attraction = function(attractor) {

    // To Calculate Force from Newton Law ==> F = m1 * m2 * G / d ^ 2 
    // For Simplicity ==> m1 , m2 ==> 1 
    // Law Become ==> F = G / D ^ 2 ===> G = 6.67 * 10 ^ -11 
    // Direction Vector from Particle to Target Attractor
    var direction =  p5.Vector.sub(attractor , this.pos);
    var distSqaured = direction.magSq(); // d ^ 2 
    // constrain Values of distSqaure 
    distSqaured = constrain(distSqaured , 25 , 100);
    var G = 5;
    var magntuide = G / distSqaured;
    direction.setMag(magntuide);
    this.acc.add(direction);
    

}




}