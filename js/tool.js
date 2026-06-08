class Tool {
    constructor(name) {
        this.name = name;
    }
    // forceert subclasses om apply() te implementeren, voorkomt stille bugs als een nieuwe Tool het vergeet
    apply(pixel, color) {
        throw new Error(`${this.name}.apply() is niet geïmplementeerd`);
    }
}

class Pen extends Tool {
    constructor() {
        super('pen');
    }
    apply(pixel, color) {
        pixel.setColor(color);
    }
}

class Gum extends Tool {
    constructor() {
        super('gum');
    }
    apply(pixel) {
        pixel.setColor('white');
    }
}
