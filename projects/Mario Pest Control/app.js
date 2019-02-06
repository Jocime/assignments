function total(){
    var x= document.getElementById("Goombas-input").value;
    var y= document.getElementById("Bob-ombs-input").value;
    var z= document.getElementById("Cheep-cheeps-input").value;
    x = x * 5;
    y = y * 7;
    z = z * 11;
    var sum= (+x + +y + +z);
    console.log(sum);
    document.getElementById("output").innerHTML= `${sum}`;
}
document.getElementById("button").addEventListener("click", total)