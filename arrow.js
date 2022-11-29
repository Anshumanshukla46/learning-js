
// arrow function
var s;
s = () => {
    return "hello world";
}

document.write(s);

// classes
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age(x) {
        return this.year - x;
    }

    diver() {
        return this.name;
    }
}

let c = new Car("alice", 2012);
let date = new Date();
let old = date.getFullYear();

document.getElementById('demo').innerHTML = old - c.year;



//  export (as used in react)

// In-line individually:
// person.js

export const name = "Jesse";
export const age = 40;


// All at once at the bottom:
// person.js

const a = 12;
const b = "dshij";
export { a, b };


// default export in a file.

// message.js

const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
};

export default message;


// import (similar to which used in react)

// Import named exports from the file person.js:

import { name, age } from "./person.js";


// Import a default export from the file message.js:

import message from "./message.js";