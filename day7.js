// Activity 1

// Task 1

let obj = {
    title: "Hello",
    Author: "Boss",
    Year: 2024,
    print: function(){
        console.log(`Title: ${this.title}, Author: ${this.Author}`);
    },

    modify: function(newYear){
        this.Year = newYear;
    }
}

console.log(obj); // output: { title: 'Hello', Author: 'Boss', Year: 2024 }

// Task 2

console.log(obj.title); // output: Hello
console.log(obj.Author); // output: Boss

// Activity 2

// Task 3

console.log(obj.print()); // output: Title: Hello, Author: Boss

// Task 4

obj.modify(2025);
console.log(obj);// output:- Year: 2025


// Activity 3

// Task 5

const library = {
    name: "Library",
    address: "abcdef",
    books: [
      {
        title: "The Boss",
        author: "Boss",
        year: 1925
      },
      {
        title: "The Boss",
        author: "Boss",
        year: 1960
      },
      {
        title: "The Boss",
        author: "Boss",
        year: 1949
      }
    ],

    print: function(){
        console.log("Books:");
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
        });
      },

  };
  
console.log(library);

// Task 6

console.log(library.books[0]); // output:- { title: 'The Boss', author: 'Boss', year: 1925 }

// Activity 4

// Task 7

console.log(library.print());

// output:- Books: Title: The Boss, Author: Boss, Year: 1925 Title: The Boss, Author: Boss, Year: 1960 Title: The Boss, Author: Boss, Year: 1949


// Activity 5


// Task 8

for (key in library) {
    console.log(key);
    console.log(library[key]);
}

// Task 9

console.log(Object.keys(library));
console.log(Object.values(library));
  