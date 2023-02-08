// 1) Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.









// 2) You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent 
// and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made

// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  
// The result of this move is that the string is "aaca", of which only "aa" is possible, 
// so the final string is "ca".


let s = ''; 

function duplicateLetters(s) {
    let stringArray = [];
    for(let i in s){ //this IF statement says if an index of the string is equal to the last index in the array - the array is being formed as the loop is happening 
    if(s[i] === stringArray[stringArray.length-1]){ //stringArray.length-1 grabs the last index in the array 
        stringArray.pop()
    } else {
        stringArray.push(s[i])
    }
    } console.log(stringArray)
}


duplicateLetters('hhbaca')


//first loop 
//first index is h
//h is not equal to the last index of stringarray bc stringarray is empty right now so we dont pop it
//push h into stringarray

//second loop
//second index is h
//h is equal to the last index of stringarray bc stringarray now has one index that is h
//so we pop off the last index of stringarray which is h now

//third loop 
//third index is b
//b is not equal to the last index of stringarray bc stringarray is currently empty

