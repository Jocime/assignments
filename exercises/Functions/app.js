// function sum(paramOne, paramTwo){
//     console.log(paramOne + paramTwo)
// }

// sum(1, 2)

 i = max (75, 5, 80, 104);

function findmax(){
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[I];
        }
    }
    return max;
}