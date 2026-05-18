class Grid {
    constructor(rows, cols, cellsize) {
        this.rows = rows;
        this.cols = cols;
        this.cellsize = cellsize;
        this.pixels = [];
        this.createGrid();
    }
    //maakt de grid
    createGrid() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                let x = col * this.cellsize;
                let y = row * this.cellsize;
                this.pixels.push(new Pixel(x, y, this.cellsize, 'white'));
            }
        }

    }

    getPixel(x, y) {

    }

    render(ctx) {
        this.pixels.forEach(pixel => pixel.draw(ctx));

    }

    clearAll() {

    }
}