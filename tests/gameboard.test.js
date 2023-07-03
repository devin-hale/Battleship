import gameboard from "../src/gameboard";

describe("Gameboard Properties", () => {
  test("Owner", () => {
    let testBoard = gameboard("John");
    expect(testBoard.owner).toBe("John");
  });

  test("Initial", () => {
    let testBoard = gameboard("John");
    expect(testBoard.board[2].squareID).toEqual(2);
    expect(testBoard.board[99].occupied).toEqual(false);
    expect(testBoard.board[0].revealed).toEqual(false);
    expect(testBoard.board[45].hitMiss).toEqual(null);
    expect(testBoard.board[1].shipLink).toEqual(null);
  });
});

describe("Ship Placement Validity Method", () => {
  let testBoard = gameboard("John");
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

describe("Ship Placement Method", () => {
  let testBoard = gameboard("John");
  //fake ships
  let ship = {
    length: 5,
    orientation: null,
    isPlaced: false,
    shipID: 1,
    sunk: false,
  };
  let ship2 = {
    length: 5,
    orientation: null,
    isPlaced: false,
    shipID: 2,
    sunk: false,
  };
  let ship3 = {
    length: 5,
    orientation: null,
    isPlaced: false,
    shipID: 0,
    sunk: false,
  };
  //Fake player.
  let player1 = { name: "Bobby", ships: [ship] };

  test("Place ship at a valid coordinate.  Check shipLink properties of all coordinates for match.", () => {
    ship.orientation = 0;
    testBoard.placeShip(ship, 50);
    expect(testBoard.board[50].shipLink).toBe(ship);
    expect(testBoard.board[40].shipLink).toBe(ship);
    expect(testBoard.board[30].shipLink).toBe(ship);
    expect(testBoard.board[20].shipLink).toBe(ship);
    expect(testBoard.board[10].shipLink).toBe(ship);
  });

  test("Place ship at an invalid coordinate. ", () => {
    ship.orientation = 0;
    expect(testBoard.placeShip(ship, 30)).toBe("Invalid Placement");
  });
});

describe("Sunk Status Checker", () => {
  //fake ships
  let ship0 = {
    length: 5,
    orientation: null,
    isPlaced: false,
    shipID: 1,
    isSunk: false,
  };
  let ship1 = {
    length: 5,
    orientation: null,
    isPlaced: false,
    shipID: 2,
    isSunk: false,
  };
  let ship2 = {
    length: 5,
    orientation: null,
    isPlaced: false,
    shipID: 0,
    isSunk: false,
  };
  //Fake player.
  let player1 = { name: "Bobby", ships: [ship0, ship1, ship2] };

  test("Sunk Ship", () => {
    let testBoard = gameboard("John");
    ship0.orientation = 1;
    testBoard.placeShip(ship0, 0);
    testBoard.board[0].isSunk = true;
    expect(testBoard.isSunk(0)).toBeTruthy;
  });

  test("Un-Sunk Ship", () => {
    let testBoard = gameboard("John");
    ship0.orientation = 1;
    testBoard.placeShip(ship0, 0);
    expect(testBoard.isSunk(0)).toBeFalsy;
  });

  test("No ships found.", () => {
    let testBoard = gameboard("John");
    expect(testBoard.isSunk(0)).toBe("No ship found at coordinate.");
  });

  test("All Sunk Ships - True", () => {
    let testBoard = gameboard("John");
    ship0.orientation = 1;
    ship0.length = 1;
    ship1.orientation = 1;
    ship1.length = 1;
    ship2.orientation = 1;
    ship2.length = 1;
    testBoard.placeShip(ship0, 0);
    testBoard.board[0].isSunk = true;
    testBoard.placeShip(ship0, 50);
    testBoard.board[50].isSunk = true;
    testBoard.placeShip(ship0, 90);
    testBoard.board[90].isSunk = true;

    expect(testBoard.allSunk()).toBeTruthy();
  });
});

describe("Toggle Reveal Status", () => {
  let testBoard = gameboard("John");

  test("Toggle On", () => {
    testBoard.revealToggle(0);
    expect(testBoard.board[0].revealed).toBeTruthy();
  });

  test("Toggle On", () => {
    testBoard.revealToggle(0);
    expect(testBoard.board[0].revealed).toBeFalsy();
  });
});
