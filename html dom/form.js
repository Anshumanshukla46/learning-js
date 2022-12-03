// alert when text is empty
function validate() {
    let value = document.forms["myForm"]["name"].value;

    if (value.length == 0) {
        alert("Enter a text");
    }

    let num = document.forms["myForm"]["num"].value;
    if (num > 10) {
        alert("more than 10");
    }
}

function change() {
    document.getElementById('demo').style.backgroundColor = "blue";

    document.getElementById('demo').style.color = "white";
}

