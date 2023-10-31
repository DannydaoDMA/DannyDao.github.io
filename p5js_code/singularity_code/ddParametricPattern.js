class ddParametricPattern {
    constructor(offset, speedX, speedY, loX, loY) {
      this.offset = offset;
      this.speedX = speedX;
      this.speedY = speedY;
      this.loX = loX;
      this.loY = loY;
    }
  
    ddParametricUpdate() {
      this.loX += this.speedX;
      this.loY += this.speedY;
      if (this.loX < 0 || this.loX > width) {
        this.speedX = -this.speedX;
      }
      if (this.loY < 0 || this.loY > height) {
        this.speedY = -this.speedY;
      }
    }
  
    ddParametricDisplay() {
      for (let i = 0; i < 100; i++) {
        let t = frameCount * 0.15 + this.offset * 100;
        line(
          this.x1(t + i),
          this.y1(t + i),
          this.x2(t + i),
          this.y2(t + i)
        )
      }
    }
  
    x1(t) {
      return sin(t / this.loX) * 125 + sin(t / this.loX) * 125 + sin(t / this.loX) * 125;
    }
  
    y1(t) {
      return cos(t / this.loY) * 125 + cos(t / this.loY) * 125 + cos(t / this.loY) * 125;
    }
  
    x2(t) {
      return sin(t / this.loX) * 125 + sin(t / this.loX) * 125 + sin(t / this.loX) * 125;
    }
  
    y2(t) {
      return cos(t / this.loY) * 125 + cos(t / this.loY) * 125 + cos(t / this.loY) * 125;
    }
  }