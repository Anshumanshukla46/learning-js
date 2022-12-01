// async is important when we are having one promise in one another - as in that case their will be somehow hell number of then that will make the code hell clumsy

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log("Making request" + location);

        if (location == 'Google') {
            resolve(location + 'say hi')
        } else {
            reject('we can only talk to google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');

        resolve('Extra information' + response);
    })
}



// makeRequest('Google', message => { // for makeRequest
//     console.log('Response Received');

//     return processRequest(message); // calling another promise
// }).then(mes => { // for processRequest
//     console.log(mes);
// }).catch(err => { // error for makeRequest
//     console.log(err);
// })

// above then can be hell if we have more 



// this can be easily handled by async
// async is function which is eventually which will have all then statments


// function using promise should be async and calling teh promise should be await
async function doWork() {
    try {// resolve

        const res = await makeRequest('Google'); // calling promise but used "await" for it

        // once a "await" occur it will call all the other function and also parallely it will execute it

        console.log(res); // handling ".then"

        const respr = await processRequest(res);
        console.log(respr); // ".then"

    } catch (err) {// reject
        console.log(err); // catch block of then
    }
}

doWork(); // calling async function


// EXAMPLE

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;

//     if (a == 2) {
//         resolve('i am in resolve')
//     } else {
//         reject('i am in reject')
//     }
// })



// async function callForPromise() {
//     try {
//         const wait = await p;
//         console.log(wait);
//     } catch (er) {
//         console.log(er);
//     }
// }

// callForPromise();