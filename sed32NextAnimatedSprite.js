class NextAnimatedSprite extends Sprite {
    constructor(options) {
        options.class = options.classes[0];
        super(options);
        this._classes = options.classes;
        this._index = 0;
        this.initial();
    }

    initial() {
        this._element.addEventListener("click", this.click.bind(this));
    }

    click() {
        this.nextFrame();
    }

    nextFrame() {
        this._index++;
        if (this._index >= this._classes.length) {
            this._index = 0;
        }

        this.class = this._classes[this._index];
    }
}