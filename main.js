const canvas = document.getElementById('PixelCanvas');
const ctx = canvas.getContext('2d');

const grid = new Grid(16, 16, 32);
grid.render(ctx);

const pen = new Pen();
const gum = new Gum();

console.log(pen.name);
console.log(gum.name);