class Board {
  grid;

  reset() {
    this.grid = this.getEmptyBoard();
  }
  valid(p) {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        console.log(y);
        return (
          this.isEmpty(value) || (this.insideWalls(x) && this.aboveFloor(y))
        );
      });
    });
  }

  insideWalls(x) {
    return x >= 0 && x <= 9;
  }
  isEmpty(value) {
    return value === 0;
  }

  aboveFloor(y) {
    return y <= 19;
  }

  getEmptyBoard() {
    return Array.from(
      { length: ROWS },
      () => Array(COLS).fill(0) //This create an array of 20 elements and fill that element with an array of 10 elements with the value of 0
    );
  }
}
