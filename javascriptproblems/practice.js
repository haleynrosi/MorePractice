//Given two strings, a and b, return true if they are equal to each other including 
//the backspaces appearing as # in the strings passed

//input a = 'ab#c'
//input b = 'ad#c'
//output would be true becasue the # deletes both the b and the d leaving 'ac' for both inputs


//we need this to take two different strings that include backspaces, and return a string stating
//if they are the same i.e., true or false

let aOutput = [];
let bOutput = []; 


function equalStrings(aString, bString){
    for(let i=0; i<aString.length; i++){
        if(aString[i] == '#'){
            aOutput.pop();
        } else {
            aOutput.push(aString[i])
        }
    }
    let aNewString= aOutput.join('');

    for(let j=0; j<bString.length; j++){
        if(bString[j] == '#'){
            bOutput.pop();
        } else {
            bOutput.push(bString[j])
        }
    }

    let bNewString = bOutput.join('')

    if(aNewString == bNewString) {
        console.log('true')
    } else {
        console.log('false')
    }
   
}

equalStrings("ab#c","ad#cd");