var xJager = 50;
var yJager = 50;
var xProoi = 800;
var yProoi = 175;

function setup() {
 canvas = createCanvas(1000,400);
 canvas.parent('processing');
 textFont("Verdana");
 textSize(140);
 noStroke();
 frameRate(50);
}

function draw() {
 background('olive');
  
 

 // Verplaats de jager
 if (keyIsDown(LEFT_ARROW)) {
    xJager -= 5;
 }
 if (keyIsDown(RIGHT_ARROW)) {
    xJager += 5;
 }
 if (keyIsDown(UP_ARROW)) {
    yJager -= 5;
 }
 if (keyIsDown(DOWN_ARROW)) {
    yJager += 5;
 }
  
 // Verplaats de prooi
 if (keyIsDown(65)) { // Links
    xProoi -= 5;
 }
 if (keyIsDown(68)) { // Rechts
    xProoi += 5;
 }
 if (keyIsDown(87)) { // Boven
    yProoi -= 5;
 }
 if (keyIsDown(83)) { // Onder
    yProoi += 5;
 }
  
 // Bewaar de positie van de jager en de prooi binnen het canvas
 xJager = constrain(xJager,0,width - 100);
 yJager = constrain(yJager,0,height - 100);
 xProoi = constrain(xProoi,0,width - 75);
 yProoi = constrain(yProoi,0,height - 50);
  
 // Kijken of de jager de prooi raakt
 if (xJager >= xProoi && xJager <= xProoi + 75 && yJager >= yProoi && yJager <= yProoi + 50) {
    fill('chartreuse');
 }
 else {
    fill('darkkhaki');
 }
 rect(xProoi,yProoi,75,50);
 fill('moccasin');
 rect(xJager,yJager,100,100);   

 // Als de jager de prooi raakt, stop met tekenen en roep eindScherm() aan
if (xJager >= xProoi && xJager <= xProoi + 75 && yJager >= yProoi && yJager <= yProoi + 50) {
  noLoop();
  eindScherm();
 }
}

function eindScherm() {
 background('white');
 fill('black');
 text("GEVANGEN!",75,250);
 noLoop();
}