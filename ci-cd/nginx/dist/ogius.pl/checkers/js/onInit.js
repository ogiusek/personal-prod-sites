const app = document.getElementById('app');
const columnClass = "column";
const tileClass = "tile";

const getElement = (x, y) => document.getElementsByClassName(columnClass)[x]?.getElementsByClassName(tileClass)[y];

const values = {
  notForUse: -1,
  empty: 0,

  darkChecker: 1,
  lightChecker: 2,

  darkQueen: 3,
  lightQueen: 4,

  move: 5
};

const createHTMLBoard = (x, y) => (app.innerHTML = `${Array(x).fill(``).map((_, cI) =>
  `<div class="${columnClass}">${Array(y).fill(``).map((_, i) =>
    `<div class="${tileClass} ${(cI + i) % 2 == 0 ? 'even' : ''}" 
            style="--value: ${values.empty};"
            onclick="handleClick(${cI}, ${i});">
      </div>`).join('')}
    </div>`).join('')}`);
createHTMLBoard(8, 8);
