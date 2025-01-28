// Global Variables
const container = document.getElementById("container");
const containerWidth = container.offsetWidth;
const slider = document.getElementById("gridSlider");
const gridValueDisplay = document.getElementById("gridValue");

//Grid Size
let gridSize = 16



function generateGrid() {
    for(let i = 0; i < gridSize ** 2; i++) {
        const squareSize = containerWidth / gridSize;
        const divBox = document.createElement("div");
        divBox.setAttribute("id", "divBox");
        divBox.style.width = `${squareSize}px`;
        divBox.style.height = `${squareSize}px`;
        divBox.style.aspectRatio = "1 / 1"; 
        divBox.style.boxSizing = "border-box";
        divBox.style.border = "1px solid black";
        divBox.style.backgroundColor = "white";
        divBox.addEventListener("mouseover", () => {
            divBox.style.backgroundColor = "black";
        });
        container.appendChild(divBox); 
    }
}

generateGrid();

slider.addEventListener("input", () => {
    gridValueDisplay.textContent = slider.value;
    gridSize = slider.value;
    container.innerHTML = "";
    generateGrid();
  });