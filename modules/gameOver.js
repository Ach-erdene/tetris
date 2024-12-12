import { tuluv } from "../main.js";
import { changeGO } from "../main.js";
var canvas;
var context;

export function showGameOver() {
    canvas = document.getElementById('gameOver');
    context = canvas.getContext('2d');
    cancelAnimationFrame(tuluv);
    changeGO();
    console.log("showGO");
    context.fillStyle = 'black';
    context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
    context.fillStyle = 'white';
    context.font = '18px monospace';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('ТОГЛООМ ДУУСЛАА!!!', canvas.width / 2, canvas.height / 2);
}