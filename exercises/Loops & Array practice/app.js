function toggleSwithch(switches){
    var on = true;

    for (var i = 0; i < switches.length; i++){
        for (var j = 0; j < switches[i]; j++){
            on = !on;
        }
    } 

    if (on) {
        return "The Light is on"
    }else {
        return "The Light is off"
    }
}
console.log(toggleSwithch([2, 5, 435, 4, 3])); // "The light is on"
console.log(toggleSwithch([9, 3, 4, 2]));  // "The light is off"
console.log(toggleSwithch([1, 1, 1, 1, 3])); // "The light is on"
