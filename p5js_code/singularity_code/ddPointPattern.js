class ddPointPattern {
    constructor(num, range, loX, loY, k) {
      this.num = num;
      this.range = range;
      this.loX = loX;
      this.loY = loY;
      this.ax = [];
      this.ay = [];
      this.speedX = random(-100, 100);
      this.speedY = random(-100, 100);
      this.counter1 = 0
      this.counter2 = 0;
      this.k = k
    }
  
    ddPointInitialize() {
      for (let i = 0; i < this.num; i++) {
        this.ax[i] = this.loX;
        this.ay[i] = this.loY;
      }
    }
  
    ddPointUpdate() {
      this.loX += this.speedX;
      this.loY += this.speedY;
      if (this.loX < 0 || this.loX > width) {
        this.speedX = -this.speedX;
      }
      if (this.loY < 0 || this.loY > height) {
        this.speedY = -this.speedY;
      }
  
      for (let i = 1; i < this.num; i++) {
        this.ax[i - 1] = this.ax[i] + random(-this.range, this.range);
        this.ay[i - 1] = this.ay[i] + random(-this.range, this.range);
      }
  
      this.ax[this.num - 1] = constrain(this.ax[this.num - 1], 0, width);
      this.ay[this.num - 1] = constrain(this.ay[this.num - 1], 0, height);
    }
  
    ddPointDisplay() {
      for (let j = 1; j < this.num; j++) {
        let val = j / this.num * 204.0 + 1001;
        push();
        stroke(this.k);
        noFill();
        translate(this.loX, this.loY);
        scale(this.counter2);
        point(this.ax[j - 1], this.ay[j - 1], this.ax[j], this.ay[j]);
        pop();
        this.counter2 += 0.000001;
      }
    }
  }
  