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
var questNum = 0;

function answersOne(){
    console.log("we are at question one")
    var answers = ["boolean","var","string","alphebet soup"]

    answers.forEach(function(print, index){
        button = document.createElement("BUTTON");
        button.innerText = answers[index]
        button.setAttribute("style","color:black; align-content:center; display: flex;flex-direction: column; align-items: center;")
        document.body.appendChild(button)
    });
        
}



function questionOne(){
    var questOne = document.createElement("h2")
    questOne.innerText = "Which is NOT an input type?"
    questOne.setAttribute("style","color:black; text-align:center;")
    document.body.appendChild(questOne);
    answersOne();
}



function promptQuestion(){
    
    if (questNum == 0){
        questionOne();
    }
 }








//timer functions -- fix render

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

function printTime(){

    minutesDisplay.innerHTML = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();
}

function startTime(){
    promptQuestion();
    printTime();
    start.setAttribute("style", "background-color: white; border-color: white;")



    if (totalSeconds > 0){
        interval = setInterval(function(){
            secondsElapsed++;
            printTime();
           
        }, 1000);
    }
    else{
        alert("Oops, you ran out of time!")
    }
}

start.addEventListener("click", startTime);



