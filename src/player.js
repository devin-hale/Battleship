import gameboard from "./gameboard";
import ship from "./ships";

const player = (name) => {
  let ships = [];
  let gameboard = null;

  let carrierShip = ship(5);
  carrierShip.type = "Carrier";
  let battleShip = ship(4);
  battleShip.type = "Battleship";
  let cruiserShip = ship(3);
  cruiserShip.type = "Cruiser";
  let submarineShip = ship(3);
  submarineShip.type = "Submarine";
  let destroyerShip = ship(2);
  destroyerShip.type = "Destroyer";

  ships.push(
    carrierShip,
    battleShip,
    cruiserShip,
    submarineShip,
    destroyerShip
  );

  const takeTurn = (board, coord) => {
    board.receiveHit(coord);
  };

  const aiTurn = (board) => {
    let turnComplete = false;
    while (!turnComplete) {
      let randomCoord = Math.floor(Math.random() * 99);
      if (!board.board[randomCoord].revealed) {
        turnComplete = true;
        return board.receiveHit(randomCoord);
      }
    }
  };

  return {
    name,
    ships,
    gameboard,
    takeTurn,
    aiTurn,
  };
};

export default player;

/*
#### Player class

- Constructor
  - ships: [];

#### Player methods

- takeTurn

  - receives coordinate (0-99). calls receiveHit on gameboard with said coordinate.

- takeTurnAI
  - find random legal move, take it.
  - will expand with actual strategy later?
*/
