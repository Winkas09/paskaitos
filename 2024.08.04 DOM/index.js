function createTextElement(text) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

document.body.appendChild(createTextElement("Hello, DOM!"));

const name = "John";
document.getElementById("name").textContent = name;

document.querySelector(".bluetext > span").textContent = "blue";

const firstListItem = document.querySelector("li:first-child");
const secondListItem = document.querySelector("li:nth-child(2)");

const bmw_group = firstListItem.textContent;
const vw_group = secondListItem.textContent;

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;

function createList(items) {
  const ul = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent;
    ul.appendChild(li);
  });
  return ul;
}

document.body.appendChild(createList(["Pienas", "Duona", "Kiaušiniai"]));

function highlightWinner() {
  const board = document.querySelectorAll("#ticktactoe tr");
  const matrix = Array.from(board, (row) => Array.from(row.ceels, (cell) => cell.textContent));
}

function checkAndHighlight(cells, indices) {
  if (cells[0] !== "" && new Set(cells).size === 1) {
    indices.forEach(([row, col]) => (board[row].cells[col].style.backgroundColor = "lightgreen"));
    return true;
  }
  return false;
}

for (let i = 0; i < 3; i++) {
  const row = matrix[i];
  const col = matrix.map((row) => row[i]);

  if (
    checkAndHighlight(row, [
      [i, 0],
      [i, 1],
      [i, 2],
    ])
  )
    return;
  if (
    checkAndHighlight(col, [
      [0, i],
      [1, i],
      [2, i],
    ])
  )
    return;
}

const diag1 = [matrix[0][0], matrix[1][1], matrix[2][2]];
const diag2 = [matrix[0][2], matrix[1][1], matrix[2][0]];

if (
  checkAndHighlight(diag1, [
    [0, 0],
    [1, 1],
    [2, 2],
  ])
)
  return;
if (
  checkAndHighlight(diag2, [
    [0, 2],
    [1, 1],
    [2, 0],
  ])
)
  return;

highlightWinner();
