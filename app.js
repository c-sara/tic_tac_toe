//create variables
var grid = document.querySelectorAll('.grid')

var playerOneScore = document.querySelector('.player-one-score')
var playerTwoScore = document.querySelector('.player-two-score')
var roundTracker = document.querySelector('.round-tracker')

var nextRoundBtn = document.querySelector('.next-round-btn')
var resetBtn = document.querySelector('.reset-btn')

var gameMessage = document.querySelector('.game-message')

var turnCounter = 0
var roundCounter = 1

var grid1 = document.querySelector('#grid-1')
var grid2 = document.querySelector('#grid-2')
var grid3 = document.querySelector('#grid-3')
var grid4 = document.querySelector('#grid-4')
var grid5 = document.querySelector('#grid-5')
var grid6 = document.querySelector('#grid-6')
var grid7 = document.querySelector('#grid-7')
var grid8 = document.querySelector('#grid-8')
var grid9 = document.querySelector('#grid-9')

//var playerOne = "X"
//var playerTwo = "O"


//player moves
for (let i = 0; i < grid.length; i++){
    grid[i].addEventListener('click',handlePlayerMove)
}

//next round button
nextRoundBtn.addEventListener('click',handleRoundTracker)

//reset button
resetBtn.addEventListener('click',handleResetBtn)

//create function
function handlePlayerMove(element) {

    if(roundCounter % 2 !== 0) {
        handlePlayerOneStarts(element)
        element.target.removeEventListener('click',handlePlayerMove)
    } else if (roundCounter % 2 === 0) {
        handlePlayerTwoStarts(element)
        element.target.removeEventListener('click',handlePlayerMove)
    }

    winCheck()
    
}

function handlePlayerOneStarts (element) {
    if (turnCounter % 2 === 0) {
        element.target.textContent = "X"
        turnCounter = turnCounter + 1
        gameMessage.textContent = "Player Two's turn"
    } else {
        element.target.textContent = "O"
        turnCounter = turnCounter + 1
        gameMessage.textContent = "Player One's turn"
    }
}

function handlePlayerTwoStarts(element) {
    if (turnCounter % 2 !== 0) {
        element.target.textContent = "O"
        turnCounter = turnCounter + 1
        gameMessage.textContent = "Player One's turn"
    } else {
        element.target.textContent = "X"
        turnCounter = turnCounter + 1
        gameMessage.textContent = "Player Two's turn"
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

    for (let i = 0; i < grid.length; i++){
        grid[i].addEventListener('click',handlePlayerMove)
    }

}

function handleResetBtn() {

    for (let i = 0; i < grid.length; i++) {
        grid[i].textContent = ""
    }

    gameMessage.textContent = "Player One begins"

    roundTracker.textContent = 1

    playerOneScore.textContent = 0

    playerTwoScore.textContent = 0

    turnCounter = 0

    roundCounter = 1

    for (let i = 0; i < grid.length; i++){
        grid[i].addEventListener('click',handlePlayerMove)
    }
}


function rowCheck(gridA,gridB,gridC) {
    
    if (gridA.textContent === gridB.textContent && gridB.textContent === gridC.textContent) {
        return gridA.textContent
    } else {
        return 0
    }
}

function winCheck() {
   
    var winningConditions = [
        rowCheck(grid1, grid2, grid3),
        rowCheck(grid4, grid5, grid6),
        rowCheck(grid7, grid8, grid9),
        rowCheck(grid1, grid4, grid7),
        rowCheck(grid2, grid5, grid8),
        rowCheck(grid3, grid6, grid9),
        rowCheck(grid1, grid5, grid9),
        rowCheck(grid3, grid5, grid7),
    ]

    var winnerOrNull = checkRows(winningConditions)

}

function checkRows(winningConditions) {
    for (let i = 0; i < winningConditions.length; i++) {
        if (winningConditions[i] === "X"){
            gameMessage.textContent = "Player One Wins"
            for (let i = 0; i < grid.length; i++){
                grid[i].removeEventListener('click',handlePlayerMove)
            }
            playerOneScore.textContent = Number(playerOneScore.textContent) + 1
        } else if (winningConditions[i] === "O") {
            gameMessage.textContent = "Player Two Wins"
            for (let i = 0; i < grid.length; i++){
                grid[i].removeEventListener('click',handlePlayerMove)
            }
            playerTwoScore.textContent = Number(playerTwoScore.textContent) + 1
        } 
    }
    checkDraw(winningConditions)
}

function checkDraw(winningConditions) {
    for (let i = 0; i < winningConditions.length; i++) {
        if (winningConditions.textContent !== "X" && winningConditions.textContent !== "O" && grid1.textContent !== "" && grid2.textContent !== "" && grid3.textContent !== "" && grid4.textContent !=="" && grid5.textContent !== "" && grid6.textContent !== "" && grid7.textContent !== "" && grid8.textContent !== "" && grid9.textContent !== "") {
            return gameMessage.textContent = "Draw" 
            }
    }
}