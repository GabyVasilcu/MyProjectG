class SnowFlake extends SnowEffect {
    constructor(options) {
        super(options);
        this.dX = Math.random();
        this.dY = Math.random();
        this.initX = this._x;
        this.vX = Math.random() / 10 + 0.02;
        this.vY = Math.random() * this._width + 5;
    }

    animate() {
        this.y = this.y + this._width;
        this.x = this.initX + Math.sin(this.dX) * this._width * 10;
        this.dX += this.vX;
        this.dY += this.vY;
        if(this.y > window.innerHeight) {
            this.y = 0;
            this.x = Math.random() * window.innerWidth;
            this.initX = this._x;
        }
    }
}