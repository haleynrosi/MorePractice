//Given a word return the encrypted format. Encryption would be a sequence of numbers based on the alphabet

//for example apple = #1#16#16#12#5

// we need this to take a word and and return 


//Encrypt function below

function encryptWord (string){
    let pound = "#"; 
    let alphabet = {
        "a":1,"b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 10, "k": 11, 
        "l": 12, "m": 13, "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, 
        "u": 21, "v": 22, "w": 23, "x": 24, "y": 25,"z": 26 }; 
    let emptyArray = []; 

 for (i=0; i<string.length; i++){
    emptyArray.push(alphabet[string[i].toLowerCase()]);
 }

 emptyArray = emptyArray.join(pound);

console.log(emptyArray);

}

 encryptWord("Kaleel");



//Decrypt function below: 

 function decryptWord (string){
    let alphabet = {
        01:"a", 02: "b", 03: "c", 04: "d", 05: "e", 06: "f", 07: "e", 08: "h", 09: "i", 10: "j", 11: "k", 
        12: "l", 13: "m", 14: "n", 15: "o", 16:"p", 17: "q", 18: "r", 19: "s", 20: "t", 
        21: "u", 22: "v", 23: "w", 24: "x", 25: "y", 26: "z" }; 
    let emptyArray = [];


    for(i=0; i<string.length; i++) {
        emptyArray.push(alphabet[string[i].toLowerCase()]);
    }

    emptyArray = emptyArray.join('');
    console.log(emptyArray);

 }

 decryptWord("018");