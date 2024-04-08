const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const submitButton = document.getElementById('submit-button');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What does CPU stand for?",
        answers: [
            { text: "Central Processing Unit", correct: true },
            { text: "Computer Personal Unit", correct: false },
            { text: "Central Personal Unit", correct: false }
        ]
    },
    {
        question: "What is the full form of RAM?",
        answers: [
            { text: "Random Access Memory", correct: true },
            { text: "Read Access Memory", correct: false },
            { text: "Randomized Access Memory", correct: false }
        ]
    },
    {
        question: "What is the purpose of an operating system?",
        answers: [
            { text: "To manage hardware resources", correct: true },
            { text: "To perform calculations", correct: false },
            { text: "To store data", correct: false }
        ]
    }
];

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtons.innerHTML = ''; // Clear existing buttons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    submitButton.style.display = 'none';
    resultElement.innerText = 'You got ' + score + '/' + questions.length + ' correct.';
}

// Initialize the quiz
showQuestion();
