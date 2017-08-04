function chessboard (size) {
  let white = " ", black = "#";
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      if ((i+j)%2 == 0) {
        row += white;
      } else {
        row += black;
      }
    }
    console.log(row);
  }
};

chessboard (8);
