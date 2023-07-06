import { updateBoard } from "./renderpage";

const playerPlacement = (ship, playerBoard, aiBoard) => {
  let awaitPlacement = false;

  //Adds event listener to every square.
  playerBoard.board.forEach(sq => {
    //Gets sq div to corresponding square.
    let sqDiv = document.getElementById(`P:${sq.squareID}`);

    //Adds click listener to it.
    sqDiv.addEventListener('click', event => {
      //Checks if valid placement.
      if (playerBoard.placementCheck(ship, sq.squareID)) {
        //Places ship on board.
        playerBoard.placeShip(ship, sq.squareID);
        //Just fucking deletes the entire board and re-renders it based on the updated data lmao.
        updateBoard(aiBoard, playerBoard);
      }
    })
  })



};

export default playerPlacement;
