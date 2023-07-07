import { updateBoard, softResetBoard } from "./renderpage";
import { playerTurn } from "../gameLoop";
import updateMessage from "./updateMessage";

//This function removes the rotation button event listener in order to update it.
const rotationRemove = (shipPlace) => {
  let rotateButt = document.getElementById("rotateButton");
  rotateButt.removeEventListener("click", (event) => {
    ships[shipPlace].orientation++;
    if (ships[shipPlace].orientation > 3) ships[shipPlace].orientation = 0;
  });
};

const placementRotation = (ships, shipPlace) => {
  let rotateButt = document.getElementById("rotateButton");
  ships[shipPlace].orientation = 0;

  rotateButt.addEventListener("click", (event) => {
    ships[shipPlace].orientation++;
    if (ships[shipPlace].orientation > 3) ships[shipPlace].orientation = 0;
  });
};

const playerPlacement = (
  ships,
  playerBoard,
  aiBoard,
  playerPerson,
  aiPlayer
) => {
  let shipPlace = 0;

  updateMessage(`Place your ${ships[shipPlace].type}.`);

  placementRotation(ships, shipPlace);

  //Placement validity hover colors.
  playerBoard.board.forEach((sq) => {
    let sqDiv = document.getElementById(`P:${sq.squareID}`);

    sqDiv.addEventListener("mouseenter", (event) => {
      sqDiv.style.cursor = "pointer";
      let highlight = [];
      highlight = [];
      highlight.push(sqDiv);
      switch (ships[shipPlace].orientation) {
        case 0:
          for (let i = 1; i < ships[shipPlace].length; i++) {
            if (sq.squareID - i * 10 > 0)
              highlight.push(
                document.getElementById(`P:${sq.squareID - i * 10}`)
              );
          }
          break;
        case 1:
          for (let i = 1; i < ships[shipPlace].length; i++) {
            if (
              Math.floor((sq.squareID + i) / 10) ===
              Math.floor(sq.squareID / 10)
            )
              //Math.floor((sq.squareID + (ships[shipPlace].length - 1)) / 10) === Math.floor(sq.squareID / 10)
              highlight.push(document.getElementById(`P:${sq.squareID + i}`));
          }
          break;
        case 2:
          for (let i = 1; i < ships[shipPlace].length; i++) {
            if (sq.squareID + i * 10 < 99)
              highlight.push(
                document.getElementById(`P:${sq.squareID + i * 10}`)
              );
          }
          break;
        case 3:
          for (let i = 1; i < ships[shipPlace].length; i++) {
            if (
              Math.floor((sq.squareID - i) / 10) ===
              Math.floor(sq.squareID / 10)
            )
              //Math.floor((sq.squareID + (ships[shipPlace].length - 1)) / 10) === Math.floor(sq.squareID / 10)
              highlight.push(document.getElementById(`P:${sq.squareID - i}`));
          }
          break;
      }
      highlight.forEach((thing) => {
        if (playerBoard.placementCheck(ships[shipPlace], sq.squareID)) {
          thing.style.backgroundColor = "green";
        } else {
          thing.style.backgroundColor = "red";
        }
      });
    });

    sqDiv.addEventListener("mouseout", () => {
      updateBoard(aiBoard, playerBoard);
    });
  });

  //Adds placement event listener to every square.
  playerBoard.board.forEach((sq) => {
    //Gets sq div to corresponding square.
    let sqDiv = document.getElementById(`P:${sq.squareID}`);

    //Adds click listener to it.
    sqDiv.addEventListener("click", (event) => {
      //Checks if valid placement.
      if (playerBoard.placementCheck(ships[shipPlace], sq.squareID)) {
        //Places ship.
        playerBoard.placeShip(ships[shipPlace], sq.squareID);
        //Updates board.
        updateBoard(aiBoard, playerBoard);
        shipPlace++;
        if (shipPlace <= 4) {
          updateMessage(`Place your ${ships[shipPlace].type}.`);
          rotationRemove(shipPlace);
          placementRotation(ships, shipPlace);
        }
      }
    });

    sqDiv.addEventListener("click", () => {
      if (shipPlace > 4) {
        rotationRemove(shipPlace);
        document.getElementById("rotateButton").remove();
        softResetBoard(aiBoard, playerBoard);
        playerTurn(playerPerson, aiBoard, playerBoard, aiPlayer);
      }
    });
  });
};

export default playerPlacement;
