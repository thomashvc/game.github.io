function setup() {
  canvas = createCanvas(1200, 300);
  canvas.parent('processing');
  noStroke();
  noLoop();
}

function draw() {
  background('orange');
  fill('wheat');
  rect(0, 250, width, height - 250);
  // translate(125, 0); // Comment deze regel uit

  for (var n = 0; n < 6; n++) { // Aangepaste for-loop voor 6 iteraties
    tekenHuis();
    tekenBoom(n);
    translate(200, 0);
  }
}

function tekenHuis() {
  push();
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(0, 160, 100, 100);
  fill('gray');
  triangle(0, 160, 100, 160, 50, 80);
  noStroke();
  rect(20, 210, 30, 50);
  pop();
}

function tekenBoom(x) {
  push();
  noStroke();
  fill('sienna');
  rect(80, 150, 40, 130);
  fill('olive');
  ellipse(100, 170 - 15 * x, 60 + 10 * x, 100 + 20 * x);
  pop();
}