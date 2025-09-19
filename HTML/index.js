function workoutListButton() {
    var tuesButton = document.createElement("BUTTON"); // Creates a blank button
    var tuesText = document.createTextNode("Tuesday routine");
    tuesButton.appendChild(tuesText);

    var wedButton = document.createElement("BUTTON")
    var wedText = document.createTextNode("Wednesday routine");
    wedButton.appendChild(wedText);

    var friButton = document.createElement("BUTTON")
    var friText = document.createTextNode("Friday routine");
    friButton.appendChild(friText);
    document.body.appendChild(tuesButton);
    document.body.appendChild(wedButton);
    document.body.appendChild(friButton);
}

function workoutList(){
    document.getElementById("dropDownTest").classList.toggle("show");
}

console.log("Hello world"); //Success
workoutListButton();