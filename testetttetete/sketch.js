function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  fill(255, 255, 255);
  circle(200, 200, 100);
  circle(100, 150, 100);
  fill(255, 0, 0);
  stroke(200, 0, 100);
  strokeWeight(7);
  triangle(100, 300, 250, 300, 200, 120);
}
