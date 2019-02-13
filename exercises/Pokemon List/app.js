var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
        var data = JSON.parse(xhr.responseText)
        console.log(data)
    } 
};

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();