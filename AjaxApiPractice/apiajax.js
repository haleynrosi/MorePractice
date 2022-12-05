const request = new XMLHttpRequest(); // 
request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this);
    }
}; 

request.open("GET", "./sample.text");

request.send(); //nothing will print in the console bc when the readyState is 4, the status
                //code is still 404 not found without a server


