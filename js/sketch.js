// function setup() {
//     // Создаем канвас, как весь браузер
//     let myCanvas = createCanvas(windowWidth, windowHeight);
//     // прикрепляем канвас в заранее созданный элемент
//     myCanvas.parent("canvas");
//     background('#50CE8A');
// }
//
// function draw() {
//     fill(255, 15);
//     noStroke();
//     rect(0, 0, windowWidth, windowHeight);
//
//     stroke(0);
//     if (mouseIsPressed) {
//         fill(0);
//     } else {
//         fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
// }
//
// // Изменяем размер канваса, если изменился размер окна
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

function setup() {

  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("canvas");
  background('#50CE8A');
}

function draw() {
  fill(80,206,138, 15, 15);
  noStroke();
  rect(0, 0, windowWidth, windowHeight);

  makeCircle(20,30)
   makeCircle(-20,-30)
  makeCircle(0,10)


}

function makeCircle(x = 100, y = 200) {
  fill(255)
  ellipse(mouseX + random(x, y) * 1, mouseY + random(x, y) * 1, 20);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
