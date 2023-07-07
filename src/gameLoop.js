import { updateBoard, updateAIBoard } from "./rendering/renderpage";

const playerTurn = (player, aiBoard, playerBoard) => {
  //Hover functionality added to each AI Div
  aiBoard.board.forEach((sq) => {
    let sqDiv = document.getElementById(`AI:${sq.squareID}`);
    sqDiv.style.cursor = "pointer";

    sqDiv.addEventListener("mouseenter", (event) => {
      sqDiv.style.backgroundColor = "green";
    });

    sqDiv.addEventListener("mouseout", () => {
      updateAIBoard(aiBoard);
    });
  });

  //Click functionality for each AI Div
  aiBoard.board.forEach((sq) => {
    let sqDiv = document.getElementById(`AI:${sq.squareID}`);

    sqDiv.addEventListener("click", () => {
      let coordinate = sq.squareID;
      let clickResult = aiBoard.receiveHit(coordinate);
      if (clickResult != "You've already attacked this coordinate.") {
        updateAIBoard(aiBoard);
      }
    });
  });
};

export { playerTurn };
