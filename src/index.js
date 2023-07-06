import "./style.css";
import { renderAI, renderPlayer } from "./rendering/renderpage";
import gameboard from "./gameboard";
import playerPlacement from "./rendering/placement.js";
import player from "./player.js";

let aiBoard = gameboard("AI");
let playerBoard = gameboard("Player");
let humanPlayer = player("Human");

renderAI(aiBoard);
renderPlayer(playerBoard);

playerPlacement(humanPlayer.ships, playerBoard, aiBoard);
