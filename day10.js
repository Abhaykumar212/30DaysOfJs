// Activity 1: Basic event handling
// Task 1: Change paragraph text on button click
let butt = document.getElementById('butt');
let para = document.getElementById('para');
butt.addEventListener('click',()=>{
    para.innerHTML = 'Clicked';
});

// Task 2: Change image source on double-click
let img = document.getElementById('img');
img.addEventListener('dblclick',()=>{
    img.setAttribute('src','id');
});

// Activity 2: Mouse events
// Task 3: Change button background color on mouse over
butt.addEventListener('mouseover',()=>{
    butt.style.backgroundColor = 'pink'
});

// Task 4: Change button background color on mouse out
butt.addEventListener('mouseout',()=>{
    butt.style.backgroundColor = 'white'
});

// Activity 3: Keyboard events
// Task 5: Log key pressed on keydown
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
firstName.addEventListener('keydown', (event)=>{
    console.log(event.key);
});

// Task 6: Display entered value on keyup
let test = document.getElementById('test');
firstName.addEventListener('keyup' , (event)=>{
    test.innerHTML = event.target.value;
});

// Activity 4: Form events
// Task 7: Prevent form submission and log input values
let submit = document.getElementById('submit');
submit.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log(firstName.value, lastName.value);
});

// Task 8: Display selected option value
let test2 = document.getElementById('test2');
let select = document.getElementById('select');
select.addEventListener('change', (event)=>{
    test2.innerHTML = select.value;
});

// Activity 5: Event Delegation
// Task 9: Log clicked item and stop event propagation
let list = document.getElementById('list');
let two = document.getElementById('two');
two.addEventListener('click',(event)=>{
    console.log(two.innerHTML);
    event.stopPropagation();
});

// Task 10: Log message when the list is clicked
list.addEventListener('click',()=>{
    console.log('List clicked');
});
