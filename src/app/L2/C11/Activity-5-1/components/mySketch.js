
"use client";

const mySketch = (p) => {
  let car;
  let parkingSpot;
  let obstacles = [];
  let isParked = false;
  let gameOver = false;
  let hitObstacle = false;
  let autoNavigate = false;

  let roadImg;
  let carImg;
  let obstacleImg;

  p.preload = () => {
    roadImg = p.loadImage("/assets/L2-C11-A5-2/road.jpg");
    carImg = p.loadImage("/assets/L2-C11-A5-2/car.png");
    obstacleImg = p.loadImage("/assets/L2-C11-A5-2/wall.png");
  };

  p.setup = () => {
    p.createCanvas(600, 400);
    startGame();
  };

  p.draw = () => {
    p.background(roadImg);

    if (gameOver) {
      p.fill(hitObstacle ? p.color(255, 0, 0) : p.color(0, 255, 0));
      p.textSize(32);
      p.textAlign(p.CENTER, p.TOP);
      // p.textAlign(p.CENTER, 100);
      p.text(
        hitObstacle ? "Oops! You hit an obstacle." : "Yeh! Successfully parked!",
        p.width / 2,
        40
        // p.height / 2,
      );
      return;
    }

    parkingSpot.display();

    for (let obs of obstacles) obs.display();

    car.update();
    car.display();

    if (car.isInParkingSpot(parkingSpot)) {
      isParked = true;
      gameOver = true;
    }

    for (let obs of obstacles) {
      if (car.collidesWithObstacle(obs)) {
        hitObstacle = true;
        gameOver = true;
        break;
      }
    }

    if (autoNavigate) car.autoNavigate(parkingSpot, obstacles);
  };

  class Car {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 100;
      this.height = 50;
      this.speed = 2;
    }

    update() {
      if (!autoNavigate) {
        if (p.keyIsDown(p.LEFT_ARROW)) this.x -= this.speed;
        if (p.keyIsDown(p.RIGHT_ARROW)) this.x += this.speed;
        if (p.keyIsDown(p.UP_ARROW)) this.y -= this.speed;
        if (p.keyIsDown(p.DOWN_ARROW)) this.y += this.speed;
      }
      this.x = p.constrain(this.x, 0, p.width - this.width);
      this.y = p.constrain(this.y, 0, p.height - this.height);
    }

    display() {
      p.image(carImg, this.x, this.y, this.width, this.height);
    }

    isInParkingSpot(spot) {
      const xOverlap = Math.max(0, Math.min(this.x + this.width, spot.x + spot.w) - Math.max(this.x, spot.x));
      const yOverlap = Math.max(0, Math.min(this.y + this.height, spot.y + spot.h) - Math.max(this.y, spot.y));
      const overlapArea = xOverlap * yOverlap;
      return overlapArea >= 0.5 * (spot.w * spot.h);
    }

    collidesWithObstacle(obs) {
      return (
        this.x + this.width > obs.x &&
        this.x < obs.x + obs.w &&
        this.y + this.height > obs.y &&
        this.y < obs.y + obs.h
      );
    }

    autoNavigate(parkingSpot, obstacles) {
      const targetX = parkingSpot.x + parkingSpot.w / 2;
      const targetY = parkingSpot.y + parkingSpot.h / 2;

      if (this.x < targetX) {
        this.x += this.speed;
      } else if (this.x > targetX) {
        this.x -= this.speed;
      }
      console.log(this.x)
      if(this.x < 350){
        if (this.y < targetY + 40) {
          this.y += this.speed;
        }       
      } else {
        this.y -= this.speed;
      }
  
      // if (this.x < targetX) this.x += this.speed;
      // else if (this.x > targetX) this.x -= this.speed;

      // if (this.y < targetY) this.y += this.speed;
      // else if (this.y > targetY) this.y -= this.speed;
    }
  }

  class ParkingSpot {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }

    display() {
      p.fill(200, 200, 0, 100);
      p.rect(this.x, this.y, this.w, this.h);
    }
  }

  class Obstacle {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }

    display() {
      p.image(obstacleImg, this.x, this.y, this.w, this.h);
    }
  }

  const startGame = () => {
    car = new Car(80, 150);
    parkingSpot = new ParkingSpot(450, 150, 100, 50);

    obstacles = [
      new Obstacle(350, 100, 40, 40),
      new Obstacle(550, 100, 40, 40),
      new Obstacle(350, 270, 40, 40),
      new Obstacle(550, 250, 40, 40),
      new Obstacle(450, 50, 40, 40),
      new Obstacle(220, 80, 40, 40),
      new Obstacle(270, 155, 40, 40),
    ];

    isParked = false;
    gameOver = false;
    hitObstacle = false;
    autoNavigate = false;
  };

  p.keyPressed = () => {
    if (p.key === "s" || p.key === "S") autoNavigate = true;
    if (p.key === "r" || p.key === "R") startGame();
  };
};

export default mySketch;
