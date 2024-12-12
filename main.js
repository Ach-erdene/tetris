import { nextDurs } from "./modules/nextDurj.js";
import { rotate } from "./modules/rotate.js";
import { zuvHudulguun } from "./modules/validMove.js";
import { tetrominoBairluulah } from "./modules/place.js";

const { getNextTetromino } = nextDurs();
const canvas = document.getElementById('hangmanCanvas');
const context = canvas.getContext('2d');
export const hemjee = 32;
export const daraalal = [];
export const talbar = [];

for (let row = -2; row < 20; row++) {
    talbar[row] = [];

    for (let col = 0; col < 10; col++) {
        talbar[row][col] = 0;
    }
}

export const tetrominos = {
    'I': [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ],
    'J': [
        [1,0,0],
        [1,1,1],
        [0,0,0],
    ],
    'L': [
        [0,0,1],
        [1,1,1],
        [0,0,0],
    ],
    'O': [
        [1,1],
        [1,1],
    ],
    'S': [
        [0,1,1],
        [1,1,0],
        [0,0,0],
    ],
    'Z': [
        [1,1,0],
        [0,1,1],
        [0,0,0],
    ],
    'T': [
        [0,1,0],
        [1,1,1],
        [0,0,0],
    ]
};

export const colors = {
    'I': '#39FF14', 
    'O': '#FFFF00', 
    'T': '#8A2BE2', 
    'S': '#00FF00', 
    'Z': '#FF073A', 
    'J': '#00BFFF', 
    'L': '#FF4500'  
};



var count = 0;
var speed = 35;
function resCount(){
    count = 0;
}
export let tetromino = getNextTetromino();
export let tuluv = null; 
export let gameOver = false;
let score = 0;
export function changeGO(){
    gameOver = true;
}
export function setScore(){
    return score = score + 100;
}
export function setTetromino(newTetromino) {
    tetromino = newTetromino;
}
function loop() {
    tuluv = requestAnimationFrame(loop);
    context.clearRect(0,0,canvas.width,canvas.height);

    for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 10; col++) {
        if (talbar[row][col]) {
            const name = talbar[row][col];
            context.fillStyle = colors[name];

            context.fillRect(col * hemjee, row * hemjee, hemjee-1, hemjee-1);
        }
        }
    }

    if (tetromino) {

    if (++count > speed) {
        tetromino.row++;
        if(speed > 10){
            speed = speed - 0.1;
        }
        count = 0;

        if (!zuvHudulguun(tetromino.matrix, tetromino.row, tetromino.col)) {
            tetromino.row--;
            tetrominoBairluulah();
        }
    }

    context.fillStyle = colors[tetromino.name];

    for (let row = 0; row < tetromino.matrix.length; row++) {
        for (let col = 0; col < tetromino.matrix[row].length; col++) {
            if (tetromino.matrix[row][col]) {

            context.fillRect((tetromino.col + col) * hemjee, (tetromino.row + row) * hemjee, hemjee-1, hemjee-1);
            }
        }
    }   
    }
}

document.addEventListener("keydown", (e) => {
    console.log(gameOver);
    if (gameOver) return;

    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const col = e.key === "ArrowLeft" ? tetromino.col - 1 : tetromino.col + 1;
        if (zuvHudulguun(tetromino.matrix, tetromino.row, col)) {
            tetromino.col = col;
        }
    }

    if (e.key === "ArrowUp") {
        const matrix = rotate(tetromino.matrix);
        if (zuvHudulguun(matrix, tetromino.row, tetromino.col)) {
            tetromino.matrix = matrix;
        }
    }

    if (e.key === "ArrowDown") {
        const row = tetromino.row + 1;
        if (!zuvHudulguun(tetromino.matrix, row, tetromino.col)) {
            tetromino.row = row - 1;
            tetrominoBairluulah();
            return;
        }
        tetromino.row = row;
    }
});
var lead;
document.getElementById("res").addEventListener("click", function(){
    for (let row = -2; row < 20; row++) {
        talbar[row] = [];
    
        for (let col = 0; col < 10; col++) {
            talbar[row][col] = 0;
        }
    }
    lead = document.createElement("div");
    lead.textContent = score;
    document.getElementById("profile").appendChild(lead);
    resCount();
    tetromino = getNextTetromino();
    tuluv = null;
    gameOver = false;
    score = 0;
    speed = 35;
    count = 0;
    document.getElementById("score").textContent = 0;
    if(document.getElementById("gameOver") !== null){
        document.getElementById("gameOver").remove();
    }
    const reGameOva = document.createElement("canvas");
    reGameOva.id = "gameOver";
    reGameOva.width = 320;
    reGameOva.height = 640;
    const canvaaContainer = document.querySelector("body > div#main > div#canvaa");
    if (!canvaaContainer) {
        console.log("canvaa gesen id tai zuil oldsongui");
        return;
    }

    canvaaContainer.appendChild(reGameOva);
    tuluv = requestAnimationFrame(loop);
})
tuluv = requestAnimationFrame(loop);
