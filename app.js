const sliderValue = document.querySelector("input");
sliderOutput.textContent = "32 x 32";
sliderValue.value = 32;

sliderValue.addEventListener("input", (e) => {
  sliderOutput.textContent = `${e.target.value} x ${e.target.value}`;
  createGrid(e.target.value);
});

const grid = document.querySelector("#grid");
let isDrawing = false;
let useRandom = false;

const random = document.querySelector("#random");

randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let final = `rgb(${r}, ${g}, ${b})`;

  return final;
};

random.addEventListener("click", () => {
  useRandom = !useRandom;
  console.log("Random flag:", useRandom);
});

changeColor = (e) => {
  if (isDrawing) {
    if (useRandom) {
      e.target.style.backgroundColor = randomColor();
    } else {
      e.target.style.backgroundColor = "black";
    }
  }
};

createGrid = (size) => {
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");

    gridElement.addEventListener("click", (e) => {
      if (useRandom) {
        e.target.style.backgroundColor = randomColor();
      } else {
        e.target.style.backgroundColor = "black";
      }
    });

    gridElement.addEventListener("mouseenter", (e) => {
      if (isDrawing) {
        if (useRandom) {
          e.target.style.backgroundColor = randomColor();
        } else {
          e.target.style.backgroundColor = "black";
        }
      }
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

    gridElement.classList.add("gridElement");
    grid.append(gridElement);
  }
};

createGrid(sliderValue.value);
