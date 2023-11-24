function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('pink');
  triangle(450,0,0,225,450,450);
  
  strokeWeight(5);
  stroke('purple');
  fill('purple');
  beginShape();
  vertex(0,450);
  vertex(0,0);
  vertex(450,225);
  vertex(450,225);
  endShape(CLOSE);

 
}
