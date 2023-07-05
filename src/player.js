import gameboard from "./gameboard";
import ship from "./ships";

const player = () => {
  let ships = [];
  let gameboard = null;

  let carrierShip = ship(5);
  let battleShip = ship(4);
  let cruiserShip = ship(3);
  let submarineShip = ship(3);
  let destroyerShip = ship(2);

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
        board.receiveHit(randomCoord);
        return "Turn Complete.";
      }
    }
  };

  return {
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
