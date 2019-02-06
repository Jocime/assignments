function findMiddleIndex(str){
    var length = str.length;
    var half = length / 2;
    var resultFloored = math.floor(half);
    return resultFloored;
}
function findMiddleIndex(str){
    return Math.floor(str.length / 2);
}



console.log(findMiddleIndex("hello"))
console.log(findMiddleIndex("hello world"))