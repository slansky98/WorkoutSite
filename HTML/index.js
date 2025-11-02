
// Watch section

const display = document.getElementById("display");
const exerciseDisplay = document.getElementById("exerciseDisplay");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let exerciseChoice = "";

function start(){
    if(!isRunning && exerciseChoice != ""){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 0);
        isRunning = true;
        exerciseDisplay.textContent = ("Current Workout: " + exerciseChoice[0]);
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
    

    // Trigger a visual alert/sound at 5 sec, 4 sec, 3 sec, 2 sec, 1 sec etc
    if ((parseInt(seconds) % 10 == 0 && milliseconds == '00') & parseInt(seconds) != 0) { // This condition triggers a sound every 20 seconds.
        let audio = document.getElementById("alertSound");
        let timeRemaining = document.getElementById("timeRemaining");
        for (let i = 0; i <= 5; i++){
            setTimeout(function(){
            countdown(i);
                }, i * 1000);
            }   
            timeRemaining.textContent = "";
        }
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

function workoutButton(buttonName, exercise) {
    const workoutDisplay = document.getElementById("workoutDisplay");
    document.getElementById(buttonName).addEventListener('click', function(){
        displayWork(exercise);
    });
    
}

function showExercise(exercise){
    const exerciseDisplay = document.getElementById("exerciseDisplay");
    for (let i = 0; i < exercise.length; i++){
        setTimeout(function(){
            exerciseDisplay.textContent = "Current Workout: " + exercise[i];
        }, i * 45000); // Change exercise every 45 seconds
    }
}
console.log("Hello world"); //Success

function main(){
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
    workoutButton("tuesWorkout", tuesdayExercises);
    workoutButton("wedWorkout", wednesdayExercises);
    workoutButton("friWorkout", fridayExercises);


    
}


main();