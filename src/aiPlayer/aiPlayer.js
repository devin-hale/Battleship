import gameboard from "../gameboard";

const aiPlacement = (aiPlayer, aiBoard) => {
  aiPlayer.ships.forEach((ship) => {
    let validPlacement = false;
    while (!validPlacement) {
      ship.orientation = Math.floor(Math.random() * 3);
      let coordinate = Math.floor(Math.random() * 99);
      if (aiBoard.placementCheck(ship, coordinate)) {
        aiBoard.placeShip(ship, coordinate);
        validPlacement = true;
      }
    }
  });
};

export { aiPlacement };
