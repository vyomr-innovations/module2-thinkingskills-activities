
"use client";

const mySketch = (p) => {
  let angle1 = 0;
  let len1 = 200;
  let angle2 = 0;
  let len2 = 150;
  let o = 1;

  let blocks = [];
  let heldBlock = null;
  let targetZones = [];
  let score = 0;
  let message = "";
  let messageTimer = 0;
  let bgImage;
  let alerted = false; // To ensure the alert only triggers once

  p.preload = () => {
    bgImage = p.loadImage('/assets/L3-C11-A5/background.jpg'); // Load background image
  };

  p.setup = () => {
    p.createCanvas(900, 600); // Canvas size
    p.noCursor();

    // Add more blocks and target zones
    blocks = [
      { x: -100, y: 70, color: 'red', held: false },
      { x: 120, y: -40, color: 'blue', held: false },
      { x: -70, y: -100, color: 'green', held: false },
      { x: 80, y: 60, color: 'yellow', held: false },
      { x: -150, y: -50, color: 'purple', held: false },
    ];

    targetZones = [
      { x: -200, y: 150, color: 'red' },
      { x: 200, y: 150, color: 'blue' },
      { x: 0, y: 200, color: 'green' },
      { x: 150, y: -150, color: 'yellow' },
      { x: -150, y: -200, color: 'purple' },
    ];
  };

  p.pos = () => {
    let p1 = [len1 * p.cos(angle1), len1 * p.sin(angle1)];
    let p2 = [
      p1[0] + len2 * p.cos(angle1 + angle2),
      p1[1] + len2 * p.sin(angle1 + angle2),
    ];
    return [p1, p2];
  };

  p.a1 = (r, phi, o = 1) => {
    if (o == 1) {
      return (
        p.acos(-(len2 * len2 - len1 * len1 - r * r) / (2 * len1 * r)) + phi
      );
    } else {
      return (
        -p.acos(-(len2 * len2 - len1 * len1 - r * r) / (2 * len1 * r)) + phi
      );
    }
  };

  p.a2 = (r, phi, o = 1) => {
    if (o == 1) {
      return -p.acos((r * r - len1 * len1 - len2 * len2) / (2 * len1 * len2));
    } else {
      return p.acos((r * r - len1 * len1 - len2 * len2) / (2 * len1 * len2));
    }
  };

  p.draw = () => {
    // Background with the image
    p.image(bgImage, 0, 0, p.width, p.height);
  
    // Draw the robotic arm
    let [p1, p2] = p.pos();
    p.strokeWeight(6); // Arm thickness
    p.stroke(0); // Black arm lines
  
    // Base to first joint
    p.line(
      p.width / 2,
      p.height / 2,
      p.width / 2 + p1[0],
      p.height / 2 + p1[1]
    );
  
    // First joint to second joint
    p.line(
      p.width / 2 + p1[0],
      p.height / 2 + p1[1],
      p.width / 2 + p2[0],
      p.height / 2 + p2[1]
    );
  
    // Draw joints with white fill and black outline
    p.fill(255); // White fill
    p.stroke(1); // Black outline
    p.circle(p.width / 2, p.height / 2, 15); // Base joint
    p.circle(p.width / 2 + p1[0], p.height / 2 + p1[1], 15); // First joint
    p.circle(p.width / 2 + p2[0], p.height / 2 + p2[1], 15); // End effector
  
    // Draw target zones
    for (let zone of targetZones) {
      p.fill(zone.color);
      p.rect(
        p.width / 2 + zone.x - 30,
        p.height / 2 + zone.y - 30,
        60,
        60
      );
    }
  
    // Draw blocks
    for (let block of blocks) {
      if (!block.held) {
        p.fill(block.color);
        p.ellipse(
          p.width / 2 + block.x,
          p.height / 2 + block.y,
          30,
          30
        );
      } else {
        block.x = p2[0];
        block.y = p2[1];
      }
    }
  
    // Calculate angles
    let pVec = p.createVector(p.mouseX - p.width / 2, p.mouseY - p.height / 2);
    let r = p.constrain(pVec.mag(), len1 - len2, len1 + len2);
    let phi = pVec.heading();
  
    angle1 = p.a1(r, phi, o);
    angle2 = p.a2(r, phi, o);
  
    // Display success message
    if (messageTimer > 0) {
      p.fill(50, 200, 50);
      p.strokeWeight(1); // Thin black border
      p.textSize(22);
      p.textAlign(p.CENTER);
      p.text(message, p.width / 2, 40);
      messageTimer--;
    }
  
    // Handle block placement
    if (heldBlock) {
      for (let zone of targetZones) {
        if (
          p.abs(heldBlock.x - zone.x) < 30 &&
          p.abs(heldBlock.y - zone.y) < 30 &&
          heldBlock.color === zone.color
        ) {
          score++;
          message = `Block placed successfully in the ${zone.color} zone!`;
          messageTimer = 100;
          blocks = blocks.filter((b) => b !== heldBlock);
          heldBlock = null;
  
          break;
        }
      }
    }
  
    // Check for winning condition
    if (blocks.length === 0 && !alerted) {
      alerted = true; // Ensure the alert is shown only once
      alert("Congratulations! You've placed all the blocks in the correct zones!");
    }
  };
  

  p.mousePressed = () => {
    o = 1 - o;

    if (!heldBlock) {
      let [_, p2] = p.pos();
      for (let block of blocks) {
        if (p.dist(p2[0], p2[1], block.x, block.y) < 15 && !block.held) {
          block.held = true;
          heldBlock = block;
          break;
        }
      }
    } else {
      heldBlock.held = false;
      heldBlock = null;
    }
  };
};

export default mySketch;
