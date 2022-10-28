//for loop practice and iterative statements

 for(a=0;a<10;a++){
    console.log(a);
 }

for(a=0;a<=100;a++){
    console.log("number is "+a)
 }



let n = [10, 4, 54,23,5]
let big = n[0];

for(i=0; i<n.length; i++){
    if (n[i] < big) {
        big = n[i];
    }

}
console.log(big)

//1) Given an array of 10 numbers, find the average
//2) Write a function which takes 2 parameters, a number 
//and an array. If the given number in the first parameter is 
//found in the given array which is the second parameter, print 
//"number found" if not print "number not found".

