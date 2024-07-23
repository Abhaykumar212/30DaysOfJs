// Activity 1

// Task 1

function check(a){
    return a%2;
}

let a = 7;
console.log(check(a) ? "ODD" : "EVEN"); // output:- ODD

// Task 2

let b = 5;

function square(x){
    return x*x;
}

console.log(square(b)); // output:- 25


// Activity 2

// Task 3

let c = 5, d = 8;

function maxi_mini(x, y){
    return x>y;
}

console.log(maxi_mini(c, d) ? c : d); // output:- 8

// Task 4

let str1 = "Abhay" , str2 = "kumar"

function concatenate(x, y){
    return x+ " " + y;
}

console.log(concatenate(str1, str2)); // output:- Abhay kumar

// Activity 3

// Task 5

let num1 = 5, num2 = 6;

const add = (a,b) => {
    return a + b;
}

console.log(add(num1, num2)); // output:- 11


// Task 6

let str = "string"

const finds = (str) => {
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "g") {
            return true;
        }
    }
    return false
}

console.log(finds(str)); // output:- true

// Activity 4

// Task 7

let i = 7, j = 8;

function multiply(x, y){
    return x*y;
}

console.log(multiply(i, j)); // output:- 56

// Task 8

let name = "Abhay", age = 18

function greeting(x, y){
    return `Congratulations ${name} sir `;
}

console.log(greeting(name, age)); // output:- Congratulations Abhay sir

// Activity 5

// Task 9

function repeat(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

function sayHello() {
    console.log('Hello!');
}

  repeat(sayHello, 3); // output :- Hello! Hello! Hello!


// Task 10

let val1 = 7, val2 = 8;

function add(func1, func2) {
    return func2(func1(val1, val2));
}

function func1(val1, val2) {
    return val1 + val2;
}

function func2(val) {
    return val * 2;
}

console.log(add(func1, func2)); // output:- 30
  


