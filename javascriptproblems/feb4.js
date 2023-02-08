//Given a string array words, return an array of all characters that show up 
//in all strings within the words (including duplicates). 
//You may return the answer in any order.

//Example 1:

//Input: words = ["bella","label","roller"]
//Output: ["e","l","l"]

//Example 2:

//Input: words = ["cool","lock","cook"]
//Output: ["c","o"]


let characterArray = []; 

function duplicateCharacters(characterArray){
    let characterMap = new Map();
    let individualArray = []; 
    let duplicateArray = [];

    for (let i in characterArray){
        for(let j in characterArray[i]){
            if(characterMap){
                
            }
        }
    }

}

duplicateCharacters(['bella', 'label', 'roller'])