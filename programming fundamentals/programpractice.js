
// let a = [9, 3, 34, 4, 3]

// for (i=0; i<a.length; i++){
//     console.log(a[i]);
// }

// a.forEach(print) 

// function print(n){
//     console.log(n)
// }

//^ both of these things do the same thing - iterate the items within the array



// let a = [9, 3, 34, 4, 3];
// let s = 0;

// a.forEach(add);
// function add(n,i){
//     s = s + n;
//     console.log(i);
// }
// console.log(s)


//more practice on forEach below


let a = [9,3,34,4,3];
let s = 0;
console.log("Before iteration")
console.log(a);

a.forEach(multiply);
function multiply(n,i,array){
    array[i] = n*2;
}
console.log("After iteration")
console.log(a);












