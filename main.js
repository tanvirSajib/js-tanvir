{/* <div class="container">
        <h1>Countdown Timer</h1>
        <input type="number" id="countdown">
        <button id="start">
            Start
        </button>
        <div id="display">
            <span id="timeLeft"></span>
        </div>
    </div> */}

const countdownInput = document.getElementById("countdown");
const startButton = document.getElementById("start");
const timeLeftDisplay = document.getElementById("timeLeft");
let countdown;

startButton.addEventListener("click", function(){
    let time = parseInt( countdownInput.value, 10 );

    if(isNaN(time) || time <=0){
        timeLeftDisplay.textContent = "Please enter a valid number";
        return;
    }

    clearInterval(countdown);
    timeLeftDisplay.textContent = time;

    countdown = setInterval(function(){
        time--;
        timeLeftDisplay.textContent = time;

        if( time <=0 ){
            clearInterval(countdown);
            timeLeftDisplay.textContent = "Time's Up";
        }
    }, 1000);

    console.log( time )
});