class Trapez extends Patrulater{
    constructor(x, y, bm, BM, l1, l2, h) {
        super(x, y, BM, h); //BM ar fi width, iar bm ar fi h
        this.name = "Trapez";
        this.bm = bm;
        this.BM = BM;
        this.l1 = l1;
        this.l2 = l2;
        this.h = h;
    }

    area() {
        return (this.bm + this.width) * this.height / 2;
    }
      

    perimeter() {
        return this.bm + this.width + this.l1 + this.l2;
    }
}