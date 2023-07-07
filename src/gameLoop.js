import { updateBoard } from "./rendering/renderpage";

const playerTurn = (player, aiBoard, playerBoard) => {
  aiBoard.board.forEach((sq) => {
    let sqDiv = document.getElementById(`AI:${sq.squareID}`);

    sqDiv.addEventListener("mouseenter", (event) => {
      sqDiv.style.backgroundColor = "green";
    });

    sqDiv.addEventListener("mouseout", () => {
      updateBoard(aiBoard, playerBoard);
    });
  });
};

export { playerTurn };
