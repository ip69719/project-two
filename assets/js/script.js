// Create questions for the game
let questions = [{
    imgSrc : "assets/images/lexus.png",
    optionA : "Lexus",
    optionB : "Lamborghini",
    optionC : "Lotus",
    correct : "optionA"
},{
    imgSrc : "assets/images/mercedes.png",
    optionA : "Mazda",
    optionB : "Mercedes",
    optionC : "McLaren",
    correct : "optionB"
},{
    imgSrc : "assets/images/toyota.png",
    optionA : "Tesla",
    optionB : "Tata",
    optionC : "Toyota",
    correct : "optionC"
}];

//Declare variables

//to keep track of current question
let currentQuestion = 0;

//to keep track of the score
let score = 0;

//to calculate total number of questions
let lastQuestion = questions.length - 1;

//Get the start button element and add event listener to it
let startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

//Get the restart button element and add event listener to it
let btnRestart = document.getElementById("btn-restart");
btnRestart.addEventListener("click", restartGame);

//Get the exit button element and add event listener to it
let btnExit = document.getElementById("btn-exit");
btnExit.addEventListener("click", returnHome);


//Get the show instructions element
let openModal = document.getElementById("show-modal");

//Get the close instructions button element
let closeModal = document.getElementsByClassName("close-modal")[0];

//Get the modal
let modalWindow = document.getElementById("modal");

//Get the overlay
let overlay = document.getElementById("overlay");

//Get the home block
let homeBlock = document.getElementById("main-container");

//Get quiz block
let quizContainer = document.getElementById("quiz-container");

// Get results block
let resultsContainer = document.getElementById("results-container");

//Get/display total number of questions in the quiz
let  totalQuestions = document.getElementById("total-questions");
totalQuestions.innerHTML = questions.length;

/**
 * Opens the modal with game instructions when show instructions is clicked
 */
openModal.onclick = function() {
    overlay.style.display = 'block';
    modalWindow.style.display = 'block';
};

/**
 * Closes the modal with game instructions when x is clicked
 */
closeModal.onclick = function() {
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
};

/**
 * Called when start button is clicked, hides the home content of the page and
 * takes user to game area
 */
function startGame(){
    homeBlock.style.display = 'none';
    quizContainer.style.display = 'block';
    displayProgress();
    displayQuestion();
}

/**
 * Creates div elements dynamically depending on the number of questions
 * learned and adopted the code from this post
 * https://stackoverflow.com/questions/42010723/creating-div-element-with-a-for-loop
 */
function displayProgress() {
    let progress = document.getElementById("progress");
    for(let i = 0; i <= lastQuestion; i++) {
        progress.innerHTML += '<div class="progress" id='+ i +'></div>';
    }
}

/**
 * Function to render question, called when user is taken to game area
 */
function displayQuestion() {
    //display logo image
    let questionImg = document.getElementById("question-img");
    questionImg.innerHTML = "<img src="+ questions[currentQuestion].imgSrc +">";
    
    //display alternative answers
    let optionA = document.getElementById("optionA");
    optionA.innerHTML = questions[currentQuestion].optionA;

    let optionB = document.getElementById("optionB");
    optionB.innerHTML = questions[currentQuestion].optionB;

    let optionC = document.getElementById("optionC");
    optionC.innerHTML = questions[currentQuestion].optionC;
}

/**
 * Function to check user answer against the correct answer and
 * displays the next question.
 * Called when user clicks on the answer box option
 */
function checkAnswer(userAnswer){

    if (userAnswer == questions[currentQuestion].correct) {
        alert("Good job! That is Correct Answer!");
        score++;
        answerCorrect();
    } else {
        alert("Oops! This is not correct :-(");
        answerWrong();
    }
    
    if(currentQuestion < lastQuestion) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResults();
    }
}

/**
 * Changes the color in the progress div to green if the answer is correct
 */
function answerCorrect() {
    document.getElementById(currentQuestion).style.backgroundColor = "green";
}

/**
 * Changes the color in the progress div to red if the answer is wrong
 */
function answerWrong() {
    document.getElementById(currentQuestion).style.backgroundColor = "red";
}

/**
 * Displays results and provides options to restart the game or return to the main page
 */
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    let userScore = document.getElementById("user-score");
    userScore.innerHTML = score;
}

 /**
 * Takes user to the main page if Exit button is clicked
 */
function returnHome() {
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    homeBlock.style.display = 'block';
    //reset current question index
    currentQuestion = 0;
    //reset score
    score = 0;
    //remove progress https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
    document.querySelectorAll('.progress').forEach(e => e.remove());
    resultsContainer.style.display = 'none';
}

 /**
 * Resets score and restarts the game when restart button is clicked
 */
function restartGame() {
    //reset current question index
    currentQuestion = 0;
    //reset score
    score = 0;
    //remove progress https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
    document.querySelectorAll('.progress').forEach(e => e.remove());
    resultsContainer.style.display = 'none';
    startGame();
}
