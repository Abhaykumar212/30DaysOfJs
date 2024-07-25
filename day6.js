// Activity 1

// Task 1

let arr = [1,2,3,4,5]
console.log(arr); // output:- 1,2,3,4,5

// Task 2

let first = arr[0], last = arr[arr.length - 1];

console.log(first); // output:- 1
console.log(last); // output:- 5

// Activity 2

// Task 3
arr.push(6)
console.log(arr); // output:- 1,2,3,4,5,6

// Task 4

arr.pop()
console.log(arr); // output:- 1,2,3,4,5

// Task 5

arr.unshift(0)
console.log(arr); // output:- 0,1,2,3,4,5

// Task 6

arr.shift()
console.log(arr); // output:- 1,2,3,4,5

// Activity 3


// Task 7

let newArr = arr.map(double)

function double(num) {
    return num * 2;
}

console.log(newArr); // output:- 2,4,6,8,10


// Task 8

let filteredArr = newArr.filter(isEven)

function isEven(num) {
    return num % 2 === 0;
}

console.log(filteredArr); // output:- 2,4,8

// Task 9

let sum = newArr.reduce((a, b) => a + b);

console.log(sum); // output:- 30


// Activity 4

// Task 10


for(let i=0; i<newArr.length; i++){
    console.log(newArr[i]);
}
// output:- 2 4 6 8 10

// Task 11

newArr.forEach(func);

function func(num) {
    console.log(num);
}

//output:- 2 4 6 8 10

// Activity 5

// Task 12

let brr = [[1,2,3,4],[5,6,7,8],[9,1,2,3]];

console.log(brr); // output:- [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 1, 2, 3 ] ]

// Task 13

console.log(brr[2][3]); // output:- 3

