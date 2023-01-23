//Given an array of strings and a string, check a string can be formed by characters from the second string. 
//each character can be used only once. Return the length of all strings that can be formed.


//Input: words = ['cat', 'bt', 'hat', 'tree'], chars= 'atach"
//output: 6
//explanation: the strings that can be formed are 'cat' and 'hat' so the answer is 3+3=6

//input: words = ['hello', 'world'], chars = 'welldonehoneyr'
//output: 10
//explanation: the strings that can be formed are 'hello' and 'world' so the answer is 5+5=10.



//create a function that takes one string, and an array of strings
//it needs to go through each i

let stringArray = []
let string = " ";
let characterCount = 0;
let trashArray = []





function stringLength(stringArray,string){

    stringArray.forEach(element => {
        for(let i in element){
           for(let j in string){
            if(element[i] != string[j].charAt){
            
            }
           }
        }
    });

    for(let i in stringArray){
        for(let j in stringArray[i]){
            for(let x in string){
                if(string[x] != stringArray[i].charAt(j)){
                    break; 
                } else {
                    characterCount++;
                }
               
            }
        }
    }
    console.log(characterCount)
}
stringLength(['cat','bt', 'hat', 'tree'],'atach')


