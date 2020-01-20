class Patrulater extends GeometricShape {
    constructor(x, y, width, height) {
        super("Patrulater");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    area() {

    }

    perimeter() {
        return 2 * this.width * this.height;
    }
}