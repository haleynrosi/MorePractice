// calling the functionwithCallback with another function 
// inside of it. this is passing an anonymous function to 
// in the callback function 

function functionWithCallback (callback){
    callback(1, 2, 3, 4);
}

functionWithCallback(function (a, b, c, d){
    console.log(a, b, c, d); 
});


// passing a defined function into the callback
// function below

function newFunctionForCallback (a, b, c, d) {
    console.log(a, b, c, d)
}; 

function newCallbackFunction (callback) {
    callback(1, 2, 3, 4);
}

newCallbackFunction(newFunctionForCallback);


//another example of using a callback function 

function sum(a, b, callback) {
    callback(a + b);
}

sum(2, 3, function (result){
    console.log("Result: " + result);
});



