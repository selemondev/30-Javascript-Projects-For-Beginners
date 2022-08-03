const timeDisplay = document.querySelector("#timeDisplay");
const lapTimeDisplay = document.querySelector("#lapTimeDisplay");
const startButton = document.querySelector("#startButton");
const lapButton = document.querySelector("#lapButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let laps = 1;
let lastLap = {hrs: 0, mins: 0, secs: 0, ms: 0};
let hrs = 0;
let mins = 0;
let secs = 0;
let ms = 0;



// start the timer
startButton.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1);
    }
});

// lap
lapButton.addEventListener("click", () => {
    if (!paused) {
        paused = false;
        addLap();
    }
});
// pause the timer
pauseButton.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});


// reset the timer
resetButton.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    laps = 1;
    lastLap = {hrs: 0, mins: 0, secs: 0, ms: 0};
    hrs = 0;
    mins = 0;
    secs = 0;
    ms = 0;
    timeDisplay.textContent = "00:00:00:00";
    lapTimeDisplay.textContent = "";
});



function pad(unit) {
    return (("0") + unit).length > 2 ? unit : "0" + unit;
}

// update the timer
function updateTime() {
    elapsedTime = Date.now() - startTime;

    ms = Math.floor((elapsedTime / 10) % 100);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);


    ms = pad(ms);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}:${ms}`;
}

function addLap() {
    
    let lapMs = Math.abs(ms - lastLap.ms);
    let lapSecs = Math.abs(secs - lastLap.secs);
    let lapMins = Math.abs(mins - lastLap.mins);
    let lapHrs = Math.abs(hrs - lastLap.hrs);
    lastLap = {hrs, mins, secs, ms};

    lapMs = pad(lapMs);
    lapSecs = pad(lapSecs);
    lapMins = pad(lapMins);
    lapHrs = pad(lapHrs);

    let printLap = document.createElement("li");
    printLap.textContent = `Lap ${laps} ${lapHrs}:${lapMins}:${lapSecs}:${lapMs}`;
    lapTimeDisplay.append(printLap);
    laps += 1;
}