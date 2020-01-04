class Board {
  grid;

  reset() {
    this.grid = this.getEmptyBoard();
  }
  getEmptyBoard() {
    return Array.from(
      { length: ROWS },
      () => Array(COLS).fill(0) //This create an array of 20 elements and fill that element with an array of 10 elements with the value of 0
    );
  }
}
