// Activity 1

// Task 1

for(let i = 1; i <= 10; i++){
    console.log(i);
}
// output :- 1,2,3,4,5,6,7,8,9,10

//Task 2

for(let i = 1; i <= 10; i++){
    console.log(i*5);
}
// output :- 5,10,15,20,25,30,35,40,45,50

// Activity 2

// Task 3

let sum = 0;
let n = 10
while(n>0){
    sum += n;
    n--;
}
console.log(sum);// output :- 55

// Task 4
let num = 10;
while(num>0){
    console.log(num);
    num--;
}
// output :-10,9,8,7,6,5,4,3,2,1


// Activity 3

// Task 5

let number = 1;
do{
    console.log(number);
    number++;
}while(number<6)

// output :- 1,2,3,4,5


// Task 6
let fact = 1;
let a = 6;
do{
    fact = fact * a;
    a--;
}while(a>0)

console.log(fact);
//output :- 720

// Activity 4

// Task 7
let b = 5;
for(let i = 0; i < b; i++) {
    let row = '';
    for(let j = 0; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

/* output :-

*
**
***
****
*****

*/ 

