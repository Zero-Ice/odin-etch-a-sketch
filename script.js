const container = document.querySelector(".container");

const DEFAULT_SIZE = 16;

function generateGrid(size) {
  const container = document.querySelector(".container");
  if (container !== undefined) {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
  }

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

function getGridSize() {
  let newSize = prompt("Enter grid size");
  return newSize;
}

generateGrid(DEFAULT_SIZE);

generateGridButton = document.querySelector("button");
generateGridButton.addEventListener("click", () => {
  let newSize = getGridSize();
  newSize = Math.min(100, newSize);
  generateGrid(newSize);
});
