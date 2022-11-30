// Semicolons are used to separate executable JavaScript statements.
// Since a function declaration is not an executable statement, it is not common to end it with a semicolon.

function fun(a, b) {
    return a * b;
}

// anonymous function which do not need any kind of name and can be invoked by using the variable itself
const x = function (a, b) { return a * b };
let a = x(1, 223);
document.write(a)



// function constructor
const f1 = new Function("a", "b", "return a *b");

document.write(" " + x(3211, 123));


// self invoking function
(function () {
    document.write("<br>" + " hello, self invoking function is here.");
})(); /// parenthesis is needed



// arrow function
var v = (x, y) => x * y;


// If a function is called with missing arguments (less than declared), the missing values are set to undefined


// y = 10 if not passed
function myFunction(x, y = 10) {
    return x + y;
}
myFunction(5);


function sum(x, y, ...args) {
    document.write("<br>" + "x + y : " + (x + y));
    // rest as here
    sum = 0;
    for (let x of args)
        sum += x;

    document.write("<br>" + "The sum is " + sum);
}

sum(1, 2, 32, 234, 346, 265, 112, 243, 32);


// arguments object

num = findMax(1, 2, 3, 4, 213, 5, 6, 6, 8, 8, 3, 323);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max)
            max = arguments[i];
    }
    return max;

}
document.write("<br>" + num);


// bind method - with 'bind' method we can borrow the method from other object

// but the other method names should be same 

const person = {
    firstName: "John",
    lastName: "Doe",
    getName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    f: "Hege",
    lastName: "Nilsen",
}

// using member's value in person method
let fullName_from_bind = person.getName.bind(member);
document.write("<br>" + fullName_from_bind());


// bind method is helpfull when this might lossed

var per = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
        document.write("<br>" + (this.firstName + " " + this.lastName));
    }
}

// without bind after 3sec 'this' will be converted to 'undefined'
let display = per.display.bind(per);
// setTimeout(display, 3000); as it affect other parts tooo





// "closures" 
// it can be used we want some value for both local and global

// Remember self-invoking functions?

const add = (function () {
    let cnt = 0; // consider as outer function
    return function () { cnt += 1; return cnt; /* this as inner function*/ }
})();

// here cnt is having the scope to global and self invoking function will call to itself only once

// all this due to closures

// A CLOSURE IS A FUNCTION HAVING ACCESS TO THE PARENT SCOPE, EVEN AFTER THE PARENT FUNCTION HAS CLOSED.

function count() {
    document.getElementById('demo').innerHTML = add();
}

// document.write("<br>" + add());
// document.write(add());
// document.write(add());
// document.write(add());

