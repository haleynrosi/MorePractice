//Write a function that takes one parameter named '
//temperature'. The function should print 'Pleasant' 
//if the temperature is between 60 and 80, 'Hot' if 
//between 80 and 100 , 'Very Hot' if above 100 , 'Chill' if less than 60

// function temperature(a) {
//     if (a < 60) {
//         console.log('Chill')
//     } else if (a >= 60 && a <= 80) {
//         console.log('Pleasant')
//     } else if (a >= 80 && a <= 100){
//         console.log('Hot')
//     } else if (a > 100){
//         console.log('Very Hot')
//     }
// }

// temperature(60)



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







