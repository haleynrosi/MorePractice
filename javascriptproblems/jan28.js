//Given an array of integers arr, find the number that has a frequency in the array equal to its value.
//Return the largest one if more than one. 
//If there is none return -1
//Input: arr = [2,2,3,4]
//Output: 2Explanation: The only number in the array is 2 because frequency[2] == 2.
//Input: arr = [1,2,2,3,3,3]Output: 3Explanation: 1, 2 and 3 are all valid, return the largest of them.
//Input: arr = [2,2,2,3,3]Output: -1Explanation: There are no numbers in the array.

//we need to create a map
//loop through the array and set each key the number of the array, and the value to the times that number appears

function keyEqualsValue(frequencyArray){
    let keyValueMap = new Map();
    for(let i in frequencyArray){
        if(keyValueMap.has(frequencyArray[i])){
            let valueNum = keyValueMap.get(frequencyArray[i]); //.get recieves the key as a parameter and returns the value
            valueNum++
            keyValueMap.set(frequencyArray[i], valueNum)
        } else{
            keyValueMap.set(frequencyArray[i], 1)
        }
    } 
    //this finds the largest number value in the map and we assigned it to the maxValue variable
    const maxValue = Math.max(...keyValueMap.values())
    // the '...' is the spread operator allows for an iterable to be expanded where more arguments are expected
    //the max() function expects individual values as parameters and the spread operator allows it to 
    //recieve an entire map, array, or string, instead of individual numbers/indexs within it
    console.log(maxValue)

    //below iterates through the keys and values of the map and provides two conditions
    //if the first condition is met, the for loop stops and prints that key but if it is not met
    //it moves on to the second condition and prints that key
    for( let [key, value] of keyValueMap ){
          if(key === value && key === maxValue ){
            console.log(key)
            break;
        } else if(key === value && key != maxValue){
            console.log(key)
        }
    }
}

keyEqualsValue([4,4,4,4,3,3,3,2,2,1,1])