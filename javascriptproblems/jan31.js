//Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than n/2 times. 
//You may assume that the majority element always exists in the array.

//Example 1:
//Input: nums = [3,2,3]
//Output: 3

//Example 2:
//Input: nums = [2,2,1,1,1,2,2]
//Output: 2

//given an array of number values, with a length at any size, return the number that
//appear the majority of time which is the length of the array/2.
//this function needs to take an array


//map notes:
//

let count = 1;

function majorityNum(numArray){
    let majorityNum = (numArray.length/2)
    console.log(majorityNum)

    let arrayMap = new Map()
    for(i in numArray){ 
        if(arrayMap.has(numArray[i])){
            //get the value 
           let numberValue = arrayMap.get(numArray[i]);
            //add one to the value
            numberValue++
            //set the value
            arrayMap.set(numArray[i], numberValue)
           
        } else {
            arrayMap.set(numArray[i], 1)
    }
    //want the key that has the highest value - not the value, the key itself
    //is the key greater than the max I have seen so far
    arrayMap.forEach((value, key)=>{
        //iterate through the map and print the key if the value is equal to more than the 
        //majority number
        if(value >= majorityNum){
            console.log(key)
        } 
    })
} console.log(arrayMap)
}

majorityNum([5,5,4])