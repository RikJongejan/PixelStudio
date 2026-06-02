class App {
    constructor(rows, cols, cellSize) {
        this.canvas = document.getElementById('PixelCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.cellSize = cellSize;
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
        this.canvas.addEventListener('click', (event) => {
            let rect = this.canvas.getBoundingClientRect();
            let mouseX = event.clientX - rect.left;
            let mouseY = event.clientY - rect.top;

            let col = Math.floor(mouseX / this.cellSize);
            let row = Math.floor(mouseY / this.cellSize);
        })
    }

    //renderd de app/grid
    render() {

    }
}