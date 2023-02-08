//You are given a large integer represented as an array of the integer digits, where each digits[i] is the ith digit
//the digits are ordered from most significant to least significant in left-to-right order
//the large integer does not contain any leading 0s

//increment the large integer by one and return the resulting array of digits

//input: digits = [1,2,3]
//output: digits = [1,2,4]
//incrementing by one gives 123 + 1 = 124. Thus the result is [1,2,4]

//input: digits = [9]
//output: digits = [1,0]


// let arrayOne = [];

function plusOne(arrayOne){

let stringInteger = arrayOne.join(''); // join the numbers in the array into a string of one number and assign variable
stringInteger++; //add 1 to that whole number variable
let newInteger = stringInteger.toString(); //convert whole number back to string to split each number
let arrayTwo = newInteger.split(''); //convert number string to an array of number strings
let newArray = arrayTwo.map((x)=>{ 
    return parseInt(x)
})
//map through the array of number strings and use parseInt to convert each individual index (x) to a number and assign it to a new array variable
console.log(newArray) 
}

plusOne([9]);


//Given two strings a and b check if the strings are both the same length, and if they have repeating
//characters that they are in the same position

//Ex: input: a= "egg", b= "add"
//    output: true

//Ex: input: a= "mouse", b= "house"
//    output: true

//Ex: input: a= "paper", b= "title"
//    output: true

//Ex: input: a= "too", b="bus"
//    output: false


//first check if each string is equal in length - if they aren't the same length it is automatiocally false
//now we check if each string has the same pattern of repeating, or non repeating characters

function stringBean(a,b) {
    const wordMap = new Map();
    if(a.length != b.length){
    console.log(false)
    return false;
    } else {
     for(let i=0; i<=a.length-1; i++){
      
    }

}
}

stringBean("egg", "add"); 