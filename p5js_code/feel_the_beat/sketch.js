
let counterG = 0;
let counterR = 0;
let bgcounter = 0;
let counter = 0;
let cx,xy;
let gridSize;
let dancerB;
let dancerC;
let a = 0;
let b = 100;
let c = 255;

function preload() {
  f = loadFont ('assets/toon.otf');
}

function setup() {
  createCanvas(500,500);
  frameRate(60);
  rectMode(CENTER);
  counterR=height;

  textFont(f);
  fill(0,255,0);

  tint(255,127)
  dancerB = loadImage ("assets/test2.png")
  dancerC = loadImage ("assets/test3.png")
  cx = width/2;
  cy = height/2;
  gridSize = 80;
  textSize(40);
}

function draw() {
  let r = random(0,255)

    noFill();
    colorMode(RGB, 255, 255, 255, 1);
    strokeWeight(4);
    stroke(255, 0, 10, 0.3);
    circle(width/2, height/2, 50);
    circle(width/2, height/2, 50);
  
    fill(a,b,c);
    rect(250,250,r+100,100);

  if ( mouseIsPressed && keyIsPressed == true )  {
    textSize(counterR/5);
    textAlign(CENTER);
    fill(255, 255, 100);
    text(" Step Inside ", width/2, height/2);
    
      counterR-=1.5;
      if (counterR < -10) {
      counterR = height/2;
    }
  }
  
  else {
    textSize(counterG/3);
    textAlign(CENTER);
    fill(0);
    text("Feel The Beat", width/2, height/2);
  
      counterG +=1;
      if (counterG > width/3) {
        counterG = -50;
    }
  }

  noStroke();
  fill(255,255,r,120);
  circle(width,0,counter/4)
  fill(255,r,255,120);
  circle(0,height,counter/4);
  fill(255,r,r,120);
  circle(width,500,counter/4);
  fill(r,255,r,120);
  circle(0,0,counter/4);

  if (counter > height) {
    background(bgcounter,r,r,r);
    bgcounter+=10;
    counter = 0;
  } 

  else {
    counter+=10;
  }

  if (keyIsPressed) {true/false
    keyChoice();
}

}

function keyChoice() {

  switch(key) {
  case 'a':
  console.log("a left"); 
  cx+= -gridSize;
  image(dancerB,cx,cy,gridSize,gridSize);
  break;
  case 'w':
  console.log("w up");  
  cy+= -gridSize; 
  image(dancerB,cx,cy,gridSize,gridSize);
  break;
  case 'd':
  console.log("d  right"); 
  cx+= gridSize;
  image(dancerB,cx,cy,gridSize,gridSize);
  break;
  case 's':
  console.log("s back");  
  cy+= gridSize;
  image(dancerB,cx,cy,gridSize,gridSize);
  break;
  case 'j':
  console.log("a left"); 
  cx+= -gridSize;
  image(dancerC,cx,cy,gridSize,gridSize);
  break;
  case 'i':
  console.log("w up");  
  cy+= -gridSize; 
  image(dancerC,cx,cy,gridSize,gridSize);
  break;
  case 'l':
  console.log("d  right"); 
  cx+= gridSize;
  image(dancerC,cx,cy,gridSize,gridSize);
  break;
  case 'k':
  console.log("s back");  
  cy+= gridSize;
  image(dancerC,cx,cy,gridSize,gridSize);
  break;
  case 't':
  console.log("t text"); 
  fill(0);
  text("Dance!",cx,cy,200);
  break;
  default:             
  console.log("None");  
  break;
  }
key = "";  
}

function keyPressed() { 
  if ( key == 'b' || key == 'B' ) { 
    if (b == 100) {
      b = random(0,255);
    }

    else {
      b = 100;
    }
  }
}

function mouseMoved() {
  a+=50
  if (a > 255) {
    a=0
  }
}


