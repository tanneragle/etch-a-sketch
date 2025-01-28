// Global Variables
const container = document.getElementById("container");

let gridSize = 16

console.log(gridSize ** 2);

// Loop for generating grid
for(let i = 0; i <= `${gridSize ** 2}`; i++) {
    const divBox = document.createElement("div");
    divBox.setAttribute("id", "divBox");
    divBox.style.width = "100%";
    divBox.style.aspectRatio = "1 / 1"; 
    divBox.style.boxSizing = "border-box";
    divBox.style.border = "1px solid black";
    container.appendChild(divBox); 
}