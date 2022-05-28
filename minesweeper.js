class Cell {

    constructor(bomb) {
        this.bombCount = 0;
        this.cleared = false;
        this.bomb = bomb;
        this.image = null;
    }

    press(x, y) {
        if (!this.cleared) {
            this.cleared = true;
            checkNeighbours(x, y);

            if (this.bombCount == 0) {
                for (var i = y - 1; i <= y + 1; i++) {
                    for (var j = x - 1; j <= x + 1; j++) {
                        if (j >= 0 && j < gridSize && i >= 0 && i < gridSize && !grid[x][y].bomb) {
                            grid[j][i].press(j, i);
                        }
                    }
                }
            }
        }
    }
}

let cellSize = 40;
let gridSize = 16;
let width = cellSize * gridSize;
let height = cellSize * gridSize;
let grid = [];

function setup() {
    createCanvas(width, height);
    createGrid();
    textAlign(CENTER, CENTER);
    textSize(cellSize / 2)
}

function draw() {
    background(255, 255, 255);

    fill(150);
    for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
            if (grid[j][i].cleared) {
                if (grid[j][i].bomb) {
                    fill(255, 0, 0);
                    gameOver();
                } else {
                    fill(255);
                }
            } else {
                fill(150);
            }
            rect(j * cellSize, i * cellSize, cellSize, cellSize)
            fill(0);

            if (grid[j][i].bombCount > 0 && grid[j][i].cleared) {
                text(grid[j][i].bombCount, j * cellSize, i * cellSize, cellSize, cellSize);
            }
        }
    }
}

function mouseClicked(event) {
    if (mouseX >= 0 && mouseX < cellSize * gridSize && mouseY >= 0 && mouseY < cellSize * gridSize) {
        var x = Math.floor(mouseX / cellSize);
        var y = Math.floor(mouseY / cellSize);
        grid[x][y].press(x, y);
    }
}

function createGrid() {
    for (var i = 0; i < gridSize; i++) {
        var row = [];
        for (var j = 0; j < gridSize; j++) {
            if (Math.random() > 0.14) {
                row.push(new Cell(false));
            } else {
                row.push(new Cell(true));
            }

        }
        grid.push(row);
    }
}

function checkNeighbours(x, y) {
    for (var i = y - 1; i <= y + 1; i++) {
        for (var j = x - 1; j <= x + 1; j++) {
            if (j >= 0 && j < gridSize && i >= 0 && i < gridSize && grid[j][i].bomb && !grid[x][y].bomb) {
                grid[x][y].bombCount++;
            }
        }
    }
}

function gameOver() {

}
