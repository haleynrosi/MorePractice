//Activity 1 - Looping through an Array
// Create an array which consists of a few names of your friends
//and use a for loop to iterate through the array and print out the
//contents. 

let friendList = ["Sadie", "Olga", "Bella", "Haley", "Gabby"];

for (i = 0; i < friendList.length; i++) {
    console.log(friendList[i]);
}


//Activity 2 - sum of given integers
//Write a JS program to compute the sum of the given integers, If the sum
//is in the range 50..80 return 65 other wise return 80 

function sumOfIntegers(a, b) {
    if ((a + b) >= 50 && (a + b) <= 80) {
        console.log("65");
    } else {
        console.log("80");
    }

}

sumOfIntegers(40, 20);


//Write a madlib function, which is given a name and a subject. 
//It will return(not print) a new string: (name)'s favorite 
//subject in school is (subject).

function madLib(Name, schoolSubject) {
    return Name + "'s favorite subject in school is " + schoolSubject;
}

console.log(madLib("Ashley", "Math"))



//Write a function tipAmount that is given the bill amount 
//and the level of service (one of good, fair and poor) and 
//returns the dollar amount for the tip. Based on: 
//good -> 20% fair -> 15% bad -> 10%


function tipAmount(amount, service) {
    if (service == "good") {
        return (20 / 100) * amount + "$ suggested tip amount!";
    } else if (service == "fair") {
        return (15 / 100) * amount + "$ suggested tip amount!";
    } else if (service == "bad") {
        return (10 / 100) * amount + "$ suggested tip amount!";
    }

}

tipAmount()

console.log(tipAmount(85, 'good'))



//Write a function totalAmount that takes the same arguments as tipAmount 
//except it returns the total as the tip amount plus the bill amount. This 
//function may make use of tipAmount as a sub-task.


function totalAmount(amount, service) {
    if (service == "good" || service == "Good") {
        return amount + ((20 / 100) * amount) + "$ is your total bill, including tip!";
    } else if (service == "fair" || service == "Fair") {
        return amount + ((15 / 100) * amount) + "$ is your total bill, including tip!";
    } else if (service == "bad" || service == "Bad") {
        return amount + ((10 / 100) * amount) + "$ is your total bill, including tip!";
    }

}

totalAmount();

console.log(totalAmount(60, "Fair"));



//Write a function printNumbers which is given a start number and an end number. It will 
//print the numbers from one to the other, one per line:


//for loop version 
function printNumbers(firstNum, lastNum) {
    for (i = firstNum; i <= lastNum; i++) {
        if (i <= lastNum) {
            console.log(i);
        }
    }
}

printNumbers(4, 65);

//while loop version 
function printNumbersWhile(firstNum, lastNum) {
    let i = firstNum
    while (i < lastNum) {
        i++
        console.log(i);
    }
}

printNumbersWhile(5, 17);


//Write a function printRectangle which is given a size and prints a square of that size using asterisks.

function printRectangle(rectSize) {
    let rectAsterick = "---";
    for(i=1; i<=rectSize; i++) {
        console.log(rectAsterick)
    }

}

printRectangle(4); 

// Write function printBox which is given a width and height and 
//prints a hollow box of those given dimensions.

function printBox(boxWidth, boxHeight) {
    let widthAsterick = "-";
    let theWidth = widthAsterick.repeat(boxWidth)
    console.log(theWidth); 
    let heightAsterick = "|"; 
    let theHeight = heightAsterick
    // let heightAsterick = "|";
    // let theHeight = heightAsterick + " ".repeat(boxHeight.value) + heightAsterick;
// for(i=1; i<=boxWidth; i++){

//     for(j=1; j<=boxHeight; j++){
//     }
// }
// }
console.log(theWidth); 

}

printBox(4,6); 
