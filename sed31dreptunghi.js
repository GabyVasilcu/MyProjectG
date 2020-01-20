class Dreptunghi extends Patrulater {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.name = "Dreptunghi";
    }

    area() {
        return this.width * this.height;
    }
}