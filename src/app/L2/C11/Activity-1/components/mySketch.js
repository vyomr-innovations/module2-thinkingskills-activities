
"use client";


const mySketch = (p) => {
  let turtle;
  let eggs = [];
  let score = 0;
  let gameState = "playing";
  let showHints = false;
  let hintText = "";
  let beachGif, turtleImg, eggImg;

  p.preload = () => {
    beachGif = p.loadImage("/assets/L2-C11-A1/beach.jpg");
    turtleImg = p.loadImage("/assets/L2-C11-A1/turtle.png");
    eggImg = p.loadImage("/assets/L2-C11-A1/egg.png");
  };

  p.setup = () => {
    p.createCanvas(800, 600);
    turtle = new Turtle(p.width / 2, p.height / 2);
    for (let i = 0; i < 3; i++) {
      eggs.push(new Egg(p.random(p.width), p.random(p.height)));
    }
  };

  p.draw = () => {
    p.image(beachGif, 0, 0, p.width, p.height);

    p.fill(0);
    p.textSize(16);
    p.text(`Eggs Found: ${score}/3`, p.width - 150, 20);

    if (showHints && hintText) {
      p.fill(255, 255, 255, 200);
      const hintWidth = 200;
      const hintHeight = 50;
      p.rect(
        p.width - hintWidth - 20,
        p.height - hintHeight - 20,
        hintWidth,
        hintHeight,
        10
      );
      p.fill(0);
      p.textSize(14);
      p.textAlign(p.LEFT, p.CENTER);
      p.text(hintText, p.width - hintWidth - 15, p.height - 100 / 2 - 20, hintWidth, 50);
    }

    if (gameState === "playing") {
      turtle.update();
      turtle.display();

      for (let egg of eggs) {
        egg.display();
      }

      if (score === 3) {
        gameState = "gameover";
      }
    } else if (gameState === "gameover") {
      p.fill(0);
      p.textSize(24);
      p.textAlign(p.CENTER, p.CENTER);
      p.text("Congratulations!", p.width / 2, p.height / 2);
    }
  };

  class Turtle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 90;
      this.speed = 3;
    }

    update() {
      if (p.keyIsDown(p.LEFT_ARROW)) this.x -= this.speed;
      if (p.keyIsDown(p.RIGHT_ARROW)) this.x += this.speed;
      if (p.keyIsDown(p.UP_ARROW)) this.y -= this.speed;
      if (p.keyIsDown(p.DOWN_ARROW)) this.y += this.speed;

      this.x = p.constrain(this.x, 0, p.width);
      this.y = p.constrain(this.y, 0, p.height);
    }

    display() {
      p.image(turtleImg, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    }

    dig() {
      for (let i = 0; i < eggs.length; i++) {
        let d = p.dist(this.x, this.y, eggs[i].x, eggs[i].y);
        if (d < this.size / 2 + eggs[i].size / 2 && !eggs[i].found) {
          eggs[i].found = true;
          score++;
          hintText = "";
          return true;
        }
      }
      return false;
    }

    giveHint() {
      let nearestEgg = null;
      let shortestDistance = Infinity;

      for (let egg of eggs) {
        if (!egg.found) {
          let d = p.dist(this.x, this.y, egg.x, egg.y);
          if (d < shortestDistance) {
            shortestDistance = d;
            nearestEgg = egg;
          }
        }
      }

      if (nearestEgg) {
        let direction = "";
        if (nearestEgg.x > this.x) direction += "Right ";
        else if (nearestEgg.x < this.x) direction += "Left ";

        if (nearestEgg.y > this.y) direction += "Down";
        else if (nearestEgg.y < this.y) direction += "Up";

        hintText = `Hint: Move ${direction.trim()} to find the nearest egg!`;
      } else {
        hintText = "No more eggs to find!";
      }
    }
  }

  class Egg {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 50;
      this.found = false;
    }

    display() {
      if (this.found) {
        p.image(eggImg, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size + 10);
      }
    }
  }

  p.keyPressed = () => {
    if (p.keyCode === 32 && gameState === "playing") {
      let found = turtle.dig();
      if (showHints && !found) {
        turtle.giveHint();
      }
    }

    if (p.key === "h" || p.key === "H") {
      showHints = !showHints;
      if (!showHints) hintText = "";
    }
  };
};

export default mySketch;
