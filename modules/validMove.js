import { talbar } from "../main.js";

export function zuvHudulguun(matrix, cellRow, cellCol) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] && (cellCol + col < 0 || cellCol + col >= talbar[0].length || cellRow + row >= talbar.length || talbar[cellRow + row][cellCol + col])
            ){
        return false;
        }
        }
    }
    return true;
}