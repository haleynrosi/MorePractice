// //Given two integer arrays, find the numbers that is found in both arrays. the resulting output would be the array with all those numbers
// Example:
// a = [30,2,3,5,90]
// b = [9,2,6,5,100]
// output c = [2,5]


let arrayOne = [];
let arrayTwo = [];

let newArray = [];

function findMissingNumbers (arrayOne, arrayTwo){
    for(i =0; i<arrayOne.length; i++) {
        for(j=0; j<arrayTwo.length; j++) {
            if (arrayOne[i] == arrayTwo[j]){
                newArray.push(arrayOne[i])
            } 
        }
    }

    console.log(newArray);
}

findMissingNumbers([1,4,6,2],[2,3,4,5,6]);


// Problem 2:
// Given array of number 1..n find the missing number in the array
// for example:
// a = [1,2,4,6,7,8,9]
// missing numbers [3,5]


let missingNumArray = [];
let numArray = new Map([
]);

numMap.set(i, i++);

console.log(numMap.size)

// function missingNumArrayTwo () {
    
// }

// wtf is this below - practice tf out of it 

const findMissing = (a)=>{
    let x = new Map();
    let big = 0;
    let output = [];
    for(let n in a){
        //x.set(1,1) , big = 1
        //x.set(4,4) , big = 4
        //x.set(2,2) , big = 4
        //x.set(6,7) , big = 6
        //x.set(7,7) , big = 7
        //x.set(8,8) , big = 8
        x.set(a[n],a[n]);
        if(a[n]>big) {
            big = a[n];
        }
    }
    for(let i=1;i<=big;i++){
        if(!x.has(i)){
            output.push(i)
        }
    }
    return output;
}

let a = [1,4,2,6,7,8]

let output = findMissing(a);
console.log(output);


