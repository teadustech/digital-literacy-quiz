const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const landingPage = document.getElementById('landing-page');
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
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
    },
    {
        question: "What is the main function of a web browser?",
        answers: [
            { text: "To access websites", correct: true },
            { text: "To create websites", correct: false },
            { text: "To store data", correct: false }
        ]
    },
    {
        question: "What is the purpose of a firewall?",
        answers: [
            { text: "To protect a computer network from unauthorized access", correct: true },
            { text: "To create a wireless network", correct: false },
            { text: "To create a backup of files", correct: false }
        ]
    },
    {
        question: "What is the file extension of a Word document?",
        answers: [
            { text: ".docx", correct: true },
            { text: ".pdf", correct: false },
            { text: ".txt", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hyperlink Text Manipulation Language", correct: false },
            { text: "High-level Text Management Language", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false }
        ]
    },
    {
        question: "Which programming language is known for its use in web development?",
        answers: [
            { text: "JavaScript", correct: true },
            { text: "Java", correct: false },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "What is the purpose of a mouse?",
        answers: [
            { text: "To interact with graphical user interfaces", correct: true },
            { text: "To type text", correct: false },
            { text: "To display images", correct: false }
        ]
    }
];

function startQuiz() {
    landingPage.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
}

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

// Event listeners
startButton.addEventListener('click', startQuiz);
