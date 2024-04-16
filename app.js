const questions = [
    {
        question: "What is the state flower of Karnataka?",
        answers: [
            { text: "Lotus", correct: false },
            { text: "Jasmine", correct: true },
            { text: "Rose", correct: false },
            { text: "Sunflower", correct: false }
        ]
    },
    {
        question: "Which famous monument in Karnataka is a UNESCO World Heritage Site?",
        answers: [
            { text: "Hampi", correct: true },
            { text: "Mysore Palace", correct: false },
            { text: "Gol Gumbaz", correct: false },
            { text: "Belur Temple", correct: false }
        ]
    },
    {
        question: "What is the traditional folk dance of Karnataka?",
        answers: [
            { text: "Bharatanatyam", correct: false },
            { text: "Kathak", correct: false },
            { text: "Yakshagana", correct: true },
            { text: "Kuchipudi", correct: false }
        ]
    },
    {
        question: "Which river forms the famous Jog Falls in Karnataka?",
        answers: [
            { text: "Krishna", correct: false },
            { text: "Kaveri", correct: false },
            { text: "Sharavathi", correct: true },
            { text: "Tungabhadra", correct: false }
        ]
    },
    {
        question: "Who was the first Chief Minister of Karnataka?",
        answers: [
            { text: "Kengal Hanumanthaiah", correct: true },
            { text: "B. D. Jatti", correct: false },
            { text: "Devaraj Urs", correct: false },
            { text: "S. Nijalingappa", correct: false }
        ]
    },
    {
        question: "Which city is known as the 'Silicon Valley of India'?",
        answers: [
            { text: "Mangalore", correct: false },
            { text: "Bengaluru", correct: true },
            { text: "Mysore", correct: false },
            { text: "Hubli", correct: false }
        ]
    },
    {
        question: "Which festival is celebrated as the Karnataka New Year?",
        answers: [
            { text: "Ugadi", correct: true },
            { text: "Ganesh Chaturthi", correct: false },
            { text: "Makar Sankranti", correct: false },
            { text: "Pongal", correct: false }
        ]
    },
    {
        question: "Which ruler built the Mysore Palace?",
        answers: [
            { text: "Tipu Sultan", correct: false },
            { text: "Wodeyar Dynasty", correct: true },
            { text: "Hyder Ali", correct: false },
            { text: "Krishnaraja Wadiyar IV", correct: false }
        ]
    },
    {
        question: "Which wildlife sanctuary in Karnataka is known for its population of elephants?",
        answers: [
            { text: "Bandipur National Park", correct: true },
            { text: "Bannerghatta National Park", correct: false },
            { text: "Nagarhole National Park", correct: false },
            { text: "Dandeli Wildlife Sanctuary", correct: false }
        ]
    },
    {
        question: "Which poet is known as the 'Father of Kannada Literature'?",
        answers: [
            { text: "Pampa", correct: true },
            { text: "Ranna", correct: false },
            { text: "Harihara", correct: false },
            { text: "Kumaravyasa", correct: false }
        ]
    },
    {
        question: "Which city in Karnataka is famous for its Durga Puja celebrations?",
        answers: [
            { text: "Mangalore", correct: false },
            { text: "Udupi", correct: false },
            { text: "Mysore", correct: true },
            { text: "Shimoga", correct: false }
        ]
    },
    {
        question: "Which dance form originated in the coastal regions of Karnataka?",
        answers: [
            { text: "Yakshagana", correct: false },
            { text: "Kuchipudi", correct: false },
            { text: "Karagattam", correct: false },
            { text: "Dollu Kunitha", correct: true }
        ]
    },
    {
        question: "What is the traditional attire of men in Karnataka?",
        answers: [
            { text: "Saree", correct: false },
            { text: "Dhoti", correct: true },
            { text: "Salwar Kameez", correct: false },
            { text: "Lehenga", correct: false }
        ]
    },
    {
        question: "Which of the following is a famous festival celebrated in the Kodagu district of Karnataka?",
        answers: [
            { text: "Hampi Festival", correct: false },
            { text: "Kambala Festival", correct: false },
            { text: "Mysore Dasara", correct: false },
            { text: "Coorg Festival", correct: true }
        ]
    },
    {
        question: "Which bird sanctuary is located in the Uttara Kannada district of Karnataka?",
        answers: [
            { text: "Ranganathittu Bird Sanctuary", correct: false },
            { text: "Bannerghatta Biological Park", correct: false },
            { text: "Gudavi Bird Sanctuary", correct: true },
            { text: "Bandipur National Park", correct: false }
        ]
    }
    
];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();

















