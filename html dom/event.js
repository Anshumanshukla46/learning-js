function changeMe() {
    let d = document.getElementById("one");

    d.innerHTML = "I am colored";
    d.style.backgroundColor = "yellow";
    d.style.color = "red";
}

function normal() {
    let d = document.getElementById("one");

    d.innerHTML = "I am paragraph";
    // d.style.all = "unset";
    d.style.backgroundColor = "white";
    d.style.color = "black";
}

function changeDate() {
    let x = document.getElementById("date");

    x.innerHTML = Date();
}

// using onclick from javascript
document.getElementById('btn').onclick = changeDate;



// onchange : mostly used in forms
// change after unfocus

function upperCase() {
    let x = document.getElementById('name');
    x.value = x.value.toUpperCase();
}



// addEventListener - can have more than one also

// addEventListener(action, function, wheather to do or not - t/f);

document.getElementById('btn').addEventListener('click', addtext);

function addtext() {
    document.getElementById('date').innerHTML += "<br>" + Math.random();
}