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

//to calculate total number of questions
let lastQuestion = questions.length - 1;

//Get the start button element and add event listener to it
let startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

//Get the show instructions element
let openModal = document.getElementById("show-modal");

//Get the close instructions button element
let closeModal = document.getElementsByClassName("close-modal")[0];

//Get the modal
let modalWindow = document.getElementById("modal");

//Get the overlay
let overlay = document.getElementById("overlay");

/**
 * Opens the modal with game instructions when show instructions is clicked
 */
openModal.onclick = function() {
    overlay.style.display = 'block';
    modalWindow.style.display = 'block';
}

/**
 * Closes the modal with game instructions when x is clicked
 */
closeModal.onclick = function() {
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}

/**
 * Called when start button is clicked, hides the home content of the page,
 * takes user to game area
 */
function startGame(){
    let homeBlock = document.getElementById("main-container");
    homeBlock.style.display = 'none';
    let quizContainer = document.getElementById("quiz-container");
    quizContainer.style.display = 'block';
}

/**
 * Function to render question, called after user is taken to game area
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

displayQuestion()

/**
 * Function to check user answer against the correct answer and
 * displays the next question.
 * Called when user clicks on the answer box option
 */
function checkAnswer(userAnswer){

    if (userAnswer == questions[currentQuestion].correct) {
        alert("That is Correct Answer! Well Done!");
    } else {
        alert("This is Incorrect :-( !" );
    }
    
    if(currentQuestion < lastQuestion) {
        currentQuestion++;
        displayQuestion();
    } else {
        alert("end of game");
    }
}