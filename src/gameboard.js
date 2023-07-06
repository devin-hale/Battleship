const gameboard = (player) => {
  const owner = player;

  //Board array.
  let board = [];

  //Generate objects in array representing gameboard square.
  for (let i = 0; i <= 99; i++) {
    board.push({
      squareID: i,
      occupied: false,
      revealed: false,
      hitMiss: null,
      shipLink: null,
    });
  }

  const placementCheck = (ship, coord) => {
    //Uses some cool math stuff to determine if a ship placement is valid depending on it's length and orientation.
    switch (ship.orientation) {
      //Ship points up ^^.
      case 0:
        //Loops through all possible square occupations, checks if they are occupied.
        for (let i = 0; i < ship.length; i++) {
          if (coord - i * 10 < 0) return false;
          if (board[coord - i * 10].occupied) return false;
        }
        return coord - (ship.length - 1) * 10 >= 0 ? true : false;
      //Ship points right >>
      case 1:
        //Loops through all possible square occupations, checks if they are occupied.
        for (let i = 0; i < ship.length; i++) {
          if (coord + i > 99) return false;
          if (board[coord + i].occupied) return false;
        }
        return Math.floor((coord + (ship.length - 1)) / 10) ===
          Math.floor(coord / 10)
          ? true
          : false;
      //Ship points down VV.
      case 2:
        //Loops through all possible square occupations, checks if they are occupied.
        for (let i = 0; i < ship.length; i++) {
          if (coord + i * 10 > 99) return false;
          if (board[coord + i * 10].occupied) return false;
        }
        return coord + (ship.length - 1) * 10 < 100 ? true : false;
      //Ship points left <<.
      case 3:
        //Loops through all possible square occupations, checks if they are occupied.
        for (let i = 0; i < ship.length; i++) {
          if (coord - i < 0) return false;
          if (board[coord - i].occupied) return false;
        }
        return Math.floor((coord - (ship.length - 1)) / 10) ===
          Math.floor(coord / 10)
          ? true
          : false;
    }
  };

  const placeShip = (ship, coord) => {
    // Checks if ship placement is valid based on ship orientation.
    if (placementCheck(ship, coord)) {
      ship.isPlaced = true;
      switch (ship.orientation) {
        //Up
        case 0:
          //Loops through all squares the ship will occupy, changing their occupied property to true, and adding the ship to their shipLink property.
          for (let i = 0; i < ship.length; i++) {
            board[coord - i * 10].occupied = true;
            board[coord - i * 10].shipLink = ship;
          }
          return "Valid";
        //Right
        case 1:
          //Loops through all squares the ship will occupy, changing their occupied property to true, and adding the ship to their shipLink property.
          for (let i = 0; i < ship.length; i++) {
            board[coord + i].occupied = true;
            board[coord + i].shipLink = ship;
          }
          return "Valid";
        //Down
        case 2:
          //Loops through all squares the ship will occupy, changing their occupied property to true, and adding the ship to their shipLink property.
          for (let i = 0; i < ship.length; i++) {
            board[coord + i * 10].occupied = true;
            board[coord + i * 10].shipLink = ship;
          }
          return "Valid";
        //Left
        case 3:
          //Loops through all squares the ship will occupy, changing their occupied property to true, and adding the ship to their shipLink property.
          for (let i = 0; i < ship.length; i++) {
            board[coord - i].occupied = true;
            board[coord - i].shipLink = ship;
          }
          return "Valid";
      }
    }
    //Returns Invalid Placement if placement is found to be invalid.
    return "Invalid Placement";
  };

  const isSunk = (coord) => {
    if (board[coord].occupied === true) {
      if (board[coord].isSunk === true) return true;
      else return false;
    }
    return "No ship found at coordinate.";
  };

  const allSunk = () => {
    // Pulls all coordinates that are occupied.
    let allShipTiles = board.filter((obj) => obj.occupied === true);
    // Declare new ship array.
    let allShips = [];
    //Loop through allShipTiles, push to allShips.  Ignore if it already exists in allShips.
    allShipTiles.forEach((shipTile) => {
      if (!allShips.includes(shipTile)) {
        allShips.push(shipTile);
      }
    });

    let matchIndicator = 0;

    allShips.forEach((ship) => {
      if (!ship.isSunk) {
        matchIndicator++;
      }
    });

    return matchIndicator == 0 ? true : false;
  };

  const revealToggle = (coord) => {
    board[coord].revealed
      ? (board[coord].revealed = false)
      : (board[coord].revealed = true);
    return;
  };

  const receiveHit = (coord) => {
    if (board[coord].revealed)
      return "You've already attacked this coordinate.";
    // Reveal coord.
    revealToggle(coord);
    // Coordinate must be occupied.
    if (board[coord].occupied === true) {
      //Coordinate must not be sunk.
      if (board[coord].shipLink.isSunk === false) {
        //grabs Targeted Ship ID
        const targetID = board[coord].shipLink.shipID;
        // Grabs all coordinates containing a ship that also matches the target ship ID.
        const allShipTiles = board.filter(
          (obj) => obj.occupied === true && obj.shipLink.shipID === targetID
        );

        board[coord].shipLink.hitMiss = true;

        // Adds a hit to each coordinate of said ship.
        board[coord].shipLink.hits++;

        // If hits on the ship equals the length, set all corresponding ship tiles isSunk value to true;
        if (board[coord].shipLink.hits == board[coord].shipLink.length) {
          board[coord].shipLink.isSunk = true;
        }
        return "Hit!";
      }
      return "Ship is already sunk.";
    }
    return "Miss!";
  };

  return {
    owner,
    board,
    placementCheck,
    placeShip,
    isSunk,
    allSunk,
    revealToggle,
    receiveHit,
  };
};

export default gameboard;
