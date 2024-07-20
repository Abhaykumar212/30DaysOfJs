// Activity 1

// Task 1
let a = 6;
if (a > 0) console.log("Positive"); // Output: Positive
else if (a < 0) console.log("Negative");
else console.log("Zero");

a = -3;
if (a > 0) console.log("Positive");
else if (a < 0) console.log("Negative"); // Output: Negative
else console.log("Zero");

a = 0;
if (a > 0) console.log("Positive");
else if (a < 0) console.log("Negative");
else console.log("Zero"); // Output: Zero

// Task2
let age = 20;
if (age >= 18) console.log("Eligible"); // Output: Eligible
else console.log("No!");

age = 16;
if (age >= 18) console.log("Eligible");
else console.log("No!"); // Output: No!


// Activity 2

// Task 3
let first = 7, second = 5, third = 4;
if (first > second && first > third) console.log(first); // Output: 7
else if (first < second && second > third) console.log(second);
else if (third > first && second < third) console.log(third);

first = 3, second = 6, third = 9;
if (first > second && first > third) console.log(first);
else if (first < second && second > third) console.log(second);
else if (third > first && second < third) console.log(third); // Output: 9


// Activity 3

//Task 4

let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        break;
}
// output:- Thrusday

// Task 5


let marks = 9;

switch (marks) {
    case 10:
        console.log("A+");
        break;
    case 9:
        console.log("A");
        break;
    case 8:
        console.log("B+");
        break;
    case 7:
        console.log("B");
        break;
    case 6:
        console.log("C+");
        break;
    case 5:
        console.log("D");
        break;
    default:
        console.log("F");;
}

//output :- A



//Activity 4

// Tasks 6

let num = 69
console.log(num%2 ? "Odd" : "Even");// output:- Odd


//Activity 5

// Tasks 7
let year = 2024;

if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log("Leap Year");
} else {
    console.log("Not A Leap Year");
}

// output:- Leap Year