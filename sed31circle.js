class Circle extends GeometricShape{
    constructor(centerX, centerY, radius) {
        super("Circle"); //super ma duce in constructorul parinte
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return Math.PI * this.radius;
    }
}