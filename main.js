{/* <div class="container">
<h1>Simple Quiz App</h1>
<div id="quiz">
  <div id="question">Question</div>
  <div id="options">Options</div>
</div>
<button id="next-button">Next</button>
<div id="result"></div>
</div> */}

// Quiz data (array of objects)
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
      answer: "Harper Lee",
    },
  ];

  // DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const quiz = document.getElementById("quiz")

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion(){
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        optionsElement.appendChild(button);

        button.addEventListener("click", function(){
            checkAnswer(option);
        });
    })
}

function checkAnswer(selectedOption){
    const currentQuestion = quizData[currentQuestionIndex];
    if(selectedOption === currentQuestion.answer){
        score++;
    }
}

nextButton.addEventListener("click", function(){
    currentQuestionIndex++;

    if( currentQuestionIndex < quizData.length){
        loadQuestion();
    }else{
        showResult();
    }
})


function showResult(){
    quiz.style.display = "none";
    nextButton.style.display = "none";
    resultElement.textContent = `Your score: ${score} out of ${quizData.length}`;

}

loadQuestion();