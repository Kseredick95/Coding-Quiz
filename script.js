var questionsEl = document.querySelector(".questionnaire");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var start = document.querySelector("#startButton");

//variables for timer
var seconds = 60;
var minutes = 10;
var totalSeconds = minutes * 60;
var interval;
var secondsElapsed = 0;

//question variables
var i = 0;
var score = 0;

var questions = ["What is a helpful to test your code?", "What does .forEach do?", "Which is NOT an input type?"]

var answers = ["Console.log", "Replace for loops", "Alphebet soup"];

var falseAnswersOne = ["addEventListener", "for loops", "clicking the same button over and over"];

var falseAnswersTwo = ["Confuse you", "Magic", "Replace a while loop"];

var falseAnswersThree = ["var", "boolean", "string"];

//Questions and Answers
function questionOne() {

    falseAnswersOne.forEach(falseAnswer => {
        //Gives each item in falseAnswers a button
        var answerBtn = $(`<button class= "button" data-number=${falseAnswer}>` + falseAnswer + `</button>`);

        $("#buttons").append(answerBtn);
    });

    //Creates button for correct answer
    var correctBtn = document.createElement("BUTTON");
    correctBtn.innerHTML = answers[0];
    $("#buttons").append(correctBtn);

    //create click functions with if/else statements for highscores and next question

}; //end function




//timer functions

function getFormattedMinutes() {

    var secondsLeft = totalSeconds - secondsElapsed;

    var minutesLeft = Math.floor(secondsLeft / 60);

    var formattedMinutes;

    if (minutesLeft < 10) {

        formattedMinutes = 0 + minutesLeft;
    } else {
        formattedMinutes = minutesLeft;
    }

    return formattedMinutes;
}

function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;

    var formattedSeconds;

    if (secondsLeft < 10) {
        formattedSeconds = 0 + secondsLeft;
    }
    else {
        formattedSeconds = secondsLeft;
    }

    return formattedSeconds;
}

function printTime() {

    minutesDisplay.innerHTML = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();
}

function startTime() {
    questionOne();
    printTime();
    start.setAttribute("style", "background-color: white; border-color: white;")



    if (totalSeconds > 0) {
        interval = setInterval(function () {
            secondsElapsed++;
            printTime();

        }, 1000);
    }
    else {
        alert("Oops, you ran out of time!")
    }
}

start.addEventListener("click", startTime);




