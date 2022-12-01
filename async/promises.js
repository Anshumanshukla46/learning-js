// promises are the set of action to do 
// if done then success (resolve) else fail (reject)

// let p = new Promise(function);

let p = new Promise((resolve, reject) => {
    let a = 1 + 2; // any action


    if (a == 2) {
        resolve("success")
    } else {
        reject("fail")
    }
})

// now if Promise done then it either be success, fail

p.then((message) => {
    console.log('I am in "then" ' + message);
    // if success -> resolve -> this statment
}).catch((message) => {
    console.log("I am in 'then' " + message);
    // if success -> reject -> this statment
})

// useful when the we want to do sometask after wards like as downloading image from server and then showing and if failed then try to show error message


// this is the replacement of callback

// promises example

let userLeft = false, watchMeme = false;

function watchPromise() {
    let p = new Promise((resolve, reject) => {

        if (userLeft) {
            reject({
                name: "user left",
                message: "get on track man !"
            })
        } else if (watchMeme) {
            reject({
                name: 'watching meme',
                message: 'for him meme > learning'
            })
        } else {
            resolve('Great go on :)');
        }
    })

    // can return directly
    return p;
}


// calling the function then handling the 'then'
watchPromise().then((message) => {
    console.log('success' + message)
}).catch((e) => {
    console.log(e.name + " " + e.message);
})


// promises.all
const a1 = new Promise((resolve, reject) => {
    resolve('I am in a1');
})


const a2 = new Promise((resolve, reject) => {
    resolve('I am in a2');
})

const a3 = new Promise((resolve, reject) => {
    resolve('I am in a3');
})

// on all promises
Promise.all([a1, a2, a3]).then((message) => {
    document.write(message + "<br>");
})

// will stop after one of promise is succeded
Promise.race([a1, a2, a3]).then((message) => {
    document.write(message);
})



// practice

// function p() {
//     return new Promise((resolve, reject) => {
//         let s = "sd";

//         if (s) {

//             resolve({
//                 name: "me",
//                 type: "resolve",
//                 a: [1, 2, 3, 4]
//             })
//         } else {
//             reject('i am in reject');
//         }
//     });
// }

// // calling the function(pass args if any);
// p().then((message) => {
//     console.log(message.a[3]);
// }).catch((message) => {
//     console.log(message);
// })