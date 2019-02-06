var form = document.getElementById("myForm");
var submit = document.getElementById('submit');
var nameList = document.getElementById('babyNames');

var names = [];

function addName(e) {
    var name = form.elements["name"].value;
    names.push(name);
    displayNames(names)
    form.elements["name"].value = '';
}

function displayNames (list) {
    nameList.innerHTML = '';
    for (i = 0; i < list.length; i++){
        nameList.innerHTML += `<li>${list[i]}</li>`
    }
}


submit.onclick = addName;