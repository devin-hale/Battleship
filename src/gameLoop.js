import {
  updateBoard,
  updateAIBoard,
  softResetBoard,
  winRender,
} from "./rendering/renderpage";
import { updateMessage, updateMColor } from "./rendering/updateMessage";

const checkWin = (player, aiBoard, playerBoard, aiPlayer) => {
  if (aiBoard.allSunk()) return "You Win!";
  if (playerBoard.allSunk()) return "AI Wins!";
  else return null;
};

const playerTurn = (player, aiBoard, playerBoard, aiPlayer) => {
  updateMessage(`Select your target.`);
  updateMColor("green");
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
        let winCheck = checkWin(player, aiBoard, playerBoard, aiPlayer);
        if (winCheck != null) {
          winRender(winCheck, aiBoard, playerBoard);
          return;
        }
        setTimeout(() => {
          aiTurn(aiBoard, playerBoard, aiPlayer, player);
        }, 2000);
      }
      updateMessage(clickResult);
      updateAIBoard(aiBoard);
    });
  });
};

const aiTurn = (aiBoard, playerBoard, aiPlayer, player) => {
  updateMessage(`${aiPlayer.name} is aiming...`);
  updateMColor("red");
  setTimeout(() => {
    let message = aiPlayer.aiTurn(playerBoard);
    updateMessage(message);
    updateBoard(aiBoard, playerBoard);
    setTimeout(() => {
      playerTurn(player, aiBoard, playerBoard, aiPlayer);
    }, 2000);
  }, 3000);
};

export { playerTurn };
