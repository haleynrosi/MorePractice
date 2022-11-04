

let str = "Race car".toLowerCase().replace(" ",""); 

function isPalindrome(string){
    let s = "";
    for(let i=str.length-1; i>=0; i--) {
        s = s + str[i];
    }
    if(str == s) return true;
    return false; 
}

isPalindrome(str);

let palinDrome = isPalindrome(str);

console.log(palinDrome)