//Maps have nothing to do with an actual map - its a a way to store collection data in javascript. arrays
//are a away to store multiple values as a collection in javascript. Maps are used for the same
//purpose but the way they store the data is different.
//You are mapping a Key to a Value

const names = ["Kaleel", "Marcus", "Alyssa", "Alfred"]; 

//iterate the array to find a specfic element

for (let i in names){
    console.log(names[i]);
}; // prints out the actual names/strings of the array



const namesMap = new Map(); //this is how to declare a map/empty map in memory 
namesMap.set("A", ["Alfred", "Ashley"]); //.set takes two parameters, one is the key and the other is a value
namesMap.set("B", ["Bob", "Bethany"]);

namesMap.get("A") //need to look by the Key specifically
console.log(namesMap); 

//for Map - you access the value through the key - similarly how you access the value of an 
//element in an array through the index, you access the value of a Map through its key

console.log(namesMap.has("Z")); //whether the Map has a "Z" value


namesMap.forEach((v,k)=>{ //first parameter is the value, the second one is the key - JS knows this
    console.log(k); 
    console.log(v);       //if it was just one parameter is would assume thats the value
});         

namesMap.forEach((v) => {
    for(let i in v){     // for..in 
        console.log(v[i]); 
    }
}

)       //this will print the values for each key in the namesMap Map



//practice problem from class -
//given a non-empty array of integers nums, every element appears twice except
//for one. Find that single one. 
 


const arrayMap = new Map(); 
arrayMap.set("nums1", [2,2,1]);
// arrayMap.set("nums2", [4,1,2,1,2]);
// arrayMap.set("nums3", [1]);

arrayMap.forEach()