const canMove = (moves, x, y, toX, toY) => !!moves.filter(e => e.from.x === x && e.from.y === y && e.to.x === toX && e.to.y === toY).length;
const isTurn = (elem, turn) => (elem === turn || elem === turn + 2);
const isOtherColor = (c1, c2) => [values.darkChecker, values.darkQueen].includes(c1) ?
  [values.lightChecker, values.lightQueen].includes(c2) :
  [values.darkChecker, values.darkQueen].includes(c2);

const getNewBoard = (x = 8, y = 8, fill = 3) =>
  Array(x).fill('').map((_, tI) =>
    Array(y).fill('').map((_, cI) => ({
      x: tI, y: cI,
      value: (cI + tI) % 2 == 1 ?
        values.notForUse :
        cI < fill ?
          values.darkChecker :
          cI > y - 1 - fill ? values.lightChecker : values.empty
    })));

const draw = (board) => board.flat().map(e => {
  const element = getElement(e.x, e.y);
  const newValue = `--value: ${board[e.x][e.y].value};`;
  if (element.style.cssText !== newValue)
    element.style = newValue;
  document.getElementById("turn").innerHTML = isTurn(values.darkChecker, turn) ? "dark turn" : "white turn";
});