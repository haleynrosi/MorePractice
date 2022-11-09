// Another practice problem for Javascript
// Write a function characterCount() that returns the count of a given character in a string. 
//The function will have 2 parameters, the input string and the character
// Example cases
// characterCount('DigitalCrafts','D') should return 1 as there are only one D in the string
// characterCount('DigitalCrafts','i') should return 2 as there are 2 i in the string
// Both the input string and the character are case insensitive (edited) 
// :bill:
// 1

// we need this to loop through the characters in the submitted string and identify the amount
// of times the character submitted with the string appears in the string. then we need to return
// the number of times the character is found in the string. 

function characterCount (string, character){ 
    let thisWord = string.toLowerCase();
    let countOfCharacter = 0;
    for(let i=0; i<thisWord.length; i++){
        if (thisWord[i] == character.toLowerCase()) {
            countOfCharacter++; 
        }
    } 
    console.log(countOfCharacter)  
}

characterCount("Athena", "A");


