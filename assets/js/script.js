//Variables

//Home Screen Buttons
const quizBtn = document.getElementById('quiz-btn');
const leaderboardBtn = document.getElementById('leaderboard-btn');
const howToPlayBtn = document.getElementById('how-to-play-btn');
const homeButtonIcon = document.getElementById('home-button');

//Quiz Screen
const startBtn = document.getElementById('start-btn');
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
const leaderboardList = document.getElementById('leaderboard-list');
const goHomeLeaderboard = document.getElementById('leaderboard-home-btn');

//Game Sounds
const rightAnswerSound = new Audio('assets/sounds/right_answer.mp3');
const wrongAnswerSound = new Audio('assets/sounds/wrong_answer.mp3');
const clickSound = new Audio('assets/sounds/mouse_click.mp3');
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
        wrongAnswerSound.volume = 0.3;
        wrongAnswerSound.play();
    }
}
//This function plays the mouse click sound when a button is clicked
function playClickSound() {
    if (!soundSlider.checked) {
        return;
    } else if (soundSlider.checked) {
        clickSound.volume = 0.3;
        clickSound.play();
    }
}

//Screen containers
const homeContainer = document.getElementById('home-container');
const howContainer = document.getElementById('how-to-play-container');
const leaderboardContainer = document.getElementById('leaderboard-container');
const startContainer = document.getElementById('start-quiz-container');
const questionsContainer = document.getElementById('questions-container');

//Variables

let username;
let shuffledQuestions;
let shuffledAnswers;
let currentQuestionIndex = 0;

//Add this to high scores file later
const highScores = JSON.parse(localStorage.getItem('highscores')) || [];

//Event Listeners

/**
 * Listens for the click of the quiz button in the home screen
 * runs playClickSound function
 * adds or removes the hide class
 * enters the start quiz screen
 */

quizBtn.addEventListener('click', () => {
    playClickSound();
    homeContainer.classList.add("hide");
    startContainer.classList.remove("hide");
});


/**
 * Listens for the click of the how to play button on the home screen
 * adds and removes the hide class to show the how to play screen
 */
howToPlayBtn.addEventListener('click', () => {
    playClickSound();
    homeContainer.classList.add("hide");
    howContainer.classList.remove("hide");
});

/**
 * Listens for the click of the leaderboard button 
 * runs the playClickSound function
 * adds or removes hide class to go to the leaderboard screen
 * store the score in local storage
 */

leaderboardBtn.addEventListener('click', () => {
    playClickSound();
    homeContainer.classList.add('hide');
    leaderboardContainer.classList.remove('hide');
    leaderboardList.innerHTML = highScores.map(highScores => {
        return `<li class="high-score">${highScores.name} - ${highScores.score}</li>`;
    }).join("");

});

/**
 * Listens for the click of the start button
 * runs the playClickSound function
 * runs the runGame function
 */
startBtn.addEventListener('click', () => {
    playClickSound();
    runGame();
});

