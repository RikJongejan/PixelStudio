class App {
    constructor(rows, cols, cellSize) {
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.grid = new Grid(rows, cols);

        this.canvas = document.getElementById('PixelCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = this.cols * this.cellSize;
        this.canvas.height = this.rows * this.cellSize;
    }

    //initialize de app
    init() {
        
    }

    //handle events
    handleEvents() {

    }

    //renderd de app/grid
    render() {

    }
}