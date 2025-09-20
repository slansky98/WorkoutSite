function displayWorkout(buttonName, exercises) {
    const tuesdayExercises = [
        "Pushups - 45 seconds",
        "Rest - 20 seconds",
        "Squats Knee Drive - 45 seconds",
        "Rest - 20 seconds",
        "Glute bridge - 45 seconds",
        "Rest - 20 seconds",
        "Superman - 45 seconds",
        "Rest - 20 seconds",
        "Plank shoulder taps - 45 seconds"
    ]
    
    const workoutDisplay = document.getElementById("workoutDisplay");

    document.getElementById("tuesWorkout").addEventListener('click', 
    function(){
        var tueUl = document.createElement("ul");
        for (let i = 0; i < tuesdayExercises.length; i++) {
            var tueLi = document.createElement("li");
            tueLi.textContent = tuesdayExercises[i];
            tueUl.appendChild(tueLi);  
        }
        workoutDisplay.appendChild(tueUl);
        document.getElementById("tuesWorkout").disabled = true;
    });
    
}


function displayWorkout(buttonName, exercises) {
    const tuesdayExercises = [
        "Pushups - 45 seconds",
        "Rest - 20 seconds",
        "Squats Knee Drive - 45 seconds",
        "Rest - 20 seconds",
        "Glute bridge - 45 seconds",
        "Rest - 20 seconds",
        "Superman - 45 seconds",
        "Rest - 20 seconds",
        "Plank shoulder taps - 45 seconds"
    ]
    
    const workoutDisplay = document.getElementById("workoutDisplay");

    document.getElementById("tuesWorkout").addEventListener('click', 
    function(){
        var tueUl = document.createElement("ul");
        for (let i = 0; i < tuesdayExercises.length; i++) {
            var tueLi = document.createElement("li");
            tueLi.textContent = tuesdayExercises[i];
            tueUl.appendChild(tueLi);  
        }
        workoutDisplay.appendChild(tueUl);
        document.getElementById("tuesWorkout").disabled = true;
    });
    
}



console.log("Hello world"); //Success
tuesdayWorkout();