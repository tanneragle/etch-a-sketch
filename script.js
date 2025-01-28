// Global Variables
const container = document.getElementById("container");
const containerWidth = container.offsetWidth;

let gridSize = 10

const squareSize = containerWidth / gridSize;

// Loop for generating grid
for(let i = 0; i < `${gridSize ** 2}`; i++) {
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

