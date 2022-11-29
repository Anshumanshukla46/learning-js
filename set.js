// set
var s = new Set([1, 2, 3, 4, 5]);
text = "";
s.forEach(display);
function display(value) {
    text += value + " ";
}

document.write(text);

s.add(12);
s.forEach(display);


// document.write("<br>" + text);

// .values() returns an iterator
text = "";
for (let x of s.values()) {
    text += x + " ";
}
document.write("<br>" + text);



// maps

const fruits = new Map(
    [
        ["apple", 70],
        ["banana", 12],
        ["kiwi", 129]
    ]
);

document.write("<br>" + fruits);

overwrite
fruits.set("apple", 90);

fruits.set("oranges", 231);

document.write("<br>" + fruits.get('apple'));

document.write("<br>" + fruits.size);

document.write("<br>" + fruits.delete('apple'));

document.write("<br>" + fruits.has("kiwi"));;

fruits.forEach(dis);

var text = "";

function dis(value, key) {
    text += value + " : " + key;
    text += "<br>";
}

document.write("<br>" + text);