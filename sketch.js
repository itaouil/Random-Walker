// Walker Position
var x;
var y;

// Setup Function
function setup() {
  // Create canvas and set background color
  createCanvas(600, 600);
  background(51);

  // Set walking starting position
  x = 200;
  y = 200;
}

// Draw Function
function draw() {
  stroke(255, 100);
  strokeWeight(2);
  point(x,y);

  // Random walk
  var r = floor(random(4));

  // Directions
  switch (r) {
    case 0:
      x = x + 1;
      break;
    case 1:
      x = x - 1;
      break;
    case 2:
      y = y + 1;
      break;
    case 3:
      y = y - 1;
      break;
  }

}
