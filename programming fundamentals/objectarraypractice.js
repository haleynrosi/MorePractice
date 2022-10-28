// let books = ["Game of thrones", "Twilight", "Harry Potter"]
// let genres = ["Action", "Comedy", "Horror"]
// let authors = ["Author 1", "Author 2", "Author 3"]

// //json/javascript object

// let book = {
//     bookname : "Game of Thrones",
//     author : "George",
//     genre : "Action"
// }

// console.log(book.bookname)


// const array = ["Marcus", "Arlene", "Lionel"];

// const indexArray = array.indexOf("Arlene");

// console.log(indexArray)

//Create an array of To Dos and a function that prints how many todos you have 

// const todoArray = ["Feed the cat.", "Walk the dog.", "Clean the laundry.", "Finish Homework."]

// function todosFunction (todoArray) {
//     const todosLeft = todoArray.length;
//     if (todosLeft === 0) {
//         console.log("You're done!")
//     } else {
//         console.log("You have "+todosLeft+" things left to do!")
//     }
    
// }

// todosFunction(todoArray);

let n = 1;

while(n <= 10){
    const isEven = (n % 2) === 0;
    if (isEven) {
        console.log(n);
    }
    n++
}


