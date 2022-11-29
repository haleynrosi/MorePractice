//what do we need this to do 
//we need this function to take a click event when any of the buttons are clicked
//that will

//create a function that makes the innerhtml/value of a button appear in the input

// const displayCalculator = document.getElementById("calculatorDisplay");
// const operatorKeys = document.getElementsById("operatorKey");



const numberKeys = document.querySelectorAll('#numberKey');
const calcDisplay = document.getElementById('calculatorDisplay');
const clearCalc = document.getElementById('clearKey');
const operatorKey = document.querySelectorAll('#operatorKey'); 


let calcArray = []; 
let calcNum = 0; 

numberKeys.forEach((b) => {
    b.addEventListener('click', function(){
        calcDisplay.innerHTML = b.innerHTML;
        calcArray.push(b.value);
        // console.log(calcArray)
        calcArray.map(Number); 
            })
        })

operatorKey.forEach((o) => {
    o.addEventListener('click', function(){
        calcDisplay.innerHTML = ` ${o.innerHTML}` ;

            } )
        })
        

clearCalc.addEventListener('click', (c) => {
    calcDisplay.innerHTML = "";
    calcArray = []; 
    // console.log(calcArray);
})




