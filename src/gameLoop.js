import { updateBoard } from "./rendering/renderpage";

const playerTurn = (player, aiBoard, playerBoard) => {
  //Hover functionality added to each AI Div
  aiBoard.board.forEach((sq) => {
    let sqDiv = document.getElementById(`AI:${sq.squareID}`);
    sqDiv.style.cursor = "pointer";

    sqDiv.addEventListener("mouseenter", (event) => {
      sqDiv.style.backgroundColor = "green";
    });

    sqDiv.addEventListener("mouseout", () => {
      updateBoard(aiBoard, playerBoard);
    });
  });

  //Click functionality for each AI Div
  aiBoard.board.forEach((sq) => {
    let sqDiv = document.getElementById(`AI:${sq.squareID}`);

    sqDiv.addEventListener("click", () => {
      let clickResult = aiBoard.receiveHit(sq.squareID);
      aiBoard.receiveHit();
      if (clickResult != "You've already attacked this coordinate.") {
        updateBoard(aiBoard, playerBoard);
        console.log("Ok");
      }
    });
  });
};

export { playerTurn };
