

function addnumbers(a,b) {
    let c = a + b; 
    console.log(c)
}

addnumbers(6,5);

function simplecalculator(a,b,o){
   if (o == '+') {
      let c = a +b;
      console.log(c);
   } else if (o == '-') {
     let c = a-b;
     console.log(c);
   }
   else if (o == '*') {
    let c = a * b;
    console.log(c);
   }
   else {
    let c = "not a thing my guy";
    console.log(c);
   }

}

//

simplecalculator(4,5,'+')
simplecalculator(2,3,'*')








