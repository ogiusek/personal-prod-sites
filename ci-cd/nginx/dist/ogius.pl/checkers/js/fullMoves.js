/* moves list structure
let moves = [
  [{from: {x: 0, y: 0},kills: {x: 0, y: 0},to: {x: 1, y: 1},canBeatAfter: false},
   {from: {x: 1, y: 1},kills: {x: 0, y: 0},to: {x: 2, y: 2},canBeatAfter: false}]
];
*/

function getFullMoves(board, turn) {
  const moves = [];

  const addBeats = (e, lastMoves = []) => {
    const newBoard = [...lastMoves, e].reduce((acc, e) => performMove(acc, e).board, JSON.parse(JSON.stringify(board)));

    const newMoves = getMoves(newBoard, turn, newBoard[e.to.x][e.to.y]);
    if (!newMoves.length)
      moves.push([...lastMoves, e]);
    else {
      if (newMoves.includes(e => e.length === 0))
        moves.push([...lastMoves, e]);

      newMoves.map(move => (move.canBeatAfter &&
        addBeats(move, [...lastMoves, e])))
    }
  };

  const newMoves = getMoves(JSON.parse(JSON.stringify(board)), turn);
  newMoves.map((e, i) => {
    if (e.canBeatAfter)
      addBeats(e);
    else
      moves.push([e]);
  });

  return moves;
}

const performFullMove = (board, moves) => moves.reduce((acc, move) => {
  return performMove(acc, move).board;
}, JSON.parse(JSON.stringify(board)));
