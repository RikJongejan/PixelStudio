class App {
    constructor(rows, cols, cellSize) {
        this.canvas = document.getElementById('PixelCanvas');
        this.ctx = this.canvas.getContext('2d');
        // vastgelegd zodat cellSize herberekend kan worden bij grid-wissel zonder het canvas te resizen
        this.canvasSize = cols * cellSize;
        this.cellSize = cellSize;
        this.canvas.width = this.canvasSize;
        this.canvas.height = this.canvasSize;

        this.grid = new Grid(rows, cols, cellSize);
        this.currentTool = new Pen();
        this.selectedColor = '#000000';
        this.isDrawing = false;
        this.hoveredPixel = null;
    }

    init() {
        this.render();
        this.handleEvents();
    }

    handleEvents() {
        this.canvas.addEventListener('mousedown', (e) => {
            this.isDrawing = true;
            this.applyTool(e);
            this.render();
        });

        // hover en applyTool samen afgehandeld zodat render maar één keer per mousemove wordt aangeroepen
        this.canvas.addEventListener('mousemove', (e) => {
            this.hoveredPixel = this.getPixelAt(e);
            if (this.isDrawing) this.applyTool(e);
            this.render();
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.hoveredPixel = null;
            this.render();
        });

        // op window ipv canvas: anders stopt tekenen niet als de muis buiten het canvas losgelaten wordt
        window.addEventListener('mouseup', () => {
            this.isDrawing = false;
        });

        document.getElementById('colorPicker').addEventListener('input', (e) => {
            this.selectedColor = e.target.value;
        });

        document.getElementById('penBtn').addEventListener('click', () => {
            this.setActiveTool(new Pen(), 'penBtn');
        });

        document.getElementById('eraserBtn').addEventListener('click', () => {
            this.setActiveTool(new Gum(), 'eraserBtn');
        });

        document.getElementById('clearBtn').addEventListener('click', () => {
            this.grid.clearAll();
            this.render();
        });

        document.getElementById('exportBtn').addEventListener('click', () => {
            let link = document.createElement('a');
            link.download = 'pixelstudio.png';
            link.href = this.canvas.toDataURL('image/png');
            // click() triggert de download zonder dat de gebruiker een URL hoeft te openen
            link.click();
        });

        document.getElementById('gridSize').addEventListener('change', (e) => {
            let size = parseInt(e.target.value);
            this.cellSize = this.canvasSize / size;
            // reset hoveredPixel zodat er geen verwijzing naar een pixel van het oude grid overblijft
            this.hoveredPixel = null;
            this.grid = new Grid(size, size, this.cellSize);
            this.render();
        });
    }

    setActiveTool(tool, btnId) {
        this.currentTool = tool;
        document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(btnId).classList.add('active');
    }

    getPixelAt(event) {
        let rect = this.canvas.getBoundingClientRect();
        let col = Math.floor((event.clientX - rect.left) / this.cellSize);
        let row = Math.floor((event.clientY - rect.top) / this.cellSize);
        return this.grid.getPixel(col * this.cellSize, row * this.cellSize);
    }

    applyTool(event) {
        let pixel = this.getPixelAt(event);
        if (pixel) this.currentTool.apply(pixel, this.selectedColor);
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.grid.render(this.ctx);
        if (this.hoveredPixel) {
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
            this.ctx.fillRect(this.hoveredPixel.x, this.hoveredPixel.y, this.cellSize, this.cellSize);
        }
    }
}
