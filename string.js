document.write("hello");

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:


// let text = "sudgdsuiudsf";
// undefined
// text.length
// 12

// text = "heloo \'me'"
// "heloo 'me'"
// // text
// "heloo 'me'"
// console.log(text)
// VM480: 1 heloo 'me'

// text = "hello \"ME""


let text = "the char \r is vertical";
document.write("<br>" + text);

let s = new String("helloodskj");
document.write("<br>" + s);


// Comparing two JavaScript objects always returns false.
// "new" create the objects
let a1 = new String("hello");
let a2 = new String("hello");

document.write("<br>" + (a1 === a2));

text = "AppleBananaKiwi";
let part = text.slice(-12, -6) // leBana



// Numbers

x = 1223.123;
document.write("<br>" + x.toFixed(2)); // add zero in decimal

document.write("<br>" + x.toPrecision(1));

document.write("<br>" + Number(new Date("1970-01-01")));


// arrays

const fruits = ["kiwi", "apple", "banana"];
text = "<ol>";

for (let i = 0; i < fruits.length; i++)
    text += "<li>" + fruits[i] + "</li>";

text += "</ol>";

document.write("<br>" + text);


const fruit = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";

// for each 
fruit.forEach(add);

// 'i' is to access the element
function add(i) {
    text += "<li>" + i + "</li>";
}

text += "</ul>";

document.write("<br>" + text);


// sorting function

const cars = [
    { type: "volo", year: 12 },
    { type: "hsd", year: 213 },
    { type: "kds", year: 12098 }
]

cars.sort(function (a, b) { return a.year - b.year });

display(cars);

function display(car) {
    let text = "";
    for (let i = 0; i < car.length; i++) {
        text += car[i].type + " " + car[i].year;
        text += "<br>";
    }
    document.write("<br>" + text);
}


// arrays methods

const numbers = [45, 4, 9, 16, 25];
text = "";

// for each
numbers.forEach(show);

function show(v) {
    text += v + "<br>";
}

document.write("<br>" + text);

// map

const temp = numbers.map(double);

function double(i) {
    return i * 2;
}

temp.forEach(show);
document.write("<br> <br>" + text);
