const gameboard = (player) => {
    const owner = player;

    let board = [];
    for (let i = 0; i <= 99; i++) {
        board.push({
            squareID: i,
            occupied: false,
            revealed: false,
            hitMiss: null,
            shipLink: null
        });
    }


    const placementCheck = (ship, coord) => {
        switch (ship.orientation) {
            case 0:
                return (coord - (ship.length * 10)) > 0 ? true : false;
                break;
            case 1:
                // I have no idea how to check for horizontal overflow.  Need time.
                break;
            case 2:
                return (coord + (ship.length * 10)) < 100 ? true : false;
                break;
            case 3:
                // See case 1.
                break;
        }       

    }


    return {owner, board, placementCheck }
}


export default gameboard;

