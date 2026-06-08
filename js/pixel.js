class Pixel {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        // strokeRect na fillRect zodat de gridlijnen zichtbaar blijven boven de vulkleur
        ctx.strokeStyle = '#cccccc';
        ctx.strokeRect(this.x, this.y, this.size, this.size);
    }

    setColor(newColor) {
        this.color = newColor;
    }
}
