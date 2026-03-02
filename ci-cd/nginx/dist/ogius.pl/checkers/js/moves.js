/* moves structure
let moves = [{
  from: {x: 0, y: 0},
  kills: {x: 0, y: 0},
  to: {x: 1, y: 1},
  canBeatAfter: false
}]*/

function getMoves(board, turn, lastBeat = undefined) {
  const moves = [];

  const getBeatings = (t) => {
    if (!isTurn(t.value, turn)) return;

    const availableDirections = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
    switch (t.value) {
      case values.lightChecker:
      case values.darkChecker:
        availableDirections.map(e => {
          const newX = t.x + e[0] * 2,
            newY = t.y + e[1] * 2;
          if (newX >= 0 && newY >= 0 && newX < board.length && newY < board[newX].length &&
            isOtherColor(t.value, board[t.x + e[0]][t.y + e[1]].value) &&
            [values.move, values.empty].includes(board[newX][newY].value)) {
            moves.push({
              from: { x: t.x, y: t.y },
              kills: { x: t.x + e[0], y: t.y + e[1] },
              to: { x: newX, y: newY }, canBeatAfter: true
            });
          }
        });
        break;
      case values.lightQueen:
      case values.darkQueen:
        (() => {
          const availableDirections = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
          const addMove = (newX, newY, direction) => {
            if (!(newX + direction[0] >= 0 && newX + direction[0] < board.length &&
              newY + direction[1] >= 0 && newY + direction[1] < board[newX].length))
              return;

            if ([values.empty, values.move].includes(board[newX][newY].value))
              return addMove(newX + direction[0], newY + direction[1], direction);

            if ([values.empty, values.move].includes(board[newX + direction[0]][newY + direction[1]].value) &&
              isOtherColor(board[newX][newY].value, turn))
              moves.push({
                from: { x: t.x, y: t.y },
                kills: { x: newX, y: newY },
                to: { x: newX + direction[0], y: newY + direction[1] }, canBeatAfter: true
              });

            return false;
          };
          availableDirections.map(e => addMove(t.x + e[0], t.y + e[1], e));
        })();
        break;
    }
  }

  const getMoves = (t) => {
    if (!isTurn(t.value, turn)) return;

    switch (t.value) {
      case values.lightChecker:
        (() => {
          const availableDirections = [[-1, -1], [1, -1]];
          availableDirections.map(e => {
            const newX = t.x + e[0],
              newY = t.y + e[1];
            if (newX >= 0 && newY >= 0 && newX < board.length && newY < board[newX].length &&
              [values.move, values.empty].includes(board[newX][newY].value)) {
              moves.push({ from: { x: t.x, y: t.y }, to: { x: newX, y: newY }, canBeatAfter: false });
            }
          });
        })();
        break;
      case values.darkChecker:
        (() => {
          const availableDirections = [[-1, 1], [1, 1]];
          availableDirections.map(e => {
            const newX = t.x + e[0],
              newY = t.y + e[1];
            if (newX >= 0 && newY >= 0 && newX < board.length && newY < board[newX].length &&
              [values.move, values.empty].includes(board[newX][newY].value)) {
              moves.push({ from: { x: t.x, y: t.y }, to: { x: newX, y: newY }, canBeatAfter: false });
            }
          });
        })()
        break;
      case values.lightQueen:
      case values.darkQueen:
        (() => {
          const availableDirections = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
          const addMove = (newX, newY, direction) => {
            if (!(newX >= 0 && newY >= 0 && newX < board.length && newY < board[newX].length) ||
              ![values.empty, values.move].includes(board[newX][newY].value))
              return;

            moves.push({ from: { x: t.x, y: t.y }, to: { x: newX, y: newY }, canBeatAfter: false });
            addMove(newX + direction[0], newY + direction[1], direction);
          };
          availableDirections.map(e => addMove(t.x + e[0], t.y + e[1], e));
        })();
        break;
    }
  }

  if (lastBeat) {
    getBeatings(lastBeat);
    return moves;
  }

  board.flat().map(e => getBeatings(e));
  if (!moves.length) board.flat().map(e => getMoves(e));

  return moves;
}

function performMove(board, move) {
  let newBoard = JSON.parse(JSON.stringify(board));
  let endedMove = false;

  if (move.kills) newBoard[move.kills.x][move.kills.y].value = values.empty;

  newBoard[move.to.x][move.to.y].value = newBoard[move.from.x][move.from.y].value;
  newBoard[move.from.x][move.from.y].value = values.empty;

  if (!move.canBeatAfter) {
    endedMove = true;
    newBoard = promote(newBoard);
  }
  else if (!getMoves(newBoard, turn, newBoard[move.to.x][move.to.y]).length)
    endedMove = true;

  return {
    board: newBoard,
    endedMove: endedMove
  };
}
