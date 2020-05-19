let d = 0;
let speed = 0.05;
let col = {
  r: 20,
  g: 20,
  b: 255,
}


function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("canvas");
}

function draw() {
  fill(80,206,138, 15, 15);
  noStroke();
  rect(0, 0, windowWidth, windowHeight);

  if (mouseIsPressed) {
   col = {r: 255,
  g: 244,
  b: 101,};
  } else {
    col = {r: 255,
  g: 255,
  b: 225,};
  }
  fill(col.r,col.g,col.b);

  ellipse(mouseX,mouseY,60);

  randomSeed(20);
  for (let i = 0; i < 20; i++) {


    makeCircles(random(width), random(height));
  }

}

function makeCircles(x = 0, y = 0) {

  noFill()
  stroke('white')
  ellipse(x, y, d, d)

  if (d > 100) {
    speed = -0.03;
  }

  if (d < 0) {
    speed = 0.02
  }

  d = d + speed;

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
