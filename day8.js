// Activity 1

// Task 1

let name = "Abhay"
let age = 18

console.log(`Hello ${name} from ${age}`); // output:- Hello Abhay from 18

// Task 2

let something = "Hello" , some = "Hello2"
console.log(`print ${something} ${something}`); // output:- print Hello Hello

// Activity 2

// Task 3

let arr = [1,2,3,4,5,6,7,8,9]

let first,second;
[first,second] = arr

console.log(`${first} ${second}`); // output:- 1 2

// Task 4

let obj = {
    title: "Hello",
    author: "Abhay"
}

let {title, author} = obj
console.log(`${title} by ${author}`); // output:- Hello by Abhay

// Activity 3

// Task 5

let arr1 = [1,2,3]
let arr2 = [...arr1]
arr2.push(4,5)

console.log(arr2); // output:- [ 1, 2, 3 ,4,5]

// Task 6

function sum(...arg){
    return arg.reduce((e1,e2)=>{
        return e1 + e2
    })
}

console.log(sum(1,2,3,4,5)); // output:- 15

// Activity 4

// Task 7

function mul(a,b=1){
    return a * b
}

let prod1 = mul(2,3)
let prod2 = mul(5)
console.log(prod1,prod2); // output:- 6 5

// Activity 5

// Task 8

let names = "Abhay"
let ages = 18

const object = {
    names,
    ages,
    print(){
        console.log(`Hello ${this.names} from ${this.ages}`)
    }
}

object.print(); // output:- Hello Abhay from 18

//Task 9

const name1 = 'name';
const name2 = 'age';
const name3 = 'location';

const person = {
  [name1]: 'Boss',
  [name2]: 18,
  [name3]: 'Haryana'
};

console.log(person); // output:- { name: 'Boss', age: 18, location: 'Haryana' }
