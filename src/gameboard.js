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

  return { owner, board, placementCheck };
};

export default gameboard;
