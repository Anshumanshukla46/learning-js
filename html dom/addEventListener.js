// element.addEventListener(event, function, useCapture);

document.getElementById('dateshow').addEventListener('click', display);

function display() {
    document.getElementById('demo').innerHTML = Date();
}

function log() {
    console.log("hovered");
}

document.getElementById('dateshow').addEventListener('mouseover', log);


document.getElementById('dateshow').addEventListener('mouseout', function () { console.log('mouse out') });



// can add 'addEventListener' even on window

// a random number is generated on resize the window
window.addEventListener('resize', function () { this.document.getElementById('demo').innerHTML = Math.random() });

// in 'addEventListener' their is two type of event listener
// 1. bubbling ("false" in addEventListener function)-> which states that if p is in div then if p is clicked the inner one (p) will be handled first then outer
// ^- put false on both


// 2. capturing ("true" in addEventListener function)-> which states that if p is in div then if p is clicked the outer one (div) will be handled first then inner


// if both capturing and bubbling is applied then bubbling(inner to outer) then capturing(outer to inner) will be applied;

document.getElementById('myDiv').addEventListener('mouseover', function () { console.log('i am div') }, false);

document.getElementById('para').addEventListener('mouseover', function () { console.log('i am paragraph') }, false);


document.getElementById('myDiv').addEventListener('mouseover', function () { console.log('i am div') }, true);

document.getElementById('para').addEventListener('mouseover', function () { console.log('i am paragraph') }, true);

// check the console
