class Cell {
   
    constructor() {
        this.cleared = false;
        this.bomb = false;
        this.image = null;
    }

    press() {
        this.cleared = true;
    }
}

let cellSize = 40;
let gridSize = 16;
let width = cellSize * gridSize;
let height = cellSize * gridSize;
let grid = [];

function setup() {
    createCanvas(width, height);  
    
    for (var i = 0; i < gridSize; i++) {
        var row = [];
        for (var j = 0; j < gridSize; j++) {
            row.push(new Cell());
        }
        grid.push(row);
    }
}

function draw() {
    background(255,255,255);
    
    fill(150);
    for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
            if(grid[j][i].cleared) {
                fill(255);
            } else {
                fill(150);
            }
            rect(j * cellSize, i * cellSize, cellSize, cellSize)
        }
    }
}

function mouseClicked(event) {
    if (mouseX >= 0 && mouseX < cellSize * gridSize && mouseY >= 0 && mouseY < cellSize * gridSize) {
        grid[Math.floor(mouseX / cellSize)][Math.floor(mouseY / cellSize)].press();
    }
}

function generateBombs() {
    
}
