class App {
    constructor(rows, cols, cellSize) {
        this.canvas = document.getElementById('PixelCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = cols * cellSize;
        this.canvas.height = rows * cellSize;

        this.grid = new Grid(rows, cols, cellSize);
        this.currentTool = new Pen();
        this.selectedColor = '#000000';
    }

    //initialize de app
    init() {
        this.render();
        this.handleEvents();
    }

    //handle events
    handleEvents() {

    }

    //renderd de app/grid
    render() {

    }
}