document.write("hello");

// let Variables
// Variables defined with let cannot be Redeclared. let x = 1; let x = 12; <- wrong
// but it is allowed in var



// it is block scope

let x = "heelo";
x = 0;
document.write(x);

// when want to use same named Variables in both global and function use "let"

// hoisting is done in var as they declared at the top and can be used anywhere 
// can use var without declared

car = "BMW";
var car;


/// while in "const" we can not reinitialise the value but can change

const a = [1, 2, 3, 4];
document.write("<br>" + a);

a[1] = 1289;
document.write("<br>" + a);

// not allowed
// a= [1,2,3,2];


// block scope of "const" is similar to "let"
// const x = 10;
// Here x is 10

// {
// const x = 2;
// Here x is 2
// }

// Here x is 10



/// evaluate from left
let w = 16 + 4 + "Volvo"; // 20Volvo
let w2 = "Volvo" + 16 + 4; // Volvo164


// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

let qw = "I am 'Javascript'";



// object

const car1 = {
    type: "fiat", model: 12, color: "blue", drive: function () {
        return "I am driving " + this.type;
    }
};

// document.getElementById("pid").innerHTML = car1;
document.write("<br>" + car1.color);
document.write("<br>" + car1.drive());


function displayDate() {
    document.getElementById('pid').innerHTML = (Date());
}



function mouseOver() {
    console.log("MOUSE HOVERED");
}

function mouseOut() {
    console.log("MOUSE OUTED");
}

function keyDown() {
    console.log("KEY PRESSED");
}


function change() {
    document.getElementById('change').innerHTML.style.backgroundColor = 'red';
}
