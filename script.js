const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result');

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

function showQuestion(question) {
    questionContainer.innerHTML = '';
    const questionElement = document.createElement('p');
    questionElement.innerText = question.question;
    questionContainer.appendChild(questionElement);

    const answerButtons = document.createElement('div');
    answerButtons.classList.add('btn-grid');
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
    questionContainer.appendChild(answerButtons);
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
}

function showResult() {
    resultContainer.innerText = 'You got ' + score + '/' + questions.length + ' correct.';
}

function startQuiz() {
    startButton.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
}

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', () => {
    showResult();
    submitButton.style.display = 'none';
});
