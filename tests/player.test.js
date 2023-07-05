import player from "../src/player.js";
import gameboard from "../src/gameboard.js";

describe("Test player properties", () => {
  let newPlayer = player();

  test("Player ships.", () => {
    expect(newPlayer.ships[0].length).toBe(5);
    expect(newPlayer.ships[1].length).toBe(4);
    expect(newPlayer.ships[2].length).toBe(3);
    expect(newPlayer.ships[3].length).toBe(3);
    expect(newPlayer.ships[4].length).toBe(2);
  });
});

describe("Test player methods.", () => {
  let newPlayer = player();
  let testBoard = gameboard("Joe");
  newPlayer.ships[0].orientation = 1;
  testBoard.placeShip(newPlayer.ships[0], 0);

  test("takeTurn", () => {
    newPlayer.takeTurn(testBoard, 0);
    expect(testBoard.board[0].shipLink.hits).toBe(1);
  });

  test("AI Turn", () => {
    let aiPlayer = player();

    expect(aiPlayer.aiTurn(testBoard)).toBe("Turn Complete.");
  });
});

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
