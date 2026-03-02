function promote(board) {
  let newBoard = JSON.parse(JSON.stringify(board));

  newBoard.flat().map(e => {
    if (e.y === board.length - 1 && e.value === values.darkChecker) e.value = values.darkQueen;
    if (e.y === 0 && e.value === values.lightChecker) e.value = values.lightQueen;
  });

  return newBoard;
}