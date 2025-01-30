{/* <div class="game-container">
<h1>Rock, Paper, Scissors</h1>
<div class="buttons">
    <button class="choice" data-choice="rock">Rock</button>
    <button class="choice" data-choice="paper">Paper</button>
    <button class="choice" data-choice="scissors">Scissors</button>
</div>

<p id="result">Make your choice!</p>

</div> */}

const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice");
const resultDisplay = document.getElementById("result");

buttons.forEach(button => {
    button.addEventListener("click", function(){
        const userChoise = this.getAttribute('data-choice');
        const computerChoise = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(userChoise, computerChoise);
        resultDisplay.textContent = `You choose ${userChoise}, computer choose ${computerChoise}. ${result}`
    })
})


function determineWinner(user, computer){
    if(user === computer){
        return "It's a draw";
    }
    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}