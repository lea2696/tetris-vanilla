const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
//Calculate the size of the canvas
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

const moves = {
  [KEY.LEFT]: p => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]: p => ({ ...p, y: p.y + 1 }),
  [KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
  [KEY.TOP]: p => board.rotate(p)
};

let board = new Board();

function play() {
  board.reset();
  let piece = new Piece(ctx);
  piece.draw();
  board.piece = piece;
}
document.addEventListener("keydown", event => {
  if (event.keyCode === KEY.SPACE) {
    let p = moves[event.keyCode](board.piece);

    while (board.valid(p)) {
      board.piece.move(p);
      p = moves[KEY.DOWN](board.piece);
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    board.piece.draw();
  }

  if (moves[event.keyCode]) {
    // Stop the event from bubbling.
    event.preventDefault();

    // Get new state of piece
    let p = moves[event.keyCode](board.piece);
    console.log(p);
    if (board.valid(p)) {
      // If the move is valid, move the piece.
      board.piece.move(p);
      console.log("entre");

      // Clear old position before drawing.
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      board.piece.draw();
    }
  }
});
