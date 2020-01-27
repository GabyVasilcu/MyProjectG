class ClickableSprite extends Sprite {
    constructor(options) {
        super(options);
        this._clickCallBack = options.clickCallBack;
        this.init();
    }

    init() {
        this._element.addEventListener("click", this.click.bind(this));
    }

    click(e) {
        console.log("abc")
        this._clickCallBack(e);
    }

}