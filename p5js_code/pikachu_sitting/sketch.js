let counter = 0;
let speedX,speedY,loX,loY;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  speedX = 30;
  speedY = 10;
  loX = random(height/2);
  loY = random(width/2);
}

function draw() {
  background(130,200,225);
  if (loX < 0) {
    loX = width;
}
  if (loX > width) {
    loX = 0;
}
  if (loY < 0) {
    loY = height;
}
  if (loY > height) {
    loY = 0;
}
  loX += speedX;
  loY += speedY;
  fill(0,0,255,100);
  strokeWeight(1);
  ddCatchem(loX,loY);
  ddPikaPair();
}

function ddCatchem(lx,ly) {
  ddPokeBall(lx,ly);
  ddCenterPokeBall();
}

function ddPokeBall(lx,ly) {
  ddPokePart1(lx,ly,counter,100,100,color(255));
  ddPokePart2b(lx,ly,counter,color(255));
  ddPokePart5(lx,ly,counter,110,110,color(255,0,0));
  ddPokePart3(lx,ly,counter,100,100,color(0));
  ddPokePart4(lx,ly,counter,100,100,color(255));
  counter+=0.5
}

function ddCenterPokeBall() {
  ddPokePart1(width/2,height/2-150,counter,150,150,color(255));
  ddPokePart2(width/2,height/2-150,counter,color(255));
  ddPokePart5(width/2,height/2-150,counter,160,160,color(255,0,0));
  ddPokePart3(width/2,height/2-150,counter,100,100,color(0));
  ddPokePart4(width/2,height/2-150,counter,100,100,color(255));
  counter+=0.5
}

function ddPikaPair() {
  ddDrawPika();
  ddDrawShinyPika();
}

function ddDrawShinyPika() {
  let k2 = color(255,200,40)
  ddPikaFeet(width/4+290,height/4+300,-50,k2);
  ddPikaFeet(width/4+210,height/4+300,50,k2);
  ddPikaEar(width/4+200,height/4+210,-200,0.8,k2);
  ddPikaEar(width/4+290,height/4+210,20,0.8,k2);
  ddPikaBody(width/4+250,height/4+250,1,k2);
  ddPikaFace(width/4+250,height/4+250);
  ddPikaTail(width/4+250,height/4+280,1,0.75,k2);
}

function ddDrawPika() {
  let k = color(255,255,0)
  ddPikaFeet(width/4+40,height/4+300,-50,k);
  ddPikaFeet(width/4-40,height/4+300,50,k);
  ddPikaBody(width/4,height/4+250,0,k);
  ddPikaFace(width/4,height/4+250);
  ddPikaEar(width/4+40,height/4+180,310,0.9,k);
  ddPikaEar(width/4-40,height/4+180,-135,0.9,k);
  ddPikaTail(width/4,height/4+280,1,1.1,k);
}

function ddPikaBody(x,y,hat,c) {
  push();
  fill(c);
  translate(x,y);
  point(0,-70);
  point(-20,-60);
  point(-30,0);
  point(-45,50);
  point(0,70);
  point(45,50);
  point(30,0);
  point(20,-60);

  beginShape();
  curveVertex(-30, 0);
  curveVertex(-30, 0);
  curveVertex(-45, 50);
  curveVertex(0, 70);
  curveVertex(45, 50);
  curveVertex(30, 0); 
  curveVertex(35, -25); //body
  curveVertex(20, -60);
  curveVertex(0, -70);
  curveVertex(-20, -60);
  curveVertex(-35, -25);
  curveVertex(-30, 0);
  curveVertex(-50, 70); //head
  endShape();
  pop();

  if (hat == 1) {
    push();
    translate(x,y);
    fill(255,0,0);
    rect(-35,-75,70,25,5);
    fill(0,200);
    arc(20,-50,100,20,180,HALF_PI)
    pop();
  }
}

function ddPikaFace(x,y) {
  push();
  translate(x,y);
  noStroke();
  fill(255,0,0);
  ellipse(-30, -23, 10, 20);
  ellipse(30, -23, 10, 20);
  fill(150,75,0);
  ellipse(0, 25, 55, 8);
  ellipse(0, 40, 60, 8);
  pop();
}

function ddPikaFeet(x,y,a,c) {
  push();
  translate(x,y);
  rotate(a);
  fill(c);
  ellipse(0,0,50,15);
  pop();
}

function ddPikaEar(x,y,a,s,c) {
  push();
  translate(x,y);
  rotate(a);
  scale(s);
  fill(c);
  ellipse(0,0,70,20);
  fill(0);
  ellipse(23,0,22,15);
  pop();
}

function ddPikaTail(x,y,a,s,c) {
  push();
  translate(x,y);
  rotate(map(mouseY,0,width,-30,30));
  scale(s);
  strokeWeight(1.5);
  
  beginShape();
  fill(150,75,0);
  vertex(2, 0);
  vertex(30,0);
  vertex(25,-15);
  vertex(40,-15);
  vertex(40,-5);
  vertex(45,10);
  vertex(5,10);
  endShape();
  
  beginShape();
  fill(c);
  vertex(40,-15);
  vertex(50,-15);
  vertex(45,-60);
  vertex(110,-60);
  vertex(95,-30);
  vertex(65,-30);
  vertex(70,0);
  vertex(40,-5);
  endShape();
  pop();
}

function ddPokePart1(x,y,rot,w,h,c) {
  push();
  translate(x,y);
  rotate(rot);
  noStroke();
  fill(c);
  ellipse(0,0,w+4,h+4);
  pop();
}

function ddPokePart2 (x,y,rot,c) {
  push();
  fill(c);
  translate(x,y);
  rotate(rot);
  stroke(0);
  strokeWeight(5);
  line(-75, 0, 75, 0);
  pop();
}

function ddPokePart2b (x,y,rot,c) {
  push();
  fill(c);
  translate(x,y);
  rotate(rot);
  stroke(0);
  strokeWeight(5);
  line(-50, 0, 50, 0);
  pop();
}

function ddPokePart3(x,y,rot,w,h,c) {
  push();
  fill(c);
  translate(x,y);
  rotate(rot);
  noStroke();
  ellipse(0,0,w/5,w/5);
  pop();
}

function ddPokePart4(x,y,rot,w,h,c) {
  push();
  fill(c);
  translate(x,y);
  rotate(rot);
  noStroke();
  ellipse(0,0,w/6.6,w/6.6);
  pop();
}

function ddPokePart5(x,y,rot,w,h,c) {
  push();
  fill(c);
  translate(x,y);
  rotate(rot);
  noStroke();
  arc(0,0,w,h,180,QUARTER_PI);
  pop();
}