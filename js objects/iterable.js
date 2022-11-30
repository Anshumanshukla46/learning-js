// for..of in iterable

for (let x of "1234567") {
    document.write(x + " ");
}

// can be used with array,

// An object becomes an iterator when it implements a "next()" method.

// The next() method must return an object with two properties:

// value (the next value)
// done (true or false)


// home made iterator

function number() {
    let n = 0;
    return {
        next: function () {
            n += 10;
            return { value: n, done: false };
        }
    }
}

const n = number();
document.write("<br>" + n.next().value);
document.write("<br>" + n.next().value);
// home made iterator does not support the JavaScript for..of statement.



// sets

const s = new Set(['a', 'b', 'c', 'd']);
s.add('1');
s.add('2');
s.add('3');

for (let x of s.values()) // .values() returns an iterator of array same as keys
    document.write(x + " ");

// can use for each method    

document.write("<br>");
for (let x of s.entries()) // .entries() returns in pair as if 'a' then => ['a','a']
    document.write(x + " ")

document.write(s instanceof Set)
document.write("<br>");


// maps

const m = new Map([
    ["apple", 212],
    ["banana", 200],
    ["orange", 909]
]);


for (let x of m.entries())
    document.write(x + " ... ");

m.set('hello', "world"); // set properties

for (let x of m.entries())
    document.write(x + " ... ");

document.write("<br>" + m.get("hello")); // get


for (let x of m.values()) // return values
    document.write("<br>" + x);