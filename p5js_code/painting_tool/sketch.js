let currentkey = '1';
let bgc ;
let dkcount;

function setup() {
    createCanvas(500, 500);
    background(0);
    smooth();
    bgc = color(0);
    dkcount = 20;
}


function draw() {
    if( keyIsPressed) {
      clear_print();
    }

    if(mouseIsPressed) {
     drawChoice();
    }
}

function drawChoice() {
  let currentkey = key;
  let rand = random(0,255);

switch(currentkey) {
case '1':
  console.log("1");  // clean white line
  ddSimpleLine(color(255),mouseX,mouseY,pmouseX,pmouseY);
  break;

case '2':
  console.log("2");  // pink changing line
  ddCandyLine(color(255,rand,255),mouseX,mouseY,pmouseX,pmouseY);
  break;

case '3':
  console.log("3");  // purple changing line
  ddCandyLine(color(128,rand,255),mouseX,mouseY,pmouseX,pmouseY);
  break;

case '4':
  console.log("4");  // blue changing square brush
  ddSquareCityBrush(dkcount,mouseX,mouseY,pmouseX,pmouseY);
  if (dkcount > 15 ) {

    dkcount = 1;
  } 

  else {
    dkcount+= .5;
  }
  break;

case '5':
  console.log("5");  // fall colors arc brush
  ddFallBrush(dkcount,mouseX,mouseY,pmouseX,pmouseY);

  if (dkcount > 50 ) {

    dkcount = 1;
  } 

  else {
    dkcount+= .5;
  }
  break;

case '6':
  console.log("6");  // surprise! triangle line brush
  ddTriBrush(color(255), mouseX, mouseY, pmouseX, pmouseY);
 
  if (dkcount > 50 ) {

    dkcount = 1;
  } 

  else {
    dkcount+= .5;
  }
  break;

case '7':
  console.log("7");  // erase with background color
  eraser(bgc,mouseX,mouseY,20);
   break;

default: 
  console.log("None");  
  break;
}

}

function ddSimpleLine(k,lx,ly,px,py) {
  strokeWeight(5);
  stroke(k);
  line(lx,ly,px,py);
}

function ddCandyLine(k,lx,ly,px,py) {
  strokeWeight(10);
  stroke(k);
  line(lx,ly,px,py);
}

function ddSquareCityBrush(kcount,lx,ly,px,py) {
  strokeWeight(kcount);
  noStroke();
  fill(kcount*10,kcount*10,255,200)
  rectMode(CENTER)
  rect(lx,ly,30,30,kcount);
}

function ddFallBrush(kcount,lx,ly,px,py) {
  noStroke();
  fill(random(200),0,random(200));
  arc(lx,ly,20,20,px,py,kcount);
}

function ddTriBrush(kcount,lx,ly,px,py) {
  strokeWeight(10);
  noStroke();
  fill(random(255),0,255,100);
  triangle(10,10,20,20,lx,ly);
} 

function eraser(k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx,ly,sz,sz);
}

function clear_print() {
  if (key == 'x' || key == 'X') {
    background(0);
  } 
  
  else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  
  }

}