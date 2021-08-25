//create variables
var grid = document.querySelectorAll('.grid')

var roundTracker = document.querySelector('.round-tracker')

var nextRoundBtn = document.querySelector('.next-round-btn')

var resetBtn = document.querySelector('.reset-btn')

var gameMessage = document.querySelector('.game-message')

var turnCounter = 0

var roundCounter = 0

var playerOne = "X"

// var board = ['','','','','','','','','']

//make it react
for (let i = 0; i < grid.length; i++){
    grid[i].addEventListener('click',handlePlayerMove)
}

nextRoundBtn.addEventListener('click',handleRoundTracker)

resetBtn.addEventListener('click',handleResetBtn)

//create function
function handlePlayerMove(element) {
    if(roundCounter % 2 !== 0){
        if(turnCounter % 2 === 0) {
            element.target.textContent = "X"
            turnCounter = turnCounter + 1
        } else {
            element.target.textContent = "O"
            turnCounter = turnCounter + 1
        }
    } else{
        if(turnCounter % 2 !== 0) {
            element.target.textContent = "X"
            turnCounter = turnCounter + 1
        } else {
            element.target.textContent = "O"
            turnCounter = turnCounter + 1
        }
    }
}

function handleRoundTracker() {
    roundCounter = roundCounter + 1
    roundTracker.textContent = roundCounter
    if(roundCounter % 2 !== 0){
        gameMessage.textContent = "Player One begins"
    } else {
        gameMessage.textContent = "Player Two begins"
    }
    for (let i = 0; i < grid.length; i++) {
        grid[i].textContent = ""
    }
}

function handleResetBtn() {
    for (let i = 0; i < grid.length; i++) {
        grid[i].textContent = ""
    }
    gameMessage.textContent = "Player One begins"
    roundTracker.textContent = 1
    turnCounter = 0
    roundCounter = 0
}
