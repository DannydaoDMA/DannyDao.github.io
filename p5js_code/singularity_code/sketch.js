let recMode = false;

let ddPenRoseLSystemArray = new Array(1);
let counter1 = 0
let counter2 = 0
let counter3 = 0
let ds;
let numPatterns = 100;
let patterns = [];
let pattern1;
let pattern2;

let can;

function setup() {
    can = createCanvas(1920, 1080);
    pattern1 = new ddPointPattern(2000, 100, width / 2, height / 2, color(255));
    pattern1.ddPointInitialize();
    pattern2 = new ddPointPattern(2000, 100, width / 2, height / 2, color(255));
    pattern2.ddPointInitialize();
    for (let i = 0; i < numPatterns; i++) {
        patterns[i] = new ddParametricPattern(i, -3, 3, width, height);
      }
    for (let i = 0; i < ddPenRoseLSystemArray.length; i++) {
        ddPenRoseLSystemArray[i] =  ds = new ddPenRoseLSystem();
      } 
    frameRate(30);
    //noLoop();
    console.log(frameCount);
}

function draw() {
    if (frameCount < 700) {
        background(0,10);
        push();
        translate(width / 2, height / 2);
        stroke(255);
        strokeWeight(1);
        noFill();
        for (let i = 0; i < patterns.length; i++) {
            patterns[i].ddParametricUpdate();
            patterns[i].ddParametricDisplay();
          }
        pop(); 
        for (let i = 0; i < ddPenRoseLSystemArray.length; i++) {
            ddPenRoseLSystemArray[i].ddPenroseSimulate(5);
            ddPenRoseLSystemArray[i].ddPenroseReset();
            ddPenRoseLSystemArray[i].ddPenroseGetAge();
            ddPenRoseLSystemArray[i].ddPenroseIterate();
            ddPenRoseLSystemArray[i].ddPenroseRender(100,100);
          }
        console.log("the first act");
    } else if (frameCount < 1400) {
        background(0,10);
        pattern1.ddPointUpdate();
        pattern1.ddPointDisplay();
        pattern2.ddPointUpdate();
        pattern2.ddPointDisplay();
        push();
        translate(width / 2, height / 2);
        stroke(255);
        strokeWeight(1);
        noFill();
        for (let i = 0; i < patterns.length; i++) {
            patterns[i].ddParametricUpdate();
            patterns[i].ddParametricDisplay();
          }
        pop();

        console.log("the second act");
    }    else if (frameCount < 2700) {
        background(0,10);
        pattern2.ddPointUpdate();
        pattern2.ddPointDisplay();
        push();
        translate(width / 2, height / 2);
        stroke(255,50);
        strokeWeight(1);
        noFill();
        for (let i = 0; i < patterns.length; i++) {
            patterns[i].ddParametricUpdate();
            patterns[i].ddParametricDisplay();
          }
        pop();
        for (let i = 0; i < ddPenRoseLSystemArray.length; i++) {
            ddPenRoseLSystemArray[i].ddPenroseSimulate(5);
            ddPenRoseLSystemArray[i].ddPenroseReset();
            ddPenRoseLSystemArray[i].ddPenroseGetAge();
            ddPenRoseLSystemArray[i].ddPenroseIterate();
            ddPenRoseLSystemArray[i].ddPenroseRender(100,100);
          }
        console.log("the third act");

    } else {
        background(0,10);
        push();
        translate(width / 2, height / 2);
        rotate(counter3);
        stroke(255,50);
        strokeWeight(1);
        noFill();
        for (let i = 0; i < patterns.length; i++) {
            patterns[i].ddParametricUpdate();
            patterns[i].ddParametricDisplay();
          }
        counter3 += 1
        pop();
        for (let i = 0; i < ddPenRoseLSystemArray.length; i++) {
            ddPenRoseLSystemArray[i].ddPenroseSimulate(5);
            ddPenRoseLSystemArray[i].ddPenroseReset();
            ddPenRoseLSystemArray[i].ddPenroseGetAge();
            ddPenRoseLSystemArray[i].ddPenroseIterate();
            ddPenRoseLSystemArray[i].ddPenroseRender(100,100);
          }
        pattern2.ddPointUpdate();
        pattern2.ddPointDisplay();
        console.log("the final act");
    }

    recordit();

}

function keyPressed() {

    if (keyIsPressed === true) {
        let k = key;
        console.log("k is " + k);

        if (k == 's' || k == 'S') {
            console.log("Stopped Recording");
            recMode = false;
            noLoop();
        }

        if (k == ' ') {
            console.log("Start Recording");
            recMode = true;
            loop();
        }
    }
}

function recordit() {  
    if (recMode == true) {
        let ext = nf(frameCount, 4);
        saveCanvas(can, 'frame-' + ext, 'jpg');
        console.log("rec " + ext);
    }
}
