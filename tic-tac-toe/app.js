import { gameResetter } from "./gameResetter.js";
//
let teamAscore = 0;
let teamBscore = 0;
//
let startGame = () => {
  let startIndex = 1;
  let isOverChecker = false;
  let allBox = document.querySelectorAll(".area");
  Array.from(allBox).map((box) => {
    box.addEventListener("click", (e) => {
      if (!isOverChecker) {
        if (e.target.textContent) return;
        if (startIndex % 2 === 0) {
          e.target.textContent = "O";
          e.target.style.color = "#ff0000";
        } else {
          e.target.textContent = "X";
          e.target.style.color = "#4169e1";
        }
        startIndex++;
        isOverChecker = isOver();
      }
    });
  });
};

startGame();

//---------funksions
function isOver() {
  let box1 = document.querySelector("#box1");
  let box2 = document.querySelector("#box2");
  let box3 = document.querySelector("#box3");
  let box4 = document.querySelector("#box4");
  let box5 = document.querySelector("#box5");
  let box6 = document.querySelector("#box6");
  let box7 = document.querySelector("#box7");
  let box8 = document.querySelector("#box8");
  let box9 = document.querySelector("#box9");

  //123
  if (
    box1.textContent === box2.textContent &&
    box1.textContent === box3.textContent &&
    box1.textContent !== ""
  ) {
    box1.classList.add("middleLine");
    box2.classList.add("middleLine");
    box3.classList.add("middleLine");
    findWinner(box1);
    return true;
  }
  //159
  if (
    box1.textContent === box5.textContent &&
    box1.textContent === box9.textContent &&
    box1.textContent !== ""
  ) {
    box1.classList.add("rotateMin45");
    box5.classList.add("rotateMin45");
    box9.classList.add("rotateMin45");
    findWinner(box1);
    return true;
  }
  //147
  if (
    box1.textContent === box4.textContent &&
    box1.textContent === box7.textContent &&
    box1.textContent !== ""
  ) {
    box1.classList.add("verticalLine");
    box4.classList.add("verticalLine");
    box7.classList.add("verticalLine");
    findWinner(box1);
    return true;
  }
  //258
  if (
    box2.textContent === box5.textContent &&
    box2.textContent === box8.textContent &&
    box2.textContent !== ""
  ) {
    box2.classList.add("verticalLine");
    box5.classList.add("verticalLine");
    box8.classList.add("verticalLine");
    findWinner(box2);
    return true;
  }
  //357
  if (
    box3.textContent === box5.textContent &&
    box3.textContent === box7.textContent &&
    box3.textContent !== ""
  ) {
    box3.classList.add("rotate45");
    box5.classList.add("rotate45");
    box7.classList.add("rotate45");
    findWinner(box3);
    return true;
  }
  //369
  if (
    box3.textContent === box6.textContent &&
    box3.textContent === box9.textContent &&
    box3.textContent !== ""
  ) {
    box3.classList.add("verticalLine");
    box6.classList.add("verticalLine");
    box9.classList.add("verticalLine");
    findWinner(box3);
    return true;
  }
  //456
  if (
    box4.textContent === box5.textContent &&
    box4.textContent === box6.textContent &&
    box4.textContent !== ""
  ) {
    box4.classList.add("middleLine");
    box5.classList.add("middleLine");
    box6.classList.add("middleLine");
    findWinner(box4);
    return true;
  }
  //789
  if (
    box7.textContent === box8.textContent &&
    box7.textContent === box9.textContent &&
    box7.textContent !== ""
  ) {
    box7.classList.add("middleLine");
    box8.classList.add("middleLine");
    box9.classList.add("middleLine");
    findWinner(box7);
    return true;
  }
  //hec hec olarsa
  if (allBoxIsFull()) {
    findWinner(null);
    return true;
  }

  //davam eden oyun
  return false;
}

function findWinner(box) {
  //hec hec olub
  if (box === null) {
    setTimeout(() => {
      gameResetter();
      startGame();
    }, 1000);
    return;
  }
  //qalib var
  let symbol = box.textContent;
  if (symbol === "X") {
    teamAscore++;
    document.querySelector(
      ".scoreTeamA"
    ).textContent = `Team "X" - ${teamAscore}`;
    setTimeout(() => {
      gameResetter();
      startGame();
    }, 1000);
  } else {
    teamBscore++;
    document.querySelector(
      ".scoreTeamB"
    ).textContent = `Team "O" - ${teamBscore}`;
    setTimeout(() => {
      gameResetter();
      startGame();
    }, 1000);
  }
}

//butun xanalar dolub
function allBoxIsFull() {
  let count = 0;
  let allBox = document.querySelectorAll(".area");
  Array.from(allBox).map((box) => {
    if (box.textContent !== "") count++;
  });
  if (count === 9) {
    return true;
  }
  return false;
}
