//Variables
//Home Screen Buttons
const quizBtn = document.getElementById('quiz-btn');
const leaderboardBtn = document.getElementById('leaderboard-btn');
const howToPlayBtn = document.getElementById('how-to-play-btn');
const homeButtonIcon = document.getElementById('home-button');
//Quiz Screen
const startBtn = document.getElementById('start-btn');
const startQuiz = document.getElementById('start-quiz');
const answerButton1 = document.getElementById('answer1');
const answerButton2 = document.getElementById('answer2');
const answerButton3 = document.getElementById('answer3');
const answerButton4 = document.getElementById('answer4');
const quizQuestions = document.getElementById('questions');
const questionElement = document.getElementsByClassName('question');
const nextBtn = document.getElementById('next');
const questionTotal = document.getElementsByClassName('question-total');
const headerScore = document.getElementsByClassName('header-score');
//Results Screen
const tryAgainBtn = document.getElementById('try-again');
const goHomeResults = document.getElementById('results-go-home');
//How to play Screen
const goHomeHowToPlay = document.getElementById('how-to-play-home-btn');
//Leaderboard Screen
const goHomeLeaderboard = document.getElementById('leaderboard-home-btn');
//Game Sounds
const rightAnswerSound = new Audio('assets/sounds/right-answer.mp3');
const wrongAnswerSound = new Audio('assets/sounds/wrong-answer.mp3');
const clickSound = new Audio('assets/sounds/mouse-click.mp3');
let soundSlider = document.getElementsByClassName('sound-slider');
//This function plays the right sound when the answer selected is correct
function playRightSound() {
    if (!soundSlider.checked) {
        return;
    } else if (soundSlider.checked) {
        rightAnswerSound.volume = 0.1;
        rightAnswerSound.play();
    }
}
//This function plays the wrong sound when the answer selected is incorrect
function playWrongSound() {
    if (!soundSlider.checked) {
        return;
    } else if (soundSlider.checked) {
        wrongAnswerSound.volume = 0.1;
        wrongAnswerSound.play();
    }
}
//This function plays the mouse click sound when a button is clicked
function playClickSound() {
    if (!soundSlider.checked) {
        return;
    } else if (soundSlider.checked) {
        clickSound.volume = 0.1;
        clickSound.play();
    }
}


