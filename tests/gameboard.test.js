import gameboard from "../src/gameboard";

//Initialize
const testBoard = gameboard("John");

describe("Gameboard Properties", () => {
  test("Owner", () => {
    expect(testBoard.owner).toBe("John");
  });

  test("Initial", () => {
    expect(testBoard.board[2].squareID).toEqual(2);
    expect(testBoard.board[99].occupied).toEqual(false);
    expect(testBoard.board[0].revealed).toEqual(false);
    expect(testBoard.board[45].hitMiss).toEqual(null);
    expect(testBoard.board[1].shipLink).toEqual(null);
  });
});

describe("Ship Placement Method", () => {
  //fake ship
  let ship = { length: 5, orientation: null };

  test("Valid ship placement pointing up.", () => {
    ship.orientation = 0;
    expect(testBoard.placementCheck(ship, 40)).toBeTruthy();
  });

  test("Invalid ship placement pointing up.", () => {
    ship.orientation = 0;
    expect(testBoard.placementCheck(ship, 30)).toBeFalsy();
  });

  test("Valid ship placement pointing right.", () => {
    ship.orientation = 1;
    expect(testBoard.placementCheck(ship, 5)).toBeTruthy();
  });

  test("Invalid ship placement pointing right.", () => {
    ship.orientation = 1;
    expect(testBoard.placementCheck(ship, 6)).toBeFalsy();
  });

  test("Valid ship placement pointing down.", () => {
    ship.orientation = 2;
    expect(testBoard.placementCheck(ship, 50)).toBeTruthy();
  });

  test("Invalid ship placement pointing down.", () => {
    ship.orientation = 2;
    expect(testBoard.placementCheck(ship, 90)).toBeFalsy();
  });

  test("Valid ship placement pointing left.", () => {
    ship.orientation = 3;
    expect(testBoard.placementCheck(ship, 4)).toBeTruthy();
  });

  test("Invalid ship placement pointing left.", () => {
    ship.orientation = 3;
    expect(testBoard.placementCheck(ship, 3)).toBeFalsy();
  });
});

// 0,1,2,3,4,5,6,7,8,9
