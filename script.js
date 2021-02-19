
// Creates a 16x16 grid. gridNumber = how many grids per row
function createGrid() {

    const gridSize = 480 / gridNumber;

    for(let i = 0; i < gridNumber * gridNumber; i++) {
        const main = document.querySelector("#grid-container");

        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        //gridItem.textContent = i + 1;
        gridItem.style.border = "1px solid rgb(204, 204, 204)";
        gridItem.style.width = gridSize - 2 + "px";
        gridItem.style.height = gridSize - 2 + "px";

        main.appendChild(gridItem);
    }
}

// Removes grid
function removeGrid() {
    const main = document.querySelector("#grid-container");
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => {
        main.removeChild(gridItem);
    });
};

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

let gridNumber = 16;
createGrid();

function getGridItems() {
    return document.querySelectorAll(".grid-item");
}

function addEventListenersToButtons() {
    let gridItems = getGridItems();
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            let randomColor = getRandomColor();
            gridItem.style.backgroundColor = "#" + randomColor;
            gridItem.style.border = "1px solid #" + randomColor;
        });
    });
}

addEventListenersToButtons();

let buttons = document.querySelectorAll(".reset-button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        gridNumber = button.textContent;
        removeGrid();
        createGrid();
        addEventListenersToButtons();
    });
});

