# Battleship

Implementation of the board game "Battleship" using test driven development.

## NEED TO DO

- Make placement check take into account other ships.

## Planning

Largely going to go off of the Odin Project requirements, and craft my plan of attack. There are no explicit explanation of the game rules, so I'm going to go off of the standard rules of the board game (https://www.hasbro.com/common/instruct/battleship.pdf).

TOP Lists the ship as the first portion to work on, but my initial brainstorming feels like approaching it from the gameboard first will be better. We'll see if this was a mistake. I plan to create each test using the features described in this planning document.

### Gameboard

The gameboard is a class. It contains an array of objects, each representing a square of the board. Each square will hold a unique ID, 0-99. Each square will also hold values "occupied" and "shown". They will also contain a key that links to what ship is occupying it.

#### Gameboard Class

- Constructor initializes and creates a unique class object.
  - Gameboard: array of objects(gameboard squares).
    - Objects contain keys for unique ID, ship occupation(boolean), revealed status, hit/miss status (null = unknown, true = hit, false = miss), and link to ship occupying (if true).
  - Owner: Player 1 or Player 2

#### Gameboard Methods

- Place ship. (Will require ship class to be finished first. Use mock ship object for tests, go back and revise during ship class creation).
  - Receive ship size, orientation, and check if the coordinate is a valid placement.
    - If so mark square as occupied.
    - Link ship to squares.
- Check if ship is sunk. (Will require full ship implementation first).
- Check if _all_ ships are sunk.
- Toggle square revealed status. (Probably only for player. Not sure how computer AI will work yet.)
- Receive attack function.
  - Targets coordinate (square id's in gameboard array)
  - Checks if square has been revealed or not. Cannot hit if it has.
  - If valid attack, toggle revealed on square, check if it's occupied.
    - If occupied, toggle hit from null to true.
      - Send hit function to ship linked to square.
    - If empty, toggle hit from null to false.

### Ship

Okay it kind of makes sense after planning the gameboard why the ship needed to be made first, but planning out the gameboard helped me figure out what I needed from the ship, so it worked out.

#### Ship class

- Constructor with the following properties:
  - Length : int, max is 5
  - Orientation : 0 = up, 1 = east, 2 = south, 3 = west, null by default
  - Hits : int, 0 by default.
  - shipID: unique int
  - isPlaced: boolean, false by default

#### Ship Methods

- Hit function. Increases 'Hits' value.
- isSunk : compares 'Hits' to 'Length'. If they match, return true. If not, return false.
- changeOrientation : changes the orientation of the ship. Will only be used in the placement phase.

### Player

#### Player class

- Constructor
  - ships: [];
  - win: boolean;

#### Player methods

- takeTurn

  - receives coordinate (0-99). calls receiveHit on gameboard with said coordinate.

- takeTurnAI
  - find random legal move, take it.
  - will expand with actual strategy later?
