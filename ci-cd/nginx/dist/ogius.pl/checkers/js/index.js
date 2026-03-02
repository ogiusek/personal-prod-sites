let board = getNewBoard();
let turn = values.lightChecker;
let selectedElement = null;
let moves = getMoves(board, turn);
const restart = () => {
  board = getNewBoard();
  turn = values.lightChecker;
  selectedElement = null;
  moves = getMoves(board, turn);
  draw(board);
}

const switchTurn = () => (values.darkChecker * (turn == values.lightChecker)) + (values.lightChecker * (turn == values.darkChecker));

function handleClick(cI, tI) {
  if (board[cI][tI].value === values.notForUse) return;
  if (!moves.length) {
    turn = switchTurn();
    board = promote(board);
    moves = getMoves(board, turn);
  }

  const hideMoves = () => {
    board.flat().map(e => (e.value === values.move) && (e.value = values.empty));
    selectedElement = null;
  }

  if (isTurn(board[cI][tI].value, turn)) {
    // select
    board.flat().map(e => [values.empty, values.move].includes(e.value) && (e.value = canMove(moves, cI, tI, e.x, e.y) ? values.move : values.empty));
    selectedElement = board[cI][tI];
  } else if (board[cI][tI].value === values.move && canMove(moves, selectedElement?.x, selectedElement?.y, cI, tI)) {
    // move
    const selectedMove = moves.filter(e => e.from.x === selectedElement.x && e.to.x === cI &&
      e.from.y === selectedElement.y && e.to.y === tI);

    if (selectedMove.length === 1) {
      const move = performMove(board, selectedMove[0]);
      board = move.board;
      if (move.endedMove) {
        turn = switchTurn();
        moves = getMoves(board, turn);
      } else
        moves = getMoves(board, turn, board[selectedMove[0].to.x][selectedMove[0].to.y]);
    }

    hideMoves();
  } else // unselect
    hideMoves();


  // where add enemys
  // if (turn === values.darkChecker) {
  //   const movesList = getFullMoves(board, turn);
  //   if (movesList.length > 0)
  //     board = performFullMove(board, movesList[Math.floor(Math.random() * movesList.length)]);

  //   turn = switchTurn();
  //   moves = getMoves(board, turn);
  // }

  draw(board);
}

draw(board);
