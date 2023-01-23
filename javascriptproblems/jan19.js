//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit
//the digits are ordered from most significant to least significant in left-to-right order
//the large integer does not contain any leading 0s

//increment the large integer by one and return the resulting array of digits

//input: digits = [1,2,3]
//output: digits = [1,2,4]
//incrementing by one gives 123 + 1 = 124. Thus the result is [1,2,4]

//input: digits = [9]
//output: digits = [1,0]

let wholeInteger = 0; 
let arrayTwo = [];

function plusOne(arrayOne){
    wholeInteger = arrayOne.join('');
    wholeInteger++;
    let newInteger = wholeInteger.toString();
    arrayTwo = newInteger.split('');
    console.log(arrayTwo);
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


function stringBean(a,b) {
    for(i in a){ 

    }

}

stringBean("egg", "add"); 