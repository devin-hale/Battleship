import gameboard from "../src/gameboard";

test('Gameboard Properties: Initial', () => {
    const player = gameboard()
    expect(player.board[2].squareID).toEqual(2);
    expect(player.board[99].occupied).toEqual(false);
    expect(player.board[0].revealed).toEqual(false);
    expect(player.board[45].hitMiss).toEqual(null);
    expect(player.board[1].shipLink).toEqual(null);
});