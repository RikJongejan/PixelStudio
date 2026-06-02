class Grid {
    constructor(rows, cols, cellSize) {
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.pixels = [];
        this.createGrid();
    }
    //maakt de grid
    createGrid() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                let x = col * this.cellSize;
                let y = row * this.cellSize;
                this.pixels.push(new Pixel(x, y, this.cellSize, 'white'));
            }
        }

    }

    getPixel(x, y) {
        return this.pixels.find(p => p.x === x && p.y === y);

    }

    render(ctx) {
        this.pixels.forEach(pixel => pixel.draw(ctx));

    }

    clearAll() {
        this.pixels.forEach(pixel => pixel.setColor('white'));

    }
}