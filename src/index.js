import "./style.css";
import { renderAI, renderPlayer } from "./rendering/renderpage";
import gameboard from "./gameboard";

let aiBoard = gameboard("AI");
let playerBoard = gameboard("Player");

renderAI(aiBoard);
renderPlayer(playerBoard);
