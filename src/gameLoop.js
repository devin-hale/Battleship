import {
  updateBoard,
  updateAIBoard,
  softResetBoard,
} from "./rendering/renderpage";
import updateMessage from "./rendering/updateMessage";

const playerTurn = (player, aiBoard, playerBoard, aiPlayer) => {
  updateMessage(`${player.name} is aiming...`);
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
        softResetBoard(aiBoard, playerBoard);
        updateMessage(clickResult);
        aiTurn(aiBoard, playerBoard, aiPlayer, player);
      }
      updateMessage(clickResult);
    });
  });
};

const aiTurn = (aiBoard, playerBoard, aiPlayer, player) => {
  updateMessage(`${aiPlayer.name} is aiming...`);
  setTimeout(() => {
    let message = aiPlayer.aiTurn(playerBoard);
    updateMessage(message);
    updateBoard(aiBoard, playerBoard);
    playerTurn(player, aiBoard, playerBoard, aiPlayer);
  }, 1000);
};

export { playerTurn };
