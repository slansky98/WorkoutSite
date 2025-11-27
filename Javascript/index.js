
// Watch section

const display = document.getElementById("display");
const exerciseDisplay = document.getElementById("exerciseDisplay");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let exerciseChoice = "";
let exerciseNumber = 0;
let test = 0;
let lastUpdateTime = 0;
let workoutDuration = 0;
let workoutStartTime = 0; // Track when current exercise started
let breakDuration = 0; //How long the break is between exercises

function start(){
    if(!isRunning && exerciseChoice != ""){
        startTime = Date.now() - elapsedTime;
        workoutStartTime = 0; // Reset workout timer
        timer = setInterval(updateTime, 10);
        isRunning = true;
        exerciseDisplay.textContent = ("Current Workout: " + exerciseChoice[exerciseNumber]);
        getWorkoutDuration(exerciseChoice);
        exerciseNumber++;
    }
    else if (exerciseChoice == ""){
        alert("Please select a workout first!");
    }

}


function stop(){
    if(isRunning){
       clearInterval(timer);
       elapsedTime = Date.now() - startTime;
       isRunning = false; 
    }

}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
    timeRemaining.textContent = "";
}

function updateTime(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    
    const exerciseElapsedTime = elapsedTime - workoutStartTime;
    const exerciseSeconds = Math.floor(exerciseElapsedTime / 1000);

    // Trigger a visual alert/sound; 5 second countdown before WorkoutDuration is up
    if (exerciseSeconds > 0 && exerciseSeconds === (workoutDuration - 5) && exerciseSeconds !== lastUpdateTime) {
        lastUpdateTime = exerciseSeconds;
        let audio = document.getElementById("alertSound");
        let timeRemaining = document.getElementById("timeRemaining");
        for (let i = 0; i <= 5; i++){
            setTimeout(function(){
            countdown(i);
                }, i * 1000);
            }   
        timeRemaining.textContent = "";
    }
    // Trigger exercise change every workoutDuration seconds
    if(exerciseSeconds > 0 && exerciseSeconds === workoutDuration){
        workoutStartTime = elapsedTime; // Reset workout timer for next exercise
        getWorkoutDuration(exerciseChoice);
        showCurrentExercise(exerciseChoice);
        console.log("Workout Duration: " + workoutDuration);
        exerciseNumber++;
        if (exerciseNumber >= exerciseChoice.length){
            exerciseNumber = 0;
        }  
    }
}


function showCurrentExercise(exerciseChoice){
    const exerciseDisplay = document.getElementById("exerciseDisplay");
    exerciseDisplay.textContent = "Current Workout: " + exerciseChoice[exerciseNumber];
    console.log("New ExerciseNumber: " + exerciseNumber);
}

function countdown(i){
    timeRemaining.textContent = "Break in: " + (5 - i) + " second(s)";
    let audio = document.getElementById("alertSound")
    audio.play();
    if (i == 5){
        timeRemaining.textContent = ""
    }
}
// Workout section

//Get workout duration gets how long you should be doing the exercise for. Used for the timer to determine when to switch workouts.
function getWorkoutDuration(exerciseChoice){
    workoutDuration =  parseInt(exerciseChoice[exerciseNumber].split("-")[1].split(" ")[1]);
}

function displayWork(exercises){
    const workoutDisplay = document.getElementById("workoutDisplay");
    workoutDisplay.innerHTML = ""; // Clear previous content
    var ul = document.createElement("ul");
    for (let i = 0; i < exercises.length; i++) {
        var li = document.createElement("li");
        li.textContent = exercises[i];
        ul.appendChild(li);  
    }
    workoutDisplay.appendChild(ul);
    exerciseChoice = exercises;

}

function breakTime(){
    const breakDisplay = document.getElementById("BreakTime");
    breakDuration = document.getElementById("breakInput").value;
    breakDisplay.textContent = "Break Time for " + breakDuration + " seconds.";
}

function resetBreakTime(){
    const breakForm = document.getElementById("BreakTime");
    breakForm.reset();
    breakForm.innerHTML = `<input type="number" id="breakInput" placeholder="Break time in seconds">
    <input type="button" value="Set Break Time" onclick="breakTime()">`;
    breakDuration = 0;
}
function workoutButton(buttonName, exercise) {
    const workoutDisplay = document.getElementById("workoutDisplay");
    document.getElementById(buttonName).addEventListener('click', function(){
        displayWork(exercise);
    });

    
}





console.log("Hello world"); //Success

function main(){
    tuesdayExercises = [
        "Pushups - 10 seconds",
        "Squats Knee Drive - 15 seconds",
        "Glute bridge - 10 seconds",
        "Superman - 20 seconds",
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
    workoutButton("tuesWorkout", tuesdayExercises);
    workoutButton("wedWorkout", wednesdayExercises);
    workoutButton("friWorkout", fridayExercises);


    
}


main();