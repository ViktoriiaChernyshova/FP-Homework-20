class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    humanInfo() {
        console.log(`Human info: name - ${this.name}, age - ${this.age}.`);
    }
}

let vika = new Human("Vika", 28);
vika.humanInfo();

let keks = new Human('Keks', 10);
keks.humanInfo();

class Car {
    constructor(mark, model, year, number) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.number = number;
        this.owner = {};
    }

    addOwner(ownerCar) {
        if (ownerCar instanceof Human && ownerCar.age > 18) {
            this.owner = ownerCar;
        } else {
            console.log("You are under 18 years old");
        }
    }

    humanInfoCar() {
        console.log(`${this.mark} ${this.model} ${this.year} ${this.number}`);
        if (this.owner.hasOwnProperty('name')) {
            this.owner.humanInfo();
        } else {
            console.log(`This ${this.mark} has no owner`);
        }
    }
}

let toyota = new Car("Toyota", "Augo", 2016, "АА2569ВВ");
let mercedes = new Car("Mercedes", "Vito", 2004, "AA2541BB");

toyota.addOwner(vika);
mercedes.addOwner(keks);

toyota.humanInfoCar();
mercedes.humanInfoCar();