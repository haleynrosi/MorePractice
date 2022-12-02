//what do we need this to do 
//we need this function to take a click event when any of the buttons are clicked
//that will

//create a function that makes the innerhtml/value of a button appear in the input

// const displayCalculator = document.getElementById("calculatorDisplay");
// const operatorKeys = document.getElementsById("operatorKey");



let numberKeys = document.querySelectorAll('#numberKey');
let calcDisplay = document.getElementById('calculatorDisplay');
let clearCalc = document.getElementById('clearKey');
let operatorKeys = document.querySelectorAll('#operatorKey'); 
let equalsKey = document.getElementById('equalsKey').value;
let resultDisplay =  document.getElementById('result');
let calcArray = []; 
let calcNum = 0;
let calcString = "";

function displayFunction(value) {
    calcDisplay.value += value;
    calcDisplay.innerHTML = value;
    calcArray.push(value);
    // console.log(calcArray);
}

function calculateFunction() {
    calcString = calcArray.join('');
    // console.log(calcString)
    // console.log(eval(calcString))
    resultDisplay.innerText = eval(calcString);
}

function clearFunction() {
    let emptyString = "";
    let emptyArray = [];
    calcArray = emptyArray;
    calcString = emptyString;
    resultDisplay.innerText = 'Calculating...';
    calcDisplay.innerHTML = 0;

}




// function calculateFunction(){
//     let result = document.getElementById('result').value;
//     let num = eval(result);
//     document.getElementById('result').value = num;
//     console.log(typeof(num));
// }


// console.log(numberKeys.values);

// numberKeys.forEach((b) => {
//     b.addEventListener('click', function(){
//         calcDisplay.innerHTML = b.innerHTML;
//         calcArray.push(b.value);
//         //console.log(calcArray)
//         calcArray.map(Number); 
//             })
//         })

// operatorKey.forEach((o) => {
//     o.addEventListener('click', function(){
//         calcDisplay.innerHTML = ` ${o.innerHTML}` ;

//             } )
//         })
        


// clearCalc.addEventListener('click', (c) => {
//     calcDisplay.innerHTML = "";
//     calcArray = []; 
//     // console.log(calcArray);
// })




