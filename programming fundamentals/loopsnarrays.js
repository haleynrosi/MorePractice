// let a = [4,2,6,0,8]
// let b = [9,4,3,5,12,33,4]

// let c = a.concat(b)

// console.log(c)

let arr1 = ["Haley", "Fisher", "Javascript"]
let arr2 = [11, 1, 2022]


function reintroduceYourself() {
    arr1.push(" HTML", " CSS", " React", " Bananas");
    arr1.shift();
    arr1.shift();
    console.log("I am learning " + arr1.join() + ".")
    arr1.pop();
    console.log(arr1);
    arr1.push(" NodeJS");
    console.log("I am learning " + arr1[4] + ".")
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


//2) Given two arrays a and b find the product of elements to put into another array. 
//a and b be could be of different lengths. if there is no 
//element found in the other array multiply by 1 example:

let arrOne = [2, 4, 7, 18, 5]    
let arrTwo = [1, 6, 3, 8]
let arrThree = []
let b = 0;



//we need to find the product of index 0-3 of arrOne and arrTwo
//and find the product of arrOne[4] and 1. then we need to push these
// products into a new array. arrOne[4] * 1 = newIndex

function arrProduct() {
    let newIndex = 0;
    if(arrTwo < arrOne) {
        for(let i = 0; i < arrTwo.length; i++) {
            arrThree.push((arrTwo[i] * arrOne[b]));
            b++;
        } 
        newIndex = arrOne[4] * 1;
        arrThree.push(newIndex);
        return arrThree;
    }
     if (arrTwo > arrOne) {
            for(let j = b; j<arrOne.length; j++){
                arrThree.push((arrOne[b] * arrTwo[i]))
                b++;
            }
        } 
        newIndex = arrTwo[4] * 1;
        arrThree.push(newIndex);
        return arrThree;

    }      

arrProduct();   

console.log(arrThree);


//Exercise: Learning about For Loops

let DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const myFriendsSchedule = {
    Monday: true,
    Tuesday: false,
    Wednesday: true,
    Thursday: false,
    Friday: false,
    Saturday: true,
    Sunday: false
}

const myMoneySchedule = {
    Monday: 150,
    Tuesday: 120,
    Wednesday: 110,
    Thursday: 75,
    Friday: 150,
    Saturday: 120,
    Sunday: 80
}

function canWeGoToTheMovies(){
    for(let i=0; i<DAYS_OF_WEEK.length; i++){
        console.log(DAYS_OF_WEEK[i]);
        let dayOfWeek = DAYS_OF_WEEK[i];
        if (myMoneySchedule[dayOfWeek] > 100 && myFriendsSchedule[dayOfWeek] == true){
            console.log( "On " + dayOfWeek + " we can go to the movies together! ")
        } else if (myMoneySchedule[dayOfWeek] < 100 || myFriendsSchedule[dayOfWeek] == false){
            console.log("On " +dayOfWeek + " neither of us can go to the movies!")
        } else if (myMoneySchedule[dayOfWeek] < 100 && myFriendsSchedule[dayOfWeek] == false){
            console.log("On " +dayOfWeek + " neither of us can go to the movies!")
        } else if (myMoneySchedule[dayOfWeek] < 100 && myFriendsSchedule[dayOfWeek] == true){
            console.log("On " + dayOfWeek + " you can go to the movies, but I can't!")
        }
    } 
    
}

canWeGoToTheMovies();


//write a function that takes printPyramind as a name - takes two paramters
//that are numbers and prints pyramids 




