const renderAI = (board) => {
  let gameDiv = document.getElementById("game");

  let aiDiv = document.createElement("div");
  aiDiv.classList = "aiDiv";

  board.board.forEach((square) => {
    let gameSquare = document.createElement("div");
    gameSquare.id = `AI:${square.squareID}`;
    gameSquare.classList = "coordSquare";
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
    gameSquare.classList = "coordSquare";
    aiDiv.appendChild(gameSquare);
  });

  gameDiv.appendChild(aiDiv);
};

export { renderAI, renderPlayer };
