class ddPenRoseLSystem {

    constructor(lx,ly) {
  
       this.steps = 0;
       this.axiom = "[X]++[X]++[X]++[X]++[X]";
       this.ruleW = "YF++ZF----XF[-YF----WF]++";
       this.ruleX = "+YF--ZF[---WF--XF]+";
       this.ruleY = "-WF++XF[+++YF++ZF]-";
       this.ruleZ = "--YF++++WF[+ZF++++XF]--XF";
       this.x = lx
       this.y = ly
    
       this.startLength = 10.0;
       this.theta = TWO_PI / 3.0; 
    }
  
  ddPenroseSimulate(gen) {
    while (this.ddPenroseGetAge() < gen) {
      this.ddPenroseIterate(this.production);
    }
  }
  
  ddPenroseReset() {
      this.production = this.axiom;
      this.drawLength = this.startLength;
      this.generations = 0;
    }
  
  ddPenroseGetAge () {
      return this.generations;
    }
  
  ddPenroseIterate() {
      let newProduction = "";
  
      for(let i=0; i < this.production.length; ++i) {
        let step = this.production.charAt(i);

        if (step == 'W') {
          newProduction = newProduction + this.ruleW;
        }
        else if (step == 'X') {
          newProduction = newProduction + this.ruleX;
        }
        else if (step == 'Y') {
          newProduction = newProduction + this.ruleY;
        }
        else if (step == 'Z') {
          newProduction = newProduction + this.ruleZ;
        }
        else {

          if (step != 'F') {
            newProduction = newProduction + step;
          }
        }
      }
  
      this.drawLength = this.drawLength * 0.5;
      this.generations++;
      this.production = newProduction;
  }
  
  ddPenroseRender(lx,ly) {
      translate(width / 2, height / 2);
  
      this.steps += 20;
      if(this.steps > this.production.length) {
        this.steps = this.production.length;
      }
  
      for(let i=0; i<this.steps; ++i) {
        let step = this.production.charAt(i);

        if( step == 'F') {
          stroke(255,100);
          for(let j=0; j < this.repeats; j++) {
            translate(lx,ly);
            rotate(counter2);
            push();
            scale(counter1);
            line(0, 0, 0, -this.drawLength);
            fill(0);
            pop();
          }
          this.repeats = counter2;
          counter1+= 0.0001
          counter2+= 0.0001
        }
        else if (step == '+') {
          rotate(this.theta);
        }
        else if (step == '-') {
          rotate(-this.theta);
        }
        else if (step == '[') {
          push();
        }
        else if (step == ']') {
          pop();
        }
      }
    }
  }
  