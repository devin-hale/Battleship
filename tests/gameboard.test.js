import gameboard from "../src/gameboard";

//Initialize
const testBoard = gameboard('John');


describe('Gameboard Properties', () => {

    test('Owner', () => {
        expect(testBoard.owner).toBe('John');
    });
    
    
    test('Initial', () => {
        expect(testBoard.board[2].squareID).toEqual(2);
        expect(testBoard.board[99].occupied).toEqual(false);
        expect(testBoard.board[0].revealed).toEqual(false);
        expect(testBoard.board[45].hitMiss).toEqual(null);
        expect(testBoard.board[1].shipLink).toEqual(null);
    });
    
})

describe('Ship Placement Method', () => {

    //fake ship
    let ship = {length: 5, orientation: null}

    test('Place valid vertical.', () => {
        ship.orientation = 2;
        expect(testBoard.placementCheck(ship, 0)).toBeTruthy();

    })

    test('Place invalid vertical.', () => {
        ship.orientation = 0;
        expect(testBoard.placementCheck(ship, 0)).toBeFalsy();
    })


})
