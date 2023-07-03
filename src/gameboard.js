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
        return coord - (ship.length - 1) * 10 >= 0 ? true : false;
      //Ship points right >>
      case 1:
        return Math.floor((coord + (ship.length - 1)) / 10) ===
          Math.floor(coord / 10)
          ? true
          : false;
      //Ship points down VV.
      case 2:
        return coord + (ship.length - 1) * 10 < 100 ? true : false;
      //Ship points left <<.
      case 3:
        return Math.floor((coord - (ship.length - 1)) / 10) ===
          Math.floor(coord / 10)
          ? true
          : false;
    }
  };

  const placeShip = (ship, coord) => {
    // Checks if ship placement is valid based on ship orientation.
    if (placementCheck(ship, coord)) {
      switch (ship.orientation) {
        //Up
        case 0:
          //Loops through all squares the ship will occupy, changing their occupied property to true, and adding the ship to their shipLink property.
          for (let i = 0; i < ship.length; i++) {
            board[coord - i * 10].occupied = true;
            board[coord - i * 10].shipLink = ship;
          }
          return;
        //Right
        case 1:
          //Loops through all squares the ship will occupy, changing their occupied property to true, and adding the ship to their shipLink property.
          for (let i = 0; i < ship.length; i++) {
            board[coord + i].occupied = true;
            board[coord + i].shipLink = ship;
          }
          return;
        //Down
        case 2:
          //Loops through all squares the ship will occupy, changing their occupied property to true, and adding the ship to their shipLink property.
          for (let i = 0; i < ship.length; i++) {
            board[coord + i * 10].occupied = true;
            board[coord + i * 10].shipLink = ship;
          }
          return;
        //Left
        case 3:
          //Loops through all squares the ship will occupy, changing their occupied property to true, and adding the ship to their shipLink property.
          for (let i = 0; i < ship.length; i++) {
            board[coord - i].occupied = true;
            board[coord - i].shipLink = ship;
          }
          return;
      }
    }
    //Returns Invalid Placement if placement is found to be invalid.
    return "Invalid Placement";
  };

  const isSunk = (coord) => {
    if (board[coord].occupied) {
      board[coord].isSunk ? true : false;
    }
    return "No ship found at coordinate.";
  };

  const allSunk = () => {
    // Pulls all coordinates that are occupied.
    const allShipTiles = board.filter((obj) => obj.occupied === true);
    // Declare new ship array.
    let allShips = [];
    //Loop through allShipTiles, push to allShips.  Ignore if it already exists in allShips.
    allShipTiles.forEach((shipTile) => {
      if (!allShips.includes(shipTile)) {
        allShips.push(shipTile);
      }
    });

    console.log(allShipTiles);

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

  return {
    owner,
    board,
    placementCheck,
    placeShip,
    isSunk,
    allSunk,
    revealToggle,
  };
};

export default gameboard;
