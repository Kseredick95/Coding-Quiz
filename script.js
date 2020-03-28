var questionsEl = document.querySelector(".questionnaire");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var start = document.querySelector("#startButton");
var nextBtn = document.querySelector("#nextBtn");
var questionAsk = document.querySelector("#questionHead");
var input = document.querySelector("#userInput")

//variables for timer
var seconds = 60;
var minutes = 10;
var totalSeconds = minutes * 60;
var interval;
var secondsElapsed = 0;

//question variables
var i = 0;
var score = 0;
var askQuestion;
var correctBtn;
var answerBtn = 0;
var buttons;
var highScores = "High Scores: "

//Storage
var scoreStore = window.localStorage;


//next button
nextBtn = document.createElement("BUTTON").innerText = "Next";

var questions = ["What is a helpful to test your code?", "What does .forEach do?", "Which is NOT an input type?"]

var answers = ["Console.log", "Replace for loops", "Alphebet soup"];

var falseAnswersOne = ["addEventListener", "for loops", "clicking the same button over and over"];

var falseAnswersTwo = ["Confuse you", "Magic", "Replace a while loop"];

var falseAnswersThree = ["var", "boolean", "string"];

//Highscores
function highScore() {
    $("#nextBtn").remove();
    $("#buttons").empty();
    $("#questionHead").empty();

    //header
    questionAsk = $(`<h2>` + highScores + `</h2>`)
    $("#questionHead").append(questionAsk);

    //create score list
    var scoreList = document.querySelector("ul");
    scoreList.innerText = ""

    //Add text input
    input = document.createElement("INPUT", "class = input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Enter name");
    document.body.appendChild(input);

    //Submit text
    var submitBtn = document.createElement("BUTTON");
    submitBtn.innerHTML = "Submit";
    $("#buttons").append(submitBtn);

    function renderInput(inputText) {
        var li = document.createElement("li");
        li.textContent = inputText + " Score:" + score;
        scoreList.appendChild(li);


        //Fix inputText to state name. Find way to load prior highscores
        scoreStore.setItem("Name", inputText);
        scoreStore.setItem("Score", score);
    }

    $(submitBtn).on("click", function (event) {
        event.preventDefault();

        var inputText = input.value.trim();
        input.prepend(inputText);
        input.value = "";

        renderInput(inputText);


    });
}


//Questions and Answers
function questionThree() {
    $("#buttons").empty();
    $("#questionHead").empty();

    questionAsk = $(`<h2>` + questions[2] + `</h2>`)
    $("#questionHead").append(questionAsk);


    falseAnswersThree.forEach(falseAnswer => {
        //Gives each item in falseAnswers a button
        answerBtn = $(`<button class= "button" data-number=${falseAnswer}>` + falseAnswer + `</button>`);

        $("#buttons").append(answerBtn);
    });

    //Creates button for correct answer
    var correctBtn = document.createElement("BUTTON");
    correctBtn.innerHTML = answers[2];
    $("#buttons").append(correctBtn);

    $(answerBtn).on("click", function () {
        $("#nextBtn").on("click", function () {
            highScore();
        });

    });

    $(correctBtn).on("click", function () {
        score += 10;
        $("#nextBtn").on("click", function () {
            highScore();
        });
        console.log(score);
        return score;

    });

}; //end function

function questionTwo() {
    $("#buttons").empty();
    $("#questionHead").empty();


    questionAsk = $(`<h2>` + questions[1] + `</h2>`)
    $("#questionHead").append(questionAsk);


    falseAnswersTwo.forEach(falseAnswer => {
        //Gives each item in falseAnswers a button
        answerBtn = $(`<button class= "button" data-number=${falseAnswer}>` + falseAnswer + `</button>`);

        $("#buttons").append(answerBtn);
    });

    //Creates button for correct answer
    var correctBtn = document.createElement("BUTTON");
    correctBtn.innerHTML = answers[1];
    $("#buttons").append(correctBtn);

    $(answerBtn).on("click", function () {
        $("#nextBtn").on("click", function () {
            questionThree();
        });

    });

    $(correctBtn).on("click", function () {
        score += 10;
        $("#nextBtn").on("click", function () {
            questionThree();
        });
        return score;

    });

}; //end function

function questionOne() {

    //Print question
    questionAsk = $(`<h2>` + questions[0] + `</h2>`)
    $("#questionHead").append(questionAsk);

    falseAnswersOne.forEach(falseAnswer => {
        //Gives each item in falseAnswers a button
        answerBtn = $(`<button class= "button" data-number=${falseAnswer}>` + falseAnswer + `</button>`);

        $("#buttons").append(answerBtn);
    });

    //Creates button for correct answer
    correctBtn = document.createElement("BUTTON");
    correctBtn.innerHTML = answers[0];
    $("#buttons").append(correctBtn);

    $(answerBtn).on("click", function () {
        $("#nextBtn").addClass("btn").append(nextBtn).on("click", function () {
            questionTwo();
        });
    });

    $(correctBtn).on("click", function () {
        score += 10;
        $("#nextBtn").addClass("btn").append(nextBtn).on("click", function () {
            questionTwo();
        });
        return score;
    });

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




