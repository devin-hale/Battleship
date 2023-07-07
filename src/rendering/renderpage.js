import gameboard from "../gameboard";
import player from "../player";
import playerPlacement from "./placement";

const renderAI = (board) => {
  let gameDiv = document.getElementById("game");

  let aiDiv = document.createElement("div");
  aiDiv.classList = "aiDiv";

  board.board.forEach((square) => {
    let gameSquare = document.createElement("div");
    gameSquare.id = `AI:${square.squareID}`;
    gameSquare.classList = "coordAISquare coordSquare";
    if (square.revealed) {
      if (square.hitMiss) {
        if (square.shipLink.isSunk) gameSquare.style.backgroundColor = "red";
        else gameSquare.style.backgroundColor = "orange";
      } else gameSquare.style.backgroundColor = "";
    } else gameSquare.style.backgroundColor = "darkgrey";

    aiDiv.appendChild(gameSquare);
  });

  gameDiv.appendChild(aiDiv);
};

const renderPlayer = (board) => {
  let gameDiv = document.getElementById("game");

  let aiDiv = document.createElement("div");
  aiDiv.classList = "playerDiv";

  board.board.forEach((square) => {
    let gameSquare = document.createElement("div");
    gameSquare.id = `P:${square.squareID}`;
    gameSquare.classList = "coordPlayerSquare coordSquare";
    if (square.occupied) {
      if (!square.shipLink.isSunk) gameSquare.style.backgroundColor = "green";
      if (square.hitMiss) gameSquare.style.backgroundColor = "orange";
      if (square.shipLink.isSunk) gameSquare.style.backgroundColor = "red";
    }
    if (square.hitMiss == false) {
      gameSquare.style.backroundColor = "rgba(255, 143, 143, 0.336)";
    }
    aiDiv.appendChild(gameSquare);
  });

  gameDiv.appendChild(aiDiv);
};

const updateBoard = (aiBoard, playerBoard) => {
  let gameDiv = document.getElementById("game");

  playerBoard.board.forEach((sq) => {
    let sqDiv = document.getElementById(`P:${sq.squareID}`);

    if (sq.occupied) {
      sqDiv.style.backgroundColor = "green";
      if (sq.hitMiss) sqDiv.style.backgroundColor = "orange";
      if (sq.shipLink.isSunk) gameSquare.style.backgroundColor = "red";
    } else if (sq.hitMiss == false)
      sqDiv.style.backgroundColor = "rgba(255, 143, 143, 0.336)";
    else if (sq.hitMiss == null) sqDiv.style.backgroundColor = "";
  });
};

const updateAIBoard = (aiBoard) => {
  aiBoard.board.forEach((sq) => {
    let sqDiv = document.getElementById(`AI:${sq.squareID}`);

    if (sq.revealed == true) {
      if (sq.hitMiss == true) sqDiv.style.backgroundColor = "orange";
      if (sq.occupied) {
        if (sq.shipLink.isSunk) sqDiv.style.backgroundColor = "red";
      }
      if (!sq.hitMiss) sqDiv.style.backgroundColor = "";
    } else sqDiv.style.backgroundColor = "darkgrey";
  });
};

const softResetBoard = (aiBoard, playerBoard) => {
  let gameDiv = document.getElementById("game");
  gameDiv.innerHTML = "";

  renderAI(aiBoard);
  renderPlayer(playerBoard);
  updateBoard(aiBoard, playerBoard);
  updateAIBoard(aiBoard);
};

const winRender = (winner, aiBoard, playerBoard) => {
  let gameDiv = document.getElementById("game");

  let winDiv = document.createElement("div");
  winDiv.classList = "winDiv";

  let winText = document.createElement("p");
  winText.classList = "winText";
  winText.innerHTML = `Winner: ${winner}`;
  winDiv.appendChild(winText);

  let resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.innerHTML = "Reset";
  resetButton.classList = "resetButton";
  winDiv.appendChild(resetButton);

  gameDiv.appendChild(winDiv);

  resetButton.addEventListener("click", () => {
    location.reload();
  });
};

export {
  renderAI,
  renderPlayer,
  updateBoard,
  updateAIBoard,
  softResetBoard,
  winRender,
};
