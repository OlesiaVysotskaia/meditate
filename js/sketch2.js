function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("canvas");
}

function draw() {
  background('#50CE8A');

  noFill()
  stroke(255)

  for (let i = 0; i < 10; i++){

  randomSeed(10);
  translate(random(width) + 10, random(height) + 10);
  for (let i = 0; i < 10; i++) {
    ellipse(mouseX, mouseY, 30, 30);
    rotate(2 * PI / 10);
  }
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }


}
