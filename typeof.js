document.write("<br>" + typeof "hello");
document.write("<br>" + "hello".constructor);


const d = new Date();
document.write("<br>" + isDate(d));

function isDate(myDate) {
    // this returns wheather is it date or not
    return myDate.constructor.toString().indexOf("Date") >= 0;

    // for arrays
    // return input.constructor.toString().indexOf("Array") >= 0;
}


// in javascript every thing is Object either array,map,set,date,object ....
const car = ["bmw", "audi"];

document.write("<br>" + "this is " + (car instanceof Object));

/// void operator in html



// type conversion

document.write("<br>" + (Number(Math.PI)));

document.write("<br>" + typeof (String(new Date())));



// try catch throw finally

// try

try {
    addalert("is it?")
} catch (any_variable) {
    document.getElementById('error').innerHTML = any_variable;
}


// throw
function testthrow() {
    const txt = document.getElementById('text').value;
    try {
        if (txt == "")
            throw "empty";
        if (isNaN(txt))
            throw "not a Number";

        // string to Number
        x = Number(x);

        if (x > 10)
            throw "too high";
        if (x < 0)
            throw "negative";

    } catch (er) {
        document.getElementById('output').innerHTML = "i am error" + "  -> " + txt;
    }
}