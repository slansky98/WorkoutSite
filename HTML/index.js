function displayWorkout(buttonName, exercises) {
    const workoutDisplay = document.getElementById("workoutDisplay");
    document.getElementById(buttonName).addEventListener('click', 
    function(){
        workoutDisplay.innerHTML = ""; // Clear previous content
        var ul = document.createElement("ul");
        for (let i = 0; i < exercises.length; i++) {
            var li = document.createElement("li");
            li.textContent = exercises[i];
            ul.appendChild(li);  
        }
        workoutDisplay.appendChild(ul);
    });
    
}



console.log("Hello world"); //Success
tuesdayExercises = [
    "Pushups - 45 seconds",
    "Squats Knee Drive - 45 seconds",
    "Glute bridge - 45 seconds",
    "Superman - 45 seconds",
    "Plank shoulder taps - 45 seconds"
];
wednesdayExercises = [
    "Jump squats - 40 seconds",
    "Mountain climbers - 40 seconds",
    "Plank to downward dog - 40 seconds",
    "Lunges - 40 seconds",
    "Hollow hold - 40 seconds"
];
fridayExercises = [
    "Inchworm walkout to pushup - 45 seconds",
    "Reverse lunge to knee drive - 45 seconds",
    "Side plank (swap sides at 23 seconds) - 45 seconds",
    "Bear crawl forward and backward - 45 seconds",
    "Squat pulse to jump (3 mini pulses, 1 jump) - 45 seconds"
];

displayWorkout("tuesWorkout", tuesdayExercises);
displayWorkout("wedWorkout", wednesdayExercises);
displayWorkout("friWorkout", fridayExercises);