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


