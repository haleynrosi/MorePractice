//Write a function that takes one parameter named '
//temperature'. The function should print 'Pleasant' 
//if the temperature is between 60 and 80, 'Hot' if 
//between 80 and 100 , 'Very Hot' if above 100 , 'Chill' if less than 60

 function temperature(a) {
     if (a < 60) {
         console.log('Chill')
     } else if (a >= 60 && a <= 80) {
        console.log('Pleasant')
     } else if (a >= 80 && a <= 100){
        console.log('Hot')
     } else if (a > 100){
       console.log('Very Hot')
    }
 }

 temperature(60)











