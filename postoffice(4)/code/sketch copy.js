/*

조작법 :
도장을 한 번 클릭하면, 도장을 집습니다.
도장을 든 채로 핑크색 잉크 혹은 파란색 잉크를 찍으면 해당 잉크 색 도장을 찍습니다.
올바르게 ‘Hogwarts’라고 쓰인 편지, 그리고 한국에서도 지망생이 있기 때문에, ‘호그와트’도 올바른 편지로 간주합니다.
이외에도 ‘Ho9warts’, ‘Hogwartz’등 다른 변형들이 존재하는데, 이는 모두 핑크 잉크를 찍어야 합니다.


*/





let num = 10;
let blueInk;
let pinkInk;
let nanum;
let harry;
let stampHold;
let stampX;
let stampY;
let stamp;
let content = 0;
let r, g, b;
let okay = true;
let count = 0;
let stage = 0;
let timeLimit = 500;
let now;

function preload() {
  nanum = loadFont("assets/NanumSquareB.otf");
  harry = loadFont("assets/harry.ttf");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (stage) {
    case 0: // intro
      background("#827b5c");
      noStroke();
      fill("#ffffff");
      textAlign(CENTER);
      textFont(harry);
      textSize(50);
      text("HELP DOBBY!", 250, 150);
      textFont(nanum);
      textSize(13);
      text(
        "도비는 승승장구해서 호그와트 입학사정관이 되었어요.\n그런데 이런! 부엉이들이 실수를 했는지 엉뚱한 학교의 지원서들도 갖고 왔네요.\n마법세계는 Chat GPT를 배척하는 바람에 여러분이 수동으로 분류를 해야합니다\n\n올바른 지원서에는 파란 잉크로 도장을 찍고,\n잘못 온 지원서에는 빨간 잉크로 도장을 찍어주세요.",
        250,
        200
      );
      text("도비를 도와주러 가볼까요? 아무 키나 누르면 시작합니다.", 250, 330);
      fill(227, 187, 159);
      ellipse(250, 530, 300, 250);
      triangle(250, 430, 50, 460, -40, 550);
      triangle(250, 430, 450, 460, 540, 550);
      fill(220, 220, 220);
      ellipse(180, 500, 60, 60);
      ellipse(320, 500, 60, 60);
      stroke(156, 129, 110);
      strokeWeight(5);
      line(180, 460, 320, 460);
      line(200, 440, 300, 440);
      stroke(104, 145, 86);

      strokeWeight(5);
      fill(64, 77, 60);
      ellipse(180, 490, 35, 35);
      ellipse(320, 490, 35, 35);
      if (keyIsPressed) {
        stage = 1;
      }
      break;

    case 1: // ingame
      if (timeLimit <= 100) {
        scale(random(1, 1.01));
        translate(-5, -5);
      }
      background(74, 66, 58);

      noStroke();
      fill("rgba(0, 51, 102, 0.5)");
      if (timeLimit <= 100) {
        fill(random(0, 100), random(0, 100), random(0, 100));
      }
      textSize(80);
      text(count, 380, 100);
      textAlign(CENTER);

      for (j = 0; j < count; j++) {
        push();
        translate(100, 100);
        fill("#c9c19f");
        strokeWeight(5);
        stroke("#c9a765");
        rotate(-(PI / 40) * (j - 7));
        rect(50 - 10 * j, 20 + 18 * j, 250, 200);
        // rect(50,50+20*i,250,200);
        pop();
      }

      for (i = 0; i < num; i++) {
        push();
        translate(0, 10);
        fill("rgba(14, 35, 56, 0.5)");
        noStroke();
        rotate((PI / -40) * (i - 7));
        rect(150 - 10 * i, 20 + 18 * i, 250, 200);
        pop();

        push();
        fill("#fff5cc");
        strokeWeight(5);
        stroke("#ffd480");
        rotate((PI / -40) * (i - 7));
        rect(150 - 10 * i, 20 + 18 * i, 250, 200);
        // rect(50,50+20*i,250,200);
        pop();
      }

      // stamp (still)
      noStroke();

      fill("rgba(14, 35, 56, 0.5)");
      rect(400, 150 + 2, 80 + 10, 60 + 10, 10);
      push();
      if (mouseX >= 400 && mouseX <= 470 && mouseY >= 80 && mouseY <= 220) {
        stroke("rgba(153, 117, 87, 0.5)");
        strokeWeight(3);
        scale(1.1);
        translate(-35, -10);
      }
      fill("#006666");
      rect(400 - 2, 150, 80 + 4, 60 + 10, 10);
      fill("#603f1f");
      rect(400, 150, 80, 60, 10);
      fill("#2e2e1f");
      ellipse(400 + 40, 150, 40, 80);
      fill("#603f1f");
      ellipse(400 + 40, 150 - 20, 50, 50);
      ellipse(400 + 40, 150 - 20, 50, 50);
      stroke("#ecd9c5");
      strokeWeight(3);
      noFill();
      ellipse(400 + 35, 150 - 25, 20, 20);
      pop();

      // ink 1
      noStroke();
      strokeWeight(3);
      // fill("rgba(0, 51, 102, 0.5)");
      fill("rgba(14, 35, 56, 0.5)");

      rect(400, 250 + 2, 80 + 10, 60 + 10, 10);
      fill("#006666");
      rect(400 - 2, 250, 80 + 4, 60 + 10, 10);
      fill(32, 42, 46);
      rect(400, 250, 80, 60, 10);
      fill(201, 52, 95);
      rect(400 + 4, 250 + 2, 72, 54, 8);

      // ink 2
      noStroke();
      strokeWeight(3);
      fill("rgba(14, 35, 56, 0.5)");
      rect(400, 330 + 2, 80 + 10, 60 + 10, 10);
      fill("#006666");
      rect(400 - 2, 330, 80 + 4, 60 + 10, 10);
      fill(32, 42, 46);
      rect(400, 330, 80, 60, 10);
      fill(39, 132, 161);
      rect(400 + 4, 330 + 2, 72, 54, 8);

      // press
      if (mouseX >= 400 && mouseX <= 470 && mouseY >= 80 && mouseY <= 220) {
        if (mouseIsPressed) {
          stampHold = !stampHold;
        }
      }

      if (stampHold) noCursor();
      if (!stampHold) cursor();

      if (
        stampHold &&
        mouseX >= 400 &&
        mouseX <= 480 &&
        mouseY >= 250 &&
        mouseY <= 310
      ) {
        if (mouseIsPressed) {
          if (!stamp) {
            blueInk = false;
            pinkInk = true;
          }
          fill("rgba(255, 166, 215, 0.7)");
          ellipse(random(390, 410), random(220, 250), 10, 10);
          ellipse(random(480, 490), random(310, 320), 10, 10);
          fill("rgba(255, 166, 215, 0.3)");
          rect(400, 250, 80, 60, 10);
        }
      }

      if (
        stampHold &&
        mouseX >= 400 &&
        mouseX <= 480 &&
        mouseY >= 330 &&
        mouseY <= 390
      ) {
        if (mouseIsPressed) {
          if (!stamp) {
            blueInk = true;
            pinkInk = false;
          }
          fill("rgba(166, 184, 255, 0.7)");
          ellipse(random(390, 410), random(330, 320), 10, 10);
          ellipse(random(480, 490), random(390, 400), 10, 10);
          fill("rgba(166, 184, 255, 0.3)");
          rect(400, 330, 80, 60, 10);
        }
      }

      // new letter system

      
      switch (content) {
        case 0:
          push();

          if (
            mouseX >= 150 - 10 * 9 &&
            mouseX <= 150 - 10 * 9 + 280 &&
            mouseY >= 20 + 18 * 9 - 60 &&
            mouseY <= 20 + 18 * 9 - 60 + 230
          ) {
            if (mouseIsPressed) {
              if (blueInk) {
                okay = true;
                  translate(0, (frameCount-now)*2);
              } else if (pinkInk == false && blueInk == false) {
                okay = true;
              } else {
                okay = false;
              }
            }
          }

          fill("#fff5cc");
          strokeWeight(5);
          stroke("#ffd480");
          rotate((PI / -40) * (9 - 7));
          rect(150 - 10 * 9, 20 + 18 * 9, 250, 200);
          textAlign(CENTER);
          noStroke();
          fill("black");
          textSize(25);
          textFont(harry);
          text("Hogwarts", 150 - 10 * 9 + 50, 20 + 18 * 9 + 50, 30);
          fill(r, g, b);
          stroke(230, 230, 230);
          rect(150 - 10 * 9 + 190, 20 + 18 * 9 + 20, 40, 50);
          noStroke();
          fill(230, 230, 230);
          textSize(30);
          text("H", 150 - 10 * 9 + 190 + 20, 20 + 18 * 9 + 20 + 30);
          pop();

          noFill();
          strokeWeight(10);
          if (pinkInk) {
            stroke(186, 0, 59);
            line(stampX - 25, stampY - 25, stampX + 25, stampY + 25);
            line(stampX - 25, stampY + 25, stampX + 25, stampY - 25);
          } else if (blueInk) {
            stroke(0, 129, 161);
            ellipse(stampX, stampY, 50, 50);
          } else {
            noStroke();
          }

          break;
        case 1:
          push();

          if (
            mouseX >= 150 - 10 * 9 &&
            mouseX <= 150 - 10 * 9 + 280 &&
            mouseY >= 20 + 18 * 9 - 60 &&
            mouseY <= 20 + 18 * 9 - 60 + 230
          ) {
            if (mouseIsPressed) {
              if (blueInk) {
                okay = true;
                  translate(0, (frameCount-now)*2);
              } else if (pinkInk == false && blueInk == false) {
                okay = true;
              } else {
                okay = false;
              }
            }
          }

          fill("#fff5cc");
          strokeWeight(5);
          stroke("#ffd480");
          rotate((PI / -40) * (9 - 7));
          rect(150 - 10 * 9, 20 + 18 * 9, 250, 200);
          textAlign(CENTER);
          noStroke();
          fill("black");
          textSize(25);
          textFont(nanum);
          text("호그와트", 150 - 10 * 9 + 50, 20 + 18 * 9 + 50, 30);
          fill(r, g, b);
          stroke(230, 230, 230);
          rect(150 - 10 * 9 + 190, 20 + 18 * 9 + 20, 40, 50);
          noStroke();
          fill(230, 230, 230);
          textSize(30);
          text("호", 150 - 10 * 9 + 190 + 20, 20 + 18 * 9 + 20 + 35);
          pop();

          noFill();
          strokeWeight(10);
          if (pinkInk) {
            stroke(186, 0, 59);
            line(stampX - 25, stampY - 25, stampX + 25, stampY + 25);
            line(stampX - 25, stampY + 25, stampX + 25, stampY - 25);
          } else if (blueInk) {
            stroke(0, 129, 161);
            ellipse(stampX, stampY, 50, 50);
          } else {
            noStroke();
          }

          break;
        case 2:
          push();

          if (
            mouseX >= 150 - 10 * 9 &&
            mouseX <= 150 - 10 * 9 + 280 &&
            mouseY >= 20 + 18 * 9 - 60 &&
            mouseY <= 20 + 18 * 9 - 60 + 230
          ) {
            if (mouseIsPressed) {
              if (pinkInk) {
                okay = true;
                  translate(0, (frameCount-now)*2);
              } else if (pinkInk == false && blueInk == false) {
                okay = true;
              } else {
                okay = false;
              }
            }
          }

          fill("#fff5cc");
          strokeWeight(5);
          stroke("#ffd480");
          rotate((PI / -40) * (9 - 7));
          rect(150 - 10 * 9, 20 + 18 * 9, 250, 200);
          textAlign(CENTER);
          noStroke();
          fill("black");
          textSize(25);
          textFont(harry);
          text("Hoguwarts", 150 - 10 * 9 + 50, 20 + 18 * 9 + 50, 30);
          fill(r, g, b);
          stroke(230, 230, 230);
          rect(150 - 10 * 9 + 190, 20 + 18 * 9 + 20, 40, 50);
          noStroke();
          fill(230, 230, 230);
          textSize(30);
          text("H", 150 - 10 * 9 + 190 + 20, 20 + 18 * 9 + 20 + 35);
          pop();

          noFill();
          strokeWeight(10);
          if (pinkInk) {
            stroke(186, 0, 59);
            line(stampX - 25, stampY - 25, stampX + 25, stampY + 25);
            line(stampX - 25, stampY + 25, stampX + 25, stampY - 25);
          } else if (blueInk) {
            stroke(0, 129, 161);
            ellipse(stampX, stampY, 50, 50);
          } else {
            noStroke();
          }

          break;
        case 3:
          push();
          if (
            mouseX >= 150 - 10 * 9 &&
            mouseX <= 150 - 10 * 9 + 280 &&
            mouseY >= 20 + 18 * 9 - 60 &&
            mouseY <= 20 + 18 * 9 - 60 + 230
          ) {
            if (mouseIsPressed) {
              if (pinkInk) {
                okay = true;
                  translate(0, (frameCount-now)*2);
              } else if (pinkInk == false && blueInk == false) {
                okay = true;
              } else {
                okay = false;
              }
            }
          }

          fill("#fff5cc");
          strokeWeight(5);
          stroke("#ffd480");
          rotate((PI / -40) * (9 - 7));
          rect(150 - 10 * 9, 20 + 18 * 9, 250, 200);
          textAlign(CENTER);
          noStroke();
          fill("black");
          textSize(25);
          textFont(harry);
          text("Ho9warts", 150 - 10 * 9 + 50, 20 + 18 * 9 + 50, 30);
          fill(r, g, b);
          stroke(230, 230, 230);
          rect(150 - 10 * 9 + 190, 20 + 18 * 9 + 20, 40, 50);
          noStroke();
          fill(230, 230, 230);
          textSize(30);
          text("H", 150 - 10 * 9 + 190 + 20, 20 + 18 * 9 + 20 + 35);
          pop();

          noFill();
          strokeWeight(10);
          if (pinkInk) {
            stroke(186, 0, 59);
            line(stampX - 25, stampY - 25, stampX + 25, stampY + 25);
            line(stampX - 25, stampY + 25, stampX + 25, stampY - 25);
          } else if (blueInk) {
            stroke(0, 129, 161);
            ellipse(stampX, stampY, 50, 50);
          } else {
            noStroke();
          }

          break;
        case 4:
          push();
          if (
            mouseX >= 150 - 10 * 9 &&
            mouseX <= 150 - 10 * 9 + 280 &&
            mouseY >= 20 + 18 * 9 - 60 &&
            mouseY <= 20 + 18 * 9 - 60 + 230
          ) {
            if (mouseIsPressed) {
              if (pinkInk) {
                okay = true;
                  translate(0, (frameCount-now)*2);
              } else if (pinkInk == false && blueInk == false) {
                okay = true;
              } else {
                okay = false;
              }
            }
          }

          fill("#fff5cc");
          strokeWeight(5);
          stroke("#ffd480");
          rotate((PI / -40) * (9 - 7));
          rect(150 - 10 * 9, 20 + 18 * 9, 250, 200);
          textAlign(CENTER);
          noStroke();
          fill("black");
          textSize(25);
          textFont(harry);
          text("Hogwartz", 150 - 10 * 9 + 50, 20 + 18 * 9 + 50, 30);
          fill(r, g, b);
          stroke(230, 230, 230);
          rect(150 - 10 * 9 + 190, 20 + 18 * 9 + 20, 40, 50);
          noStroke();
          fill(230, 230, 230);
          textSize(30);
          text("H", 150 - 10 * 9 + 190 + 20, 20 + 18 * 9 + 20 + 35);
          pop();

          noFill();
          strokeWeight(10);
          if (pinkInk) {
            stroke(186, 0, 59);
            line(stampX - 25, stampY - 25, stampX + 25, stampY + 25);
            line(stampX - 25, stampY + 25, stampX + 25, stampY - 25);
          } else if (blueInk) {
            stroke(0, 129, 161);
            ellipse(stampX, stampY, 50, 50);
          } else {
            noStroke();
          }

          break;
        case 5:
          push();
          if (
            mouseX >= 150 - 10 * 9 &&
            mouseX <= 150 - 10 * 9 + 280 &&
            mouseY >= 20 + 18 * 9 - 60 &&
            mouseY <= 20 + 18 * 9 - 60 + 230
          ) {
            if (mouseIsPressed) {
              if (pinkInk) {
                okay = true;
                  translate(0, (frameCount-now)*2);
              } else if (pinkInk == false && blueInk == false) {
                okay = true;
              } else {
                okay = false;
              }
            }
          }
          fill("#fff5cc");
          strokeWeight(5);
          stroke("#ffd480");
          rotate((PI / -40) * (9 - 7));
          rect(150 - 10 * 9, 20 + 18 * 9, 250, 200);
          textAlign(CENTER);
          noStroke();
          fill("black");
          textSize(25);
          textFont(harry);
          text("Hogwhats", 150 - 10 * 9 + 50, 20 + 18 * 9 + 50, 30);
          fill(r, g, b);
          stroke(230, 230, 230);
          rect(150 - 10 * 9 + 190, 20 + 18 * 9 + 20, 40, 50);
          noStroke();
          fill(230, 230, 230);
          textSize(30);
          text("H", 150 - 10 * 9 + 190 + 20, 20 + 18 * 9 + 20 + 35);
          pop();

          noFill();
          strokeWeight(10);
          if (pinkInk) {
            stroke(186, 0, 59);
            line(stampX - 25, stampY - 25, stampX + 25, stampY + 25);
            line(stampX - 25, stampY + 25, stampX + 25, stampY - 25);
          } else if (blueInk) {
            stroke(0, 129, 161);
            ellipse(stampX, stampY, 50, 50);
          } else {
            noStroke();
          }
          break;
        default:
      }

      // stamping
      if (
        stampHold &&
        mouseX >= 150 - 10 * 9 &&
        mouseX <= 150 - 10 * 9 + 280 &&
        mouseY >= 20 + 18 * 9 - 60 &&
        mouseY <= 20 + 18 * 9 - 60 + 230
      ) {
        if (mouseIsPressed) {
          stampX = mouseX;
          stampY = mouseY;
        }
      }

      // time bar
      timeLimit = timeLimit - frameCount / 8000;

      if (timeLimit <= 100) {
        fill(random(0, 256), random(0, 256), random(0, 256));
      } else {
        fill(3, 104, 140);
      }
      noStroke();
      rect(0, 480, timeLimit, 40);

      // stamp holding
      if (stampHold) {
        push();
        if (mouseIsPressed) {
          translate(0, 20);
        }

        noStroke();
        fill("rgba(14, 35, 56, 0.5)");
        if (mouseIsPressed) {
          noFill();
        }
        rect(mouseX - 40, mouseY - 30 + 20, 80 + 10, 60 + 10, 10);
        fill("#006666");
        rect(mouseX - 40 - 2, mouseY - 30, 80 + 4, 60 + 10, 10);
        fill("#603f1f");
        rect(mouseX - 40, mouseY - 30, 80, 60, 10);
        fill("#2e2e1f");
        ellipse(mouseX - 40 + 40, mouseY - 30, 40, 80);
        fill("#603f1f");
        ellipse(mouseX - 40 + 40, mouseY - 30 - 20, 50, 50);
        ellipse(mouseX - 40 + 40, mouseY - 30 - 20, 50, 50);
        stroke("#ecd9c5");
        strokeWeight(3);
        noFill();
        ellipse(mouseX - 40 + 35, mouseY - 30 - 25, 20, 20);
        pop();
      }

      if (okay == false && !(pinkInk == false && blueInk == false)) {
        setTimeout(function () {
          stage = 2;
        }, 800);
      }

      if (timeLimit <= 0) {
        stage = 3;
      }

      break;

    case 2: // wrong
      background(74, 66, 58);
      okay = true;
      timeLimit = 500;
      stampHold = false;
      cursor();

      for (i = 0; i < num; i++) {
        push();
        translate(0, 10);
        fill("rgba(0, 51, 102, 0.5)");
        noStroke();
        rotate((PI / -40) * (i - 7));
        rect(150 - 10 * i, 20 + 18 * i, 250, 200);
        pop();

        push();
        fill("#fff5cc");
        strokeWeight(5);
        stroke("#ffd480");
        rotate((PI / -40) * (i - 7));
        rect(150 - 10 * i, 20 + 18 * i, 250, 200);
        // rect(50,50+20*i,250,200);
        pop();
      }

      // stamp (still)
      noStroke();
      strokeWeight(3);
      fill("rgba(0, 51, 102, 0.5)");
      rect(400, 150 + 2, 80 + 10, 60 + 10, 10);
      fill("#006666");
      rect(400 - 2, 150, 80 + 4, 60 + 10, 10);
      fill("#603f1f");
      rect(400, 150, 80, 60, 10);
      fill("#2e2e1f");
      ellipse(400 + 40, 150, 40, 80);
      fill("#603f1f");
      ellipse(400 + 40, 150 - 20, 50, 50);
      ellipse(400 + 40, 150 - 20, 50, 50);
      stroke("#ecd9c5");
      strokeWeight(3);
      noFill();
      ellipse(400 + 35, 150 - 25, 20, 20);

      // ink 1
      noStroke();
      strokeWeight(3);
      fill("rgba(0, 51, 102, 0.5)");
      rect(400, 250 + 2, 80 + 10, 60 + 10, 10);
      fill("#006666");
      rect(400 - 2, 250, 80 + 4, 60 + 10, 10);
      fill(32, 42, 46);
      rect(400, 250, 80, 60, 10);
      fill(201, 52, 95);
      rect(400 + 4, 250 + 2, 72, 54, 8);

      // ink 2
      noStroke();
      strokeWeight(3);
      fill("rgba(0, 51, 102, 0.5)");
      rect(400, 330 + 2, 80 + 10, 60 + 10, 10);
      fill("#006666");
      rect(400 - 2, 330, 80 + 4, 60 + 10, 10);
      fill(32, 42, 46);
      rect(400, 330, 80, 60, 10);
      fill(39, 132, 161);
      rect(400 + 4, 330 + 2, 72, 54, 8);

      noStroke();
      fill("rgba(0,0,0,0.7)");
      rect(0, 0, width, height);

      fill(227, 187, 159);
      ellipse(250, 530, 300, 250);
      triangle(250, 430, 50, 460, -40, 550);
      triangle(250, 430, 450, 460, 540, 550);
      fill(220, 220, 220);
      ellipse(180, 500, 60, 60);
      ellipse(320, 500, 60, 60);
      stroke(156, 129, 110);
      strokeWeight(5);
      line(180, 460, 320, 460);
      line(200, 440, 300, 440);
      stroke(104, 145, 86);

      strokeWeight(5);
      fill(64, 77, 60);
      ellipse(180, 490, 35, 35);
      ellipse(320, 490, 35, 35);

      textAlign(CENTER);
      fill("white");
      noStroke();
      textSize(30);
      text("당신의 점수 : " + count, 250, 150);
      textSize(20);
      textFont(nanum);
      text("도비는 실망했어요...", 250, 250);
      text("도비가 하는 거 잘 보세요...", 250, 300);

      if (keyIsPressed) {
        blueInk = false;
        pinkInk = false;
        setTimeout(function () {
          stage = 0;
          count = 0;
        }, 800);
      }
      break;

    case 3: //time over.
      background(74, 66, 58);
      okay = true;
      timeLimit = 500;
      stampHold = false;
      cursor();

      for (i = 0; i < num; i++) {
        push();
        translate(0, 10);
        fill("rgba(0, 51, 102, 0.5)");
        noStroke();
        rotate((PI / -40) * (i - 7));
        rect(150 - 10 * i, 20 + 18 * i, 250, 200);
        pop();

        push();
        fill("#fff5cc");
        strokeWeight(5);
        stroke("#ffd480");
        rotate((PI / -40) * (i - 7));
        rect(150 - 10 * i, 20 + 18 * i, 250, 200);
        // rect(50,50+20*i,250,200);
        pop();
      }

      // stamp (still)
      noStroke();
      strokeWeight(3);
      fill("rgba(0, 51, 102, 0.5)");
      rect(400, 150 + 2, 80 + 10, 60 + 10, 10);
      fill("#006666");
      rect(400 - 2, 150, 80 + 4, 60 + 10, 10);
      fill("#603f1f");
      rect(400, 150, 80, 60, 10);
      fill("#2e2e1f");
      ellipse(400 + 40, 150, 40, 80);
      fill("#603f1f");
      ellipse(400 + 40, 150 - 20, 50, 50);
      ellipse(400 + 40, 150 - 20, 50, 50);
      stroke("#ecd9c5");
      strokeWeight(3);
      noFill();
      ellipse(400 + 35, 150 - 25, 20, 20);

      // ink 1
      noStroke();
      strokeWeight(3);
      fill("rgba(0, 51, 102, 0.5)");
      rect(400, 250 + 2, 80 + 10, 60 + 10, 10);
      fill("#006666");
      rect(400 - 2, 250, 80 + 4, 60 + 10, 10);
      fill(32, 42, 46);
      rect(400, 250, 80, 60, 10);
      fill(201, 52, 95);
      rect(400 + 4, 250 + 2, 72, 54, 8);

      // ink 2
      noStroke();
      strokeWeight(3);
      fill("rgba(0, 51, 102, 0.5)");
      rect(400, 330 + 2, 80 + 10, 60 + 10, 10);
      fill("#006666");
      rect(400 - 2, 330, 80 + 4, 60 + 10, 10);
      fill(32, 42, 46);
      rect(400, 330, 80, 60, 10);
      fill(39, 132, 161);
      rect(400 + 4, 330 + 2, 72, 54, 8);
      noStroke();
      fill("rgba(0,0,0,0.7)");
      rect(0, 0, width, height);

      fill(227, 187, 159);
      ellipse(250, 530, 300, 250);
      triangle(250, 430, 50, 460, -40, 550);
      triangle(250, 430, 450, 460, 540, 550);
      fill(220, 220, 220);
      ellipse(180, 500, 60, 60);
      ellipse(320, 500, 60, 60);
      stroke(156, 129, 110);
      strokeWeight(5);
      line(180, 460, 320, 460);
      line(200, 440, 300, 440);
      stroke(104, 145, 86);

      strokeWeight(5);
      fill(64, 77, 60);
      ellipse(180, 490, 35, 35);
      ellipse(320, 490, 35, 35);

      textAlign(CENTER);
      fill("white");
      noStroke();

      if (count <= 5) {
        textSize(30);
        text("당신의 점수 : " + count, 250, 150);
        textSize(20);
        text("도비는 많이 실망했어요...", 250, 250);
        text("한 번만 더 기회를 드릴게요...", 250, 300);
      } else if (count <= 10) {
        textSize(30);
        text("당신의 점수 : " + count, 250, 150);
        textSize(20);
        text("도비는 조금 실망했어요...", 250, 250);
        text("한 번만 더 기회를 드릴게요...", 250, 300);
      } else if (count <= 15) {
        textSize(30);
        text("당신의 점수 : " + count, 250, 150);
        textSize(20);
        text("잘 못하지만 도비를 도와줘서 고마워요", 250, 250);
        text(
          "이것만 더 도와주세요\n(새로운 편지 뭉치를 들고 온다. 이게 맞을까.)",
          250,
          300
        );
      } else {
        textSize(30);
        text("당신의 점수 : " + count, 250, 150);
        textSize(20);
        text("도비는 아주 기뻐요", 250, 250);
        text("호그와트에서 도비랑 같이 일해요\n(도비가 되었다)", 250, 300);
      }

      if (keyIsPressed) {
        blueInk = false;
        pinkInk = false;
        setTimeout(function () {
          stage = 0;
          count = 0;
        }, 800);
      }
      break;
  }
}

function mousePressed() {
  if (
    stampHold &&
    mouseX >= 150 - 10 * 9 &&
    mouseX <= 150 - 10 * 9 + 280 &&
    mouseY >= 20 + 18 * 9 - 60 &&
    mouseY <= 20 + 18 * 9 - 60 + 230 &&
    (pinkInk || blueInk) &&
    okay == true
  ) {
    setTimeout(function () {
      content = int(random(0, 6));
      r = random(0, 100);
      g = random(0, 100);
      b = random(0, 100);
      stampX = 1000;
      stampY = 1000;
    }, 800);
  }
}

function mouseClicked() {
  if (
    stampHold &&
    mouseX >= 150 - 10 * 9 &&
    mouseX <= 150 - 10 * 9 + 280 &&
    mouseY >= 20 + 18 * 9 - 60 &&
    mouseY <= 20 + 18 * 9 - 60 + 230 &&
    (pinkInk || blueInk) &&
    okay == true
  ) {
    count += 1;
    now = frameCount;
  }
}
