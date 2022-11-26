function hello() {
    console.log("hello");
}

hello();

x = setInterval(hello, 1000);
clearInterval(x);

// accessing html element
// var h = document.getElementsByClassName("div");
// h.style.color = "blue";


// var btn = document.getElementById("btn").innerHTML;
// btn.addEventListener('click', function () {
//     alert("hello");
// });