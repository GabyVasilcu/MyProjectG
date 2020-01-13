

        class Owner {
            constructor(ownerProperties) {
                this.cats = ownerProperties.cats;
                this.adress = ownerProperties.adress;
                this.name = ownerProperties.name;
                this.phone = ownerProperties.phone;
            }

            takeToVet() {

            }

            takeCatToVet() {

            }

            feedCats() {

            }

            pet() {

            }

            removeCat(catName) {
                for (var i = 0; i < this.cats.length; i++) {
                    if(this.cats[i].name == catName) {
                        this.cats.splice(i, 1);
                        return;
                    }
                }
            }

            addCat(cat) {
                this.cats.push(cat);
            }
        }