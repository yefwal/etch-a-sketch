const grid = document.querySelector("#grid");
let isDrawing = false;

const sliderValue = document.querySelector("input");
sliderOutput.textContent = 16;
sliderValue.value = 16;

sliderValue.addEventListener("input", (e) => {
  sliderOutput.textContent = e.target.value;
  createGrid(e.target.value);
});

changeColor = (e) => {
  if (isDrawing) {
    e.target.style.backgroundColor = "black";
  }
};

createGrid = (size) => {
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.addEventListener("click", (e) => {
      e.target.style.backgroundColor = "black";
    });
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

createGrid(sliderValue.value);
