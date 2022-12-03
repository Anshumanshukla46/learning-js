document.getElementById('demo').style.color = "lightblue";


const elem = document.getElementsByTagName("p");
elem[1].style.backgroundColor = "red";


const divElem = document.getElementsByClassName("div");
divElem.document.getElementById('hello').innerHTML = "i am new para"


const quSelector = document.querySelectorAll('p');
console.log(quSelector);


// accessing data from form

const form = document.forms['frm'];
var txt = "";
for (let i = 0; i < form.length; i++) {
    txt += form.elements[i].value + "<br>";
}
