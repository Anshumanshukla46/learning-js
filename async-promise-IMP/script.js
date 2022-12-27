let para = document.getElementById('demo');

function prosm(str) {
    return new Promise((resolve, reject) => {
        if (str === 'microsoft') {
            resolve({
                name: "Anshuman",
                id: 46
            })
        } else {
            reject({
                name: 'not - Anshuman',
                id: "not 46"
            })
        }
    })
}

async function dw() {
    try {
        const res = await prosm('microsoft');

        console.log(res);
    } catch (err) {
        console.log(err)
    }
}

dw();