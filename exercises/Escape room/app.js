var ask = require("readline-sync");

var isAlive = true;
var hasKey = false;

while(isAlive === true){
    var index = ask.keyInSelect(["Put hand in hole", "Find the key", "Open the door"], "Choose Wisely...")
    
    if(index === 0){
        console.log("Wasted")
        isAlive = false
    }

    if (index === 1){
        if(hasKey){
            console.log("no key here, check your pocket");
        } else {
            console.log("you found the key");
            hasKey = true;
        }
        
    }
    if (index === 2){
        if(hasKey){
            console.log("you're free");
            break;
        } else {
            console.log("it's locked")
        }   
    }
}