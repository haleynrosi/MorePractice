//es6 is the latest version of javascript - not a new language just a new version

//default parameters

function add(x,y=10){  // y=10 is a default parameter
    const c= x+y;
    console.log(c);
}

add(3);

//let and const were also introduced in es6 syntax

// spread/rest ...

//look in terminal for everything that this stuff below does

const a =[1,2,3,4,5];
const b = [10,20,30];
const c = [...a,...b];
console.log(...a);
console.log(c);
console.log(...c); 
const x = "Welcome";
console.log(...x);


const car = {
    model: "Toyota",
    color: "Red"
}

const vehicle = {
    type: "car"
}


const z = {...car,...vehicle};
console.log(z); 

//... rest operator

//looks the same as spread - array to value its called spread - value to array its called rest 




//Destructuring parameters - converting an array or object into individual variables

const p =[10, 2, 3, 0]
const [r,s] = p; 
console.log(r); //will print out 10 in the console bc it assigned 10/p[0] to the variable r

const {model, color} = car; //has to match the key of the car object
console.log(model);


