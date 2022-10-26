//for loop practice and iterative statements

// for(a=0;a<10;a++){
//     console.log(a);
// }

// for(a=0;a<=100;a++){
//     console.log("number is "+a)
// }

// let b = 100; 
// while(b>0){
//   console.log(b);
// }


let n = [10, 4, 54,23,5]
let big = n[0];

for(i=0; i<n.length; i++){
    if (n[i] < big) {
        big = n[i];
    }

}
console.log(big)