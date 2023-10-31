
let ddPikaPikaArray = new Array(25);
let ddPokeBallArray = new Array(25);
let p1,b1;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  
  for (let i = 0; i < ddPikaPikaArray.length; i++) {
    const randomHat = Math.floor(random(2)); 
    ddPikaPikaArray[i] =  p1 = new ddPikaPika(width/2,height/2,0,random(0.2,0.5),color(225,random(100,225),0),randomHat);
  }
  for (let i = 0; i < ddPokeBallArray.length; i++) {
    ddPokeBallArray[i] =  b1 = new ddPokeBalls(width/2,height/2,0,1,color(random(255),random(255),random(255)));
  }  
}

function draw() {
  background(215,190,215);
  fill(0,0,255,100);
  strokeWeight(1);
  //lx,ly,lrot,ls
  //x,y,a,s,k

  for (let i = 0; i < ddPikaPikaArray.length; i++) {
    ddPikaPikaArray[i].ddDisplayPikaPika();
    ddPikaPikaArray[i].ddUpdatePikaPika();
  }
  for (let i = 0; i < ddPokeBallArray.length; i++) {
    ddPokeBallArray[i].ddDisplayPokeBall();
    ddPokeBallArray[i].ddUpdatePokeBall();
    ddPokeBallArray[i].ddWigglePokeBall(random(10));
  }
}

class ddPikaPika{

  x;
  y;
  a;
  s;
  k;
  hat;

  constructor(lx,ly,la,ls,lk,lhat) {
    this.x = lx;
    this.y = ly;
    this.a = la;
    this.s = ls;
    this.ra = 0
    this.rs = random(1,25)
    this.k = lk;
    this.hat = lhat;
    this.sx = random(5,-5)
    this.sy = random(5,-5)
  }

  ddDisplayPikaPika() {
    push();
    translate(this.x,this.y);
    rotate(this.ra);
    scale(this.s);
    this.ddPikaFeet(45,45,-50,this.k);
    this.ddPikaFeet(-45,45,50,this.k);
    this.ddPikaEar(40,-40,20,1,this.k);
    this.ddPikaEar(-40,-40,-200,1,this.k);
    this.ddPikaBody(this.k,this.hat);
    this.ddPikaFace(0,0);
    this.ddPikaTail(-5,30,1,1.1,this.k);
    pop();
  }

  ddUpdatePikaPika() {
    if ((this.x < 0) || (this.x>width)) {
      this.sx = -this.sx;
    }
    if ((this.y < 0) || (this.y>height)) {
      this.sy = -this.sy;
    }
    this.x += this.sx
    this.y += this.sy
    this.ra += this.rs;
  }
   
  ddPikaBody(lc,lhat) {
    push();
    fill(lc);
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

    if (lhat == 1) {
      push();
      translate(-30,-70);
      fill(225,0,0);
      rect(0,0,70,25,5);
      fill(0,200);
      arc(50,30,100,20,180,HALF_PI)
      pop();

    }
  }
  
  ddPikaFace(lx,ly) {
    push();
    translate(lx,ly);
    noStroke();
    fill(255,0,0);
    ellipse(-30, -23, 10, 20);
    ellipse(30, -23, 10, 20);
    fill(150,75,0);
    ellipse(0, 25, 55, 8);
    ellipse(0, 40, 60, 8);
    pop();
  }
  
  ddPikaFeet(lx,ly,la,lc) {
    push();
    translate(lx,ly);
    rotate(la);
    fill(lc);
    ellipse(0,0,50,15);
    pop();
  }
  
  ddPikaEar(lx,ly,la,ls,lc) {
    push();
    translate(lx,ly);
    rotate(la);
    scale(ls);
    fill(lc);
    ellipse(0,0,70,20);
    fill(0);
    ellipse(23,0,22,15);
    pop();
  }
  
  ddPikaTail(lx,ly,la,ls,lc) {
    push();
    translate(lx,ly);
    rotate(map(mouseY,0,width,-30,30));
    scale(ls);
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
    fill(lc);
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
}

class ddPokeBalls {
  x;
  y;
  rot;
  s;
  lc;

  constructor(lx,ly,lrot,ls,lc) {
    this.x = lx;
    this.y = ly;
    this.rot = lrot;
    this.ra = 0;
    this.rs = random(1,20);
    this.s = ls;
    this.k = lc;
    this.sx = random(5,-5);
    this.sy = random(5,-5);
  }

  ddDisplayPokeBall() {
    push();
    translate(this.x,this.y);
    rotate(this.ra);
    scale(this.s);
    this.ddPokePart1(50,50);
    this.ddPokePart2(0,0);
    this.ddPokePart5(0,0,55,55,this.k);
    this.ddPokePart3(0,0,50);
    this.ddPokePart4(0,0,50,50);
    pop();
    //x,ly,lrot,ls,lw,lh
  }

  ddUpdatePokeBall() {
    if ((this.x < 0) || (this.x>width)) {
      this.sx = -this.sx;
    }
    if ((this.y < 0) || (this.y>height)) {
      this.sy = -this.sy;
    }
    this.x += this.sx;
    this.y += this.sy;
    this.ra += this.rs;
  }

  ddWigglePokeBall(sa) {
    if (this.y > height || this.y < 0 ) {
      this.y = 0;
    }
     this.y+=(-sa,sa);
  }

  ddPokePart1(lw,lh) {
    push();
    noStroke();
    fill(255);
    ellipse(0,0,lw+4,lh+4);
    pop();
  }
  
  ddPokePart2(lx,ly) {
    push();
    translate(lx,ly);
    stroke(0);
    strokeWeight(5);
    line(-25, 0, 25, 0);
    pop();
  }
  
  ddPokePart3(lx,ly,lw) {
    push();
    fill(0);
    translate(lx,ly);
    noStroke();
    ellipse(0,0,lw/5,lw/5);
    pop();
  }
  
  ddPokePart4(lx,ly,lw) {
    push();
    fill(255);
    translate(lx,ly);
    noStroke();
    ellipse(0,0,lw/6.6,lw/6.6);
    pop();
  }
  
  ddPokePart5(lx,ly,lw,lh,lc) {
    push();
    fill(lc);
    translate(lx,ly);
    noStroke();
    arc(0,0,lw,lh,180,QUARTER_PI);
    pop();
  }
}