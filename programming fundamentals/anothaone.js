//check if the number is divisible by all of its digits 
//128 is true because it is divisible by 1, 2, and 8

//I need this to take an a number with any amount of integers and return true if the
//number can be divided by each individual integer and return false if it can't be 
//divided by each individual integer



let numberString = "";
let numberArray = [];
let integer = 0;

function isThisDivisble(number){ 
    let newNumber = number;//parameter takes a number
    numberArray.push(number) //
    numberString = numberArray.join('')
    for(let i in numberString) {
         integer += newNumber % numberString[i]
    } if(integer !== 0){
        return "False";
       } 
     return "True";
}

isThisDivisble(128);




// Given a sentence, capitalize each word.
// Example: The sun rises in the east => The Sun Rises In The East

//I need this function to take a string of words, and return the string of words 
//but with the first letter of each word within the string capitalizes. 
//turn each word within a string into its own individual string, then take the zero
//index of that string and .touppercase it 
//then combine all the strings together and return the new string

let newWord = " ";


 function capitalizeMe (lowerCaseWord) {
     let wordArray = lowerCaseWord.split(' ');
     for ( i in wordArray) {
          wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].substring(1);
     }
     newWord = wordArray.join(' ');
     console.log(newWord);
     return newWord;
 }
 capitalizeMe("How are you doing")

 //Given a string find the number of each vowel in it
 //Example: Hello => e=1, o=1
 //hello there => e=3, o=1



 let aVowel = 0; 
 let eVowel = 0; 
 let iVowel = 0; 
 let oVowel = 0; 
 let uVowel = 0; 


function vowelFunction(newString){
     let stringArray = newString.split('');
     for( i in stringArray){
          if(stringArray[i] == 'a'){
               aVowel++;
          } else if (stringArray[i] == 'e') {
               eVowel++;
          } else if(stringArray[i] == 'i'){
               iVowel++;
          } else if(stringArray[i] =='o') {
               oVowel++;
          } else if (stringArray[i] =='u'){
               uVowel++;
          } 
     }
     console.log("a = " + aVowel )
     console.log("e = " + eVowel )
     console.log("i = " + iVowel )
     console.log("o = " + oVowel )
     console.log("u = " + uVowel )  
}

vowelFunction("happier")
   



