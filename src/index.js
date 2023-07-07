import "./style.css";
import { renderAI, renderPlayer } from "./rendering/renderpage";
import gameboard from "./gameboard";
import playerPlacement from "./rendering/placement.js";
import player from "./player.js";
import { aiPlacement } from "./aiPlayer/aiPlayer";

let aiBoard = gameboard("AI");
let playerBoard = gameboard("Player");
let humanPlayer = player("Human");
let aiPlayer = player("AI");

console.log(aiBoard.board);

renderAI(aiBoard);
renderPlayer(playerBoard);

playerPlacement(humanPlayer.ships, playerBoard, aiBoard, humanPlayer);
aiPlacement(aiPlayer, aiBoard);
