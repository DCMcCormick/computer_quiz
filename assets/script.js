const question = document.gitElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let quesionCounter = 0;
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
const MAX_QUESIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ... questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        console.log(e.target);
    });
});

startGame();