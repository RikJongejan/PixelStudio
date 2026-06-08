class Grid {
    constructor(rows, cols, cellSize) {
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.pixels = [];
        this.createGrid();
    }

    createGrid() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.pixels.push(new Pixel(col * this.cellSize, row * this.cellSize, this.cellSize, 'white'));
            }
        }
    }

    getPixel(x, y) {
        // exacte vergelijking werkt omdat alle pixelposities veelvouden van cellSize zijn
        return this.pixels.find(p => p.x === x && p.y === y);
    }

    render(ctx) {
        this.pixels.forEach(pixel => pixel.draw(ctx));
    }

    clearAll() {
        this.pixels.forEach(pixel => pixel.setColor('white'));
    }
}
