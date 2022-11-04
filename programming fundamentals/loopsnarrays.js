// let a = [4,2,6,0,8]
// let b = [9,4,3,5,12,33,4]

// let c = a.concat(b)

// console.log(c)

let arrayOne = ["Haley", "Fisher", "Javascript"]
let arrayTwo = [11, 1, 2022]

// function introduceYourself (string, number){
//    arrayOne[3] = "React";
//    arrayTwo[3] = 22;
//    console.log("This is arrayOne: " + arrayOne + "\n" + "This is arrayTwo: " + arrayTwo)
//    console.log("Hello! My name is " + arrayOne[0] + " " + arrayOne[1] + ".")
//    console.log("I am currently learning how to program in " + arrayOne[2] + ".")
//    console.log("The date is the number " + arrayTwo[1] + " of the current month " + arrayTwo[0] + ".")
//    arrayOne[2] = "HTML/CSS"
//    console.log("I am also learning " + arrayOne[2] + ".")
//    console.log(arrayOne.length)
// }

// introduceYourself()

function reintroduceYourself() {
    arrayOne.push(" HTML", " CSS", " React", " Bananas");
    arrayOne.shift();
    arrayOne.shift();
    console.log("I am learning " + arrayOne.join() + ".")
    arrayOne.pop();
    console.log(arrayOne);
    arrayOne.push(" NodeJS");
    console.log("I am learning " + arrayOne[4] + ".")
}

reintroduceYourself()


//while loop below

let n = 1;

while(n <= 10){
    const isEven = (n % 2) === 0;
    if (isEven) {
        console.log(n);
    }
    n++
}


//2) Given two arrays a and b find the product of elements. 
//a and b be could be of different lengths. if there is no 
//element found in the other array multiply by 1 example:

let a = [4,2,6,0,8]
let b = [9,4,3,5,12,33,4]
let c =[]

function multiplyMerge (day) {
    
}