import { daraalal, tetrominos, talbar } from "../main.js";

export function nextDurs(){

function generateSequence() {
    const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

    while (sequence.length) {
        const rand = Math.floor(Math.random() * sequence.length);
        const name = sequence.splice(rand, 1)[0];
        daraalal.push(name);
    }
}

function getNextTetromino() {
    if (daraalal.length === 0) {
        generateSequence();
    }

    const name = daraalal.pop();
    const matrix = tetrominos[name];
    const col = talbar[0].length / 2 - Math.ceil(matrix[0].length / 2);
    const row = name === 'I' ? -1 : -2;                              
    return {
        name: name,         
        matrix: matrix,  
        row: row,  
        col: col      
        };
    }
    return{
        getNextTetromino
    };
}
