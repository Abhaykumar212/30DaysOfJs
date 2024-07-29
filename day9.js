// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.
let data = document.getElementById('hello');
data.innerHTML = "Hello"

// Task 2: Select an HTML element by its class and change its background color.
document.getElementsByClassName('hii')[0].style.background = "red";

// Activity 2: Creating and Appending Elements

// Task 3: Create a new <div> element with some text content and append it to the body.
let div1 = document.createElement('div');
div1.textContent = "This is a new div";
document.body.appendChild(div1);

// Task 4: Create a new <li> element and add it to an existing <ul> list.
let li = document.createElement('li');
li.textContent = "Hooray!";
document.getElementById('lists').appendChild(li);

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.
let para = document.getElementById('para');
para.remove();

// Task 6: Remove the last child of a specific HTML element.
document.getElementById('lists').removeChild(li);

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let img = document.getElementById('img');
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s');

// Task 8: Add and remove a CSS class to/from an HTML element.
let butt = document.getElementById('butt');
butt.classList.remove('butt');

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
butt.addEventListener('click', () => {
    data.innerHTML = "Changed!";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
img.addEventListener('mouseover', () => {
    img.style.border = '10px solid red';
});
