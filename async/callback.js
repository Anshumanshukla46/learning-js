// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

// as sometime we require some "calculation then display the result" but we have to call two functions



// those function which run paralelly with other function that is async

setTimeout(printme, 3000); // like as here function is called only once after 3sec

function printme() {
    document.write("Hello JavaScript!");
}

setTimeout(() => {
    console.log("again here");
}, 5000);


// like as while using setInterval you can specify the duration after which it is should show the result again


setInterval(showDate, 3000) // now the function will be called after each 3sec

function showDate() {
    let d = new Date();
    document.write("<br>" + d.getSeconds());
}


// but all the callback will be difficult if found with bug