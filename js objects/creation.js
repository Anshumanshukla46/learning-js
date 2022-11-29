// creation
const obj = {
    fname: "hello",
    lname: "world",
    age: 12,
    eyecolor: "blue"
}

// accessing
document.writeln(obj.fname + " " + obj.lname + " " + obj.age + " " + obj.eyecolor);


const x = {};
// adding key and value
x.firstName = "sdjkg";
x.lastName = "dsaioho";
x.age = 123;

document.writeln("<br>" + x.firstName + "-" + x.lastName + "-" + x.age);


// properties
const person = {
    fname: " John",
    lname: " Doe",
    age: 25
};

function show() {

    var text = "";
    // x giving key for accessing
    for (let x in person) {
        text += x + " " + person[x] + " ";
    }

    document.writeln("<br>" + text);
}

show();


// adding properties
person.nation = "India";
show();


// deleting properties
delete person.age;
show();



// nested obj
const car = {
    name: "Anshuman",
    age: 20,
    cars: {
        car1: "bmw",
        car2: "audi",
        car3: "mercedes"
    },
    nation: "India"
}

// accessing via variable
var a1 = "cars", a2 = "car3";
document.writeln("<br>" + car[a1][a2]);


// nested array and objects
const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}


for (let i in myObj.cars) {
    text = "<h1>" + myObj.cars[i].name + "</h1>";
    text += "<ul>";
    for (var j in myObj.cars[i].models) {
        text += "<li>" + myObj.cars[i].models[j] + "</li>";
    }
    text += "</ul>";

    document.writeln("<br>" + text);
}

// methods
const per = {
    fname: "Anshuman",
    lname: "Shukla",
    id: 2917,
    getName: function () {
        return this.fname + " " + this.lname;
    },
    nation: "India"
};


document.write("<br>" + per.getName());

// creation of methods
per.fullName = function () {
    return this.fname + " : " + this.lname;
}

document.write("<br>" + per.fullName().toUpperCase());


// accessing value
// 1. loop
text = "";
for (let x in per) {
    text += per[x] + " ";

}

document.write("<br>" + text);

// 2. Object.values(Object_name)
document.write("<br>" + Object.values(per));

// 3. JSON.stringify(Object_name) -> do not work for function
document.write("<br>" + JSON.stringify(per));

// do not work for function, but if we convert the function in string then it can be worked
per.getName = per.getName.toString();
document.write("<br>" + "After conversion to string".toUpperCase() + (JSON.stringify(per)));



// getter and setter

const guy = {
    fname: "Anshuman",
    lname: "Shukla",
    id: 2917,

    get name() {
        return this.fname.toUpperCase() + " " + this.lname;
    },

    set name(nm) {
        this.fname = nm;
    }
}

// calling setter
guy.name = "this is setter function";
document.write("<br>" + guy.name);


// constructor
function Guy(first, last, age, nation) {
    this.fname = first,
        this.lname = last,
        this.age = age,
        this.nation = nation,
        this.name = function () {
            return this.fname + " " + this.lname;
        };
}

const g = new Guy("firstName", "lastName", 2198, "India");
document.write("<br>" + g.name());


// We also learned that you can not add a new property to an existing object constructor:


// PROTOTYPES
// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:


// using prototype we can add method, attribute to the existing class and object

g.prototype.nationality = "Indian";
document.write("<br>" + g.nationality);

// can add method too
g.prototype.details = function () {
    return this.age + " " + this.nation;
}