// Activity 1


// Task 1


function firstPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success 1");
        }, 2000);
    });
}

firstPromise().then((res) => {
    console.log("promise resolved with message", res);
});
// output: promise resolved with message success 1

// Task 2

function secondPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("promise failed");
        }, 2000);
    });
} 

secondPromise().then((message) => {
    console.log("Promise resolved with message:", message);
}).catch((error) => {
    console.log("Promise rejected with error:", error);
});
// output: Promise rejected with error: promise failed

// Activity 2


// Task 3


console.log("fetching from firstPromise");
firstPromise().then((message) => {
    console.log(message);
    console.log("fetching secondPromise");
    return secondPromise().catch((error) => {
        console.log(error);
    });
});
// output:
// fetching from firstPromise
// success 1
// fetching secondPromise
// promise failed

// Activity 3

// Task 4

function apiCall(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("promise from api with random user data");
            resolve("promise resolve");
        }, 2000);
    });
}

async function getRandomUserData(){
    const output = await apiCall();  
    console.log(output);
}
getRandomUserData();
// output:
// promise from api with random user data
// promise resolve

// Task 5
async function executeSecondPromise(){
    try {
        await secondPromise();
    } catch (error) {
        console.log(error);
    }
}
executeSecondPromise();
// output: promise failed

// Activity 4

// Task 6

let src = "https://randomuser.me/api/";
const fetchRandomUser = () => {
    return new Promise((resolve, reject) => {
        fetch(src)
        .then(response => {
            if (!response.ok) {
                reject(new Error(`Error: ${response.status} - Resource not found`));
            } else {
                response.json().then(data => resolve(data));
            }
        })
        .catch(error => reject(error));
    });
};

fetchRandomUser().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

// Task 7
let src1 = "https://randomuser.me/api/?results=10";
const getRandomUsers = async () => {
    try {
        let response = await fetch(src1);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - Resource not found`);
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
getRandomUsers();

// Activity 5

// Task 8

function thirdPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success promise 3");
        }, 5000);
    });
}

const p1 = firstPromise();
const p2 = thirdPromise();

Promise.all([p1, p2]).then((messages) => {
    console.log(messages);
});
// output: [ 'success 1', 'success promise 3' ]

// Task 9
Promise.race([p1, p2]).then((message) => {
    console.log(message);
});
// output: success 1
