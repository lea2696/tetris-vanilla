const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

//Calculate the size of the canvas

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);