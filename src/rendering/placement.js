const playerPlacement = (ship, board) => {
  let awaitPlacement = false;

  //Adds event listener to every square.
  board.board.forEach(sq => {
    //Gets sq div to corresponding square.
    let sqDiv = document.getElementById(`P:${sq.squareID}`);

    //Adds click listener to it.
    sqDiv.addEventListener('click', event => {
      //Checks if valid placement.
      if (board.placementCheck(ship, sq.squareID)) {
        //Places ship on board.
        board.placeShip(ship, sq.squareID);
        //Changes color to green.
        sqDiv.style.backgroundColor = 'green';
      }
    })
  })



};

export default playerPlacement;
