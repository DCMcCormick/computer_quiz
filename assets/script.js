const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
//progress bar commented out
//const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "JavaScript is an ______ language?",
        choice1: "Object-Oriented",
        choice2: "Object-Based",
        choice3: "Procedural",
        choice4: "None of the Above",
        answer: 1
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        choice1: "getElementById()",
        choice2: "getElementByClassName()",
        choice3: "Both A and B",
        choice4: "None of the Above",
        answer: 3
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        choice1: "document.write()",
        choice2: "console.log",
        choice3: "window.alert()",
        choice4: "All of the above",
        answer: 4
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ... questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESIONS) {
        localStorage.setItem("mostRecentScore", score);
    //go to the end page
        return window.location.href="end.html";
    }
    //get questions
    questionCounter++;
    progressText.innerText = questionCounter + "/" + MAX_QUESIONS;

    //update progress bar
    //progressBarFull.style.width = '(${questionCounter / MAX_QUESTIONS) * 100}
    //px';

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    // get answer choices
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];
    });
    // splices out asked questions
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;

};
    
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
         selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

         if (classToApply === "correct" ) {
            incrementScore(CORRECT_BONUS);
         }

         selectedChoice.parentElement.classList.add(classToApply);

         setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();   
        }, 1000);
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}


startGame();