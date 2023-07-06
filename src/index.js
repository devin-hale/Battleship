import "./style.css";
import { renderAI, renderPlayer } from "./rendering/renderpage";
import gameboard from "./gameboard";
import playerPlacement from "./rendering/placement.js"
import player from './player.js'

let aiBoard = gameboard("AI");
let playerBoard = gameboard("Player");
let humanPlayer = player('Human');

humanPlayer.ships[0].changeOrientation(0);

renderAI(aiBoard);
renderPlayer(playerBoard);

playerPlacement(humanPlayer.ships[0], playerBoard);
