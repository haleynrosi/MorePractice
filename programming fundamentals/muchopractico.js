let a = [2, 6, 12, 8, 9];

//one way to iterate through this array is with a forloop

for(i=0; i<a.length; i++) {
    console.log(a[i]);
}

//another way to iterate through this array is with forEach

// a.forEach(printA);

// function printA (num){
//     console.log(num);
// };


//Create a function that adds each element to the next in a
let b = 0;
a.forEach(addNum);
function addNum (n){
    b = b + n;
};
console.log(b);

let newArray = [ 3, 2, 13, 4];

let d = newArray.find(x=> x==3);

console.log(d);