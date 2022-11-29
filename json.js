// JSON syntax is derived from JavaScript object notation syntax

let text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

let obj = JSON.parse(text);

document.getElementById('demo').innerHTML = obj.employees[1].firstName;

// Avoid global variables, avoid new, avoid ==, avoid eval()

// Don't Use new

// Use === Comparison


// The == comparison operator always converts (to matching types) before comparison.

// The === operator forces comparison of values and type:


/// Accessing DOM (HTML)

// Accessing the HTML DOM is very slow, compared to other JavaScript statements.

// If you expect to access a DOM element several times, access it once, and use it as a local variable:

const temp = document.getElementById("demo");
obj.innerHTML = "Hello";