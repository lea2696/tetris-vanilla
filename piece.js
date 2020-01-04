class Piece {
  x;
  y;
  color;
  shape;
  ctx;

  constructor(ctx) {
    this.ctx = ctx;
    this.spawn();
  }

  spawn() {
    this.color = "blue";
    this.shape = [
      [2, 0, 0],
      [2, 2, 2],
      [0, 0, 0]
    ];

    // Starting position.
    this.x = 3;
    this.y = 0;
  }

  draw() {
    this.ctx.fillStyle = this.color; //The ctx.fillStyle style the piece that is in the canvas
    this.shape.forEach((row, y) => {
      //We are using the index of the matrix to identify the level of the piece
      row.forEach((value, x) => {
        //The same of the level but in this case the x orientation
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1); //This functions has the follow params: x, y, width, height and fill the structure that draws
        }
      });
    });
  }
}
