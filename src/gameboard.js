const gameboard = () => {
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


    return {board, }
}


export default gameboard;

