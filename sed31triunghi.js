class Triunghi extends GeometricShape{
    constructor(p, l1, l2, l3) {
        super("Triunghi");
        this.name = "Triunghi";
        this.p = p;
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }

    area() {
        return Math.sqrt(this.p * (this.p - this.l1) * (this.p - this.l2) * (this.p - this.l3));
    }

    perimeter() {
        return this.l1 + this.l2 + this.l3;
    }
}