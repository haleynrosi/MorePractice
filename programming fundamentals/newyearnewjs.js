//Given an array of positive and negative numbers, arrange them in an alternate fashion such 
//that every positive number is followed by a negative and 
//vice-versa maintaining the order of appearance

// Input: arr[] = {1, 2, 3, -4, -1, 4}
//Output: arr[] = {-4, 1, -1, 2, 3, 4}


//we need this function to take an array with positive and negative numbers, and place them in the order
//they came in as a new array, except rearrange the negative to follow a positive and the positive to follow
//a negative

let negArray = [];
let posArray = [];
let secondArray = []; 

function newArray (firstArray){
    for(let i in firstArray) {
        let integerType = Math.sign(firstArray[i])
        if(integerType == 1) {
            posArray.push(firstArray[i])
        } else if (integerType == -1) {
            negArray.push(firstArray[i])
        }
    }

    for(let i in firstArray) {        //HELP WHY DOES IT WORK - its looping throught he first array??
            if(negArray[i] != null) {
                secondArray.push(negArray[i])
            }
            if(posArray[i] != null){
                secondArray.push(posArray[i])
            }
        }
    console.log(secondArray)

}

newArray([-2, -3, -5, 1, 2, 4]); 


//Given an array of numbers reverse every k consecutive 
//numbersinput array = [3,4,2,12,40,2,4]
//k = 3 output = [2,4,3,2,40,12,4]







//Given an array of unique numbers and a given number, return the list of combinations from
//the input that sum to the given number - you can use the same number multiple times to get
//the given number

//Go back to 1/7 recording at 1:01 to go over Kaleels answer to this problem again 


function sumCombinations(uniqueNumberList, givenNumber) {

    for(let i=0; i<uniqueNumberList.length; i++){

    }
}

sumCombinations([1,2,4], 8)