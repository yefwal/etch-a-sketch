const grid = document.querySelector("#grid");
let isDrawing = false;

changeColor = (e) => {
  if (isDrawing) {
    e.target.style.backgroundColor = "black";
  }
};

createGrid = (size) => {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.addEventListener("mousedown", () => {
      isDrawing = true;
    });
    gridElement.addEventListener("mouseup", () => {
      isDrawing = false;
    });
    grid.addEventListener("mouseleave", (e) => {
      isDrawing = false;
    });
    gridElement.addEventListener("mouseenter", changeColor);
    gridElement.classList.add("gridElement");
    grid.append(gridElement);
  }
};

createGrid(16);

/* 

Goal: create 16x16 grid 

- print out rows of divs and columns of divs

*/
