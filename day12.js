// Activity 1

// Task 1
function throwErr() {
    throw new Error("Intentional Error");
}

try {
    throwErr();
} catch (err) {
    console.error("Caught:", err.message);
}

// Task 2
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (err) {
    console.error("Error:", err.message);
}

// Activity 2

// Task 3
function tryCatchFinally() {
    try {
        console.log("In try");
        throw new Error("An error");
    } catch (err) {
        console.error("Caught:", err.message);
    } finally {
        console.log("In finally");
    }
}

tryCatchFinally();

// Activity 3

// Task 4

class CustomErr extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomErr";
    }
}

function throwCustomErr() {
    throw new CustomErr("Custom error");
}

try {
    throwCustomErr();
} catch (err) {
    console.error(`${err.name}: ${err.message}`);
}

// Task 5
class ValErr extends Error {
    constructor(message) {
        super(message);
        this.name = "ValErr";
    }
}

function validate(input) {
    if (input.trim() === "") {
        throw new ValErr("Input empty");
    }
    return true;
}

try {
    validate("");
} catch (err) {
    console.error(`${err.name}: ${err.message}`);
}

// Activity 4

// Task 6
function randPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        setTimeout(() => {
            success ? resolve("Resolved") : reject("Rejected");
        }, 1000);
    });
}

randPromise()
    .then(msg => console.log(msg))
    .catch(err => console.error(err));

// Task 7
async function handleRandPromise() {
    try {
        const msg = await randPromise();
        console.log(msg);
    } catch (err) {
        console.error(err);
    }
}

handleRandPromise();

// Activity 5

// Task 8
fetch("https://invalid.url")
    .then(res => res.json())
    .catch(err => console.error("Fetch error:", err));

// Task 9
async function fetchInvalid() {
    try {
        const res = await fetch("https://invalid.url");
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error("Fetch error:", err);
    }
}

fetchInvalid();
