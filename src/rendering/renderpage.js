import gameboard from "../gameboard";

const renderAI = (board) => {
  let gameDiv = document.getElementById("game");

  let aiDiv = document.createElement("div");
  aiDiv.classList = "aiDiv";

  board.board.forEach((square) => {
    let gameSquare = document.createElement("div");
    gameSquare.id = `AI:${square.squareID}`;
    gameSquare.classList = "coordAISquare coordSquare";
    if (square.revealed) {
      if (square.hitMiss) gameSquare.style.backgroundColor = "red";
      else gameSquare.style.backgroundColor = "";
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
      if (sq.hitMiss) sqDiv.style.backgroundColor = "red";
    } else {
      sqDiv.style.backgroundColor = "";
    }
  });
};

const softResetBoard = (aiBoard, playerBoard) => {
  let gameDiv = document.getElementById("game");
  gameDiv.innerHTML = "";

  renderAI(aiBoard);
  renderPlayer(playerBoard);
};

export { renderAI, renderPlayer, updateBoard, softResetBoard };
