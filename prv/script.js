document.write("this is javascript");


a = "hello";
document.write("<br>" + typeof (a));

a = 123;
document.write("<br>" + typeof (a));

var b;
document.write("<br>" + typeof (b));


// popular bug, not fixed beacuse if we fixed it will affect others too
var c = null;
document.write("<br>" + typeof (c));


var a = Number.MAX_VALUE;
document.write("<br>" + typeof (a));

var a = Infinity;
document.write("<br>" + typeof (a));


document.write("<br>" + Math.sqrt(-1));

var a = parseInt("sadasd");
document.write("<br>" + typeof (a));

document.write("<br>" + typeof (NaN))


// operators
document.write("<br>" + 12 / 5)
document.write("<br>" + 12.3 / 2)

var a = 2, b = 10;

if (a >= 10 && b++ < 7) {
    document.write("<br>" + "b is: " + b);
}

document.write("<br>" + "b is: " + b);

var x = (1 == 1);
document.write("<br>" + x);

document.write("<br>" + typeof ('1'));

var x = (1 != '1');
document.write("<br>" + x);

var x = (1 == '1'); // type conversion
document.write("<br>" + x);

var x = (1 === '1');  // triple equal to operators do not type-case anything

document.write("<br>" + x);

// functtions
document.write("<br>" + "functions");

function sum(a, b) {
    document.write("<br>" + (a + b));
}

sum(8);
sum(1, 2, 3);


function outer() {
    console.log("i am outer");

    function inner() {
        console.log(' i am inner');
    }

    inner();
}

outer();

var fact = function x(n) {
    if (n <= 2)
        return n;
    return n * x(n - 1);
}

document.write(fact);

function ncr(n, r, fact) {
    return fact(n) / (fact(r) * fact(r));
}

document.write(ncr(7, 6, fact));


// arrays
var a = [1, 2, 3, 4];
var b = new Array(11, 12, 13, 14);
var c = new Array(9);

document.write("<br>" + a + "  " + b + "  " + c);


a.unshift(91);
a.unshift(23987);
document.write("<br>" + a);
a.shift();
document.write("<br>" + a);
document.write("<br>");

a = [1, 2, 3, 4, 5];

a.splice(1);
document.write("<br>" + a);


// object
var s = { "name": "abc", "-roll": 35, marks: 90 };
document.write("<br>" + s.name);

document.write("<br>" + s["-roll"]);
delete s["-roll"];

document.write("<br>" + s["-roll"]);