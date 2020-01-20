class Fiinta {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.region = options.region;
        this.gender = options.gender;
        this.alive = options.alive;
        this.mammalian = options.mammalian;
    }

    isOld() {
        console.log("Age from Fiinta");
    }

    isEating() {
        console.log("Eat from Fiinta");
    }

    isBreathing() {
        console.log("Breath from Fiinta");
    }
}