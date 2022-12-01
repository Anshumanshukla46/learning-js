'use strict';
// Use the keyword class to create a class.

// Always add a method named constructor():

class Car {
    // execute once the Car class is called
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let d = new Date();
        return d.getFullYear() - this.year;
    }
}

let mycar = new Car('BMW', "2024");
document.write("my car is " + mycar.age())

// we should use 'strict mode' while in classes else get an error in 'log'.

class Audi extends Car {
    constructor(name, model) {
        super(name, 2020); // calling parent constructor
        this.model = model;
    }

    show() {
        return "I am " + this.model + " modeled";
    }

    get gm() {
        return this.model + " is model";
    }

    set sm(x) {
        this.model = x;
    }

    static hello() {
        return "Hello Cars";
    }
}

let ac = new Audi("Audi", 16721);
document.write("<br>" + ac.show());
document.write("<br>" + ac.age());


document.write("<br>" + ac.gm); // getter
ac.sm = 213869; // setter
document.write("<br>" + ac.gm);


// in class their is no hoisting


// static method is only for the class not for the object

// can't call 'ac.hello()'
document.write("<br>" + Audi.hello())