
function setup() {
  createCanvas(500,500);
  background(0);
}

function draw() {
  let y1=mouseY
  let x1=mouseX;

  if (mouseX < width/2) {
    for (let i = 0; i < 500; i += 10) {
      for (let j = 0; j < 500; j += 10) {
        rand = random(0,255);
        noStroke();
        background(0);
        fill(255,rand,rand);
        quad(rand,rand,i+20,j+20,i+20,j+10,rand,rand);
        console.log ("leftside")
      }  
    }

  if ( mouseY < height/2) {
    for (let i = 0; i < 500; i += 20) {
      for (let j = 0; j < 500; j += 20) {
        rand = random(0,255);
        fill(0,rand,255);
        ellipse (i+50,j+50,rand,rand);
        console.log ("top left");
      }
    }
  } 
  else {
    for (let i = 0; i < 500; i += 50) {
      for (let j = 0; j < 500; j += 50) {
        rand = random(0,100);
        noStroke();
        fill(rand,255,255);
        circle(i+10,j+10,rand); 
        console.log ("bottom left");
      }
     }
    }
  }
  else{
    for (let i = 0; i < 500; i += 10) {
      for (let j = 0; j < 500; j += 10) {
        rand = random(0,255);
        noStroke();
        fill(255,255,rand);
        rect(i+10,j+10,10,10);
        console.log ("rightside");
      }
    }
    if ( mouseY < height/2) {
      for (let i = 0; i < 500; i += 10) {
        for (let j = 0; j < 500; j += 10) {
          rand = random(0,255);
          fill(0,rand,255,50);
          triangle(x1,y1,i+10,j+10,i+30,j+30)
          console.log("top right")
        }
      }
    }
    else {
      for (let i = 0; i < 500; i += 10) {
        for (let j = 0; j < 500; j += 10) {
          rand = random(0,255);
          noStroke();
          background(0);
          fill(rand,255,255);
          arc(rand,rand,i+50,j+50,360,50);
          fill(255,255,rand)
          circle(x1,y1,50)
          console.log("bottom right")
        }
      }
    }
  }
}   
