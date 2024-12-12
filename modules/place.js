import { showGameOver } from "./gameOver.js";
import { tetromino } from "../main.js";
import { talbar } from "../main.js";
import { nextDurs } from "./nextDurj.js";
import { setTetromino } from "../main.js";
import { setScore } from "../main.js";
const { getNextTetromino } = nextDurs();

export function tetrominoBairluulah() {
    for (let row = 0; row < tetromino.matrix.length; row++){
        for (let col = 0; col < tetromino.matrix[row].length; col++){
            if (tetromino.matrix[row][col]) {

            if (tetromino.row + row < 0) {
                showGameOver();
                console.log("togloom duuslaa");
                return;
            }

            talbar[tetromino.row + row][tetromino.col + col] = tetromino.name;
            
        }
    }
    }

    for (let row = talbar.length - 1; row >= 0; ) {
        if (talbar[row].every(cell => !!cell)) {
        for (let r = row; r >= 0; r--) {
            for (let c = 0; c < talbar[r].length; c++) {
                talbar[r][c] = talbar[r-1][c];
            }
        }
        document.getElementById("score").textContent = setScore();
    }
    else {
        row--;
    }
    }
    // tetromino = getNextTetromino();
    setTetromino(getNextTetromino())
}