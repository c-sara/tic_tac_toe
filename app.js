//create variables
var grid = document.querySelectorAll('.grid')

var playerOneScore = document.querySelector('.player-one-score')
var playerTwoScore = document.querySelector('.player-two-score')
var roundTracker = document.querySelector('.round-tracker')

var nextRoundBtn = document.querySelector('.next-round-btn')
var resetBtn = document.querySelector('.reset-btn')

const dogIcon = document.querySelector('.dog-pic')
const catIcon = document.querySelector('.cat-pic')

var gameMessage = document.querySelector('.game-message')

var losingPlayer = document.querySelector('.losing-player')
var losingMessage = document.querySelector('.losing-message')

var turnCounter = 0
var roundCounter = 1

const grid1 = document.querySelector('#grid-1')
const grid2 = document.querySelector('#grid-2')
const grid3 = document.querySelector('#grid-3')
const grid4 = document.querySelector('#grid-4')
const grid5 = document.querySelector('#grid-5')
const grid6 = document.querySelector('#grid-6')
const grid7 = document.querySelector('#grid-7')
const grid8 = document.querySelector('#grid-8')
const grid9 = document.querySelector('#grid-9')

const dogPhoto = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2kXPZYElBjWmCyDrB3VaWhnRKKrsVcyc3Q&usqp=CAU)"
const catPhoto = "url(data:image/jpeg;base64,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)"

var audioWin = new Audio('win.mp3')
var audioClick = new Audio('click.mp3')
var nextRoundSound = new Audio('next-round.mp3')
var resetSound = new Audio('reset.mp3')

var losingMessagesArr = [
    "will be sent to the farm",
    "is sad",
    "had to be put down",
    "had to be put in the cone of shame",
    "was neutered",
    "must be shaved",
    "has swallowed a bee",
    "needs a hug",
    "is missing out on scratchies today",
    "needs a bath",
    "is incompetent",
    "is a bad boy/girl",
    "deserves no treats",
    "will be sleeping outside tonight",
    "will be visiting the vet",
    "stinks",
    "needs to up their tic tac toe game",
    "has fleas",
    "is going away with their tail between their legs",
    "is put in the naughty corner",
    "is cancelled",
    "*facepalms*"
]


//player moves
for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('click', handlePlayerMove)
}

//next round button
nextRoundBtn.addEventListener('click', handleRoundTracker)

//reset button
resetBtn.addEventListener('click', handleResetBtn)

//create function
function handlePlayerMove(event) {

    if (roundCounter % 2 !== 0) {
        handlePlayerOneStarts(event)
        audioClick.play();
        event.target.removeEventListener('click', handlePlayerMove)
    } else if (roundCounter % 2 === 0) {
        handlePlayerTwoStarts(event)
        audioClick.play();
        event.target.removeEventListener('click', handlePlayerMove)
    }

    winCheck()

}

function handlePlayerOneStarts(event) {
    if (turnCounter % 2 === 0) {
        event.target.textContent = "X"
        event.target.style.backgroundImage = dogPhoto
        catIcon.classList.add('starting-player')
        dogIcon.classList.remove('starting-player')
        turnCounter = turnCounter + 1
        gameMessage.textContent = "Player Two's turn"
    } else {
        event.target.textContent = "O"
        event.target.style.backgroundImage = catPhoto
        dogIcon.classList.add('starting-player')
        catIcon.classList.remove('starting-player')
        turnCounter = turnCounter + 1
        gameMessage.textContent = "Player One's turn"
    }
}

function handlePlayerTwoStarts(event) {
    if (turnCounter % 2 !== 0) {
        event.target.textContent = "O"
        event.target.style.backgroundImage = catPhoto
        dogIcon.classList.add('starting-player')
        catIcon.classList.remove('starting-player')
        turnCounter = turnCounter + 1
        gameMessage.textContent = "Player 1's turn"
    } else {
        event.target.textContent = "X"
        event.target.style.backgroundImage = dogPhoto
        catIcon.classList.add('starting-player')
        dogIcon.classList.remove('starting-player')
        turnCounter = turnCounter + 1
        gameMessage.textContent = "Player 2's turn"
    }
}

function handleRoundTracker() {

    roundCounter = roundCounter + 1

    roundTracker.textContent = roundCounter

    losingPlayer.textContent = ""

    losingMessage.textContent = ""

    nextRoundSound.play();

    for (let i = 0; i < grid.length; i++) {
        grid[i].style.backgroundImage = ""
        grid[i].addEventListener('click', handlePlayerMove)
        grid[i].textContent = ""
    }

    if (roundCounter % 2 !== 0) {
        gameMessage.textContent = "Player 1 begins"
        dogIcon.classList.add('starting-player')
    } else {
        gameMessage.textContent = "Player 2 begins"
        catIcon.classList.add('starting-player')
    }

}

function handleResetBtn() {

    for (let i = 0; i < grid.length; i++) {
        grid[i].textContent = ""
        grid[i].style.backgroundImage = ""
        grid[i].addEventListener('click', handlePlayerMove)

    }

    gameMessage.textContent = "Player 1 begins"

    losingPlayer.textContent = ""

    losingMessage.textContent = ""

    roundTracker.textContent = 1

    playerOneScore.textContent = 0

    playerTwoScore.textContent = 0

    turnCounter = 0

    roundCounter = 1

    dogIcon.classList.add('starting-player')
    catIcon.classList.remove('starting-player')

    resetSound.play();

}


function checkThreeMatchingCharacters(gridA, gridB, gridC) {

    if (gridA.textContent === gridB.textContent && gridB.textContent === gridC.textContent) {
        return gridA.textContent
    } else {
        return 0
    }
}

function winCheck() {

    const winningConditions = [
        checkThreeMatchingCharacters(grid1, grid2, grid3),
        checkThreeMatchingCharacters(grid4, grid5, grid6),
        checkThreeMatchingCharacters(grid7, grid8, grid9),
        checkThreeMatchingCharacters(grid1, grid4, grid7),
        checkThreeMatchingCharacters(grid2, grid5, grid8),
        checkThreeMatchingCharacters(grid3, grid6, grid9),
        checkThreeMatchingCharacters(grid1, grid5, grid9),
        checkThreeMatchingCharacters(grid3, grid5, grid7),
    ]

    checkRowsForWin(winningConditions)

}

function checkRowsForWin(winningConditions) {
    for (let i = 0; i < winningConditions.length; i++) {
        if (winningConditions[i] === "X") {
            gameMessage.textContent = "🎉 Player 1 Wins 🎉"
            losingPlayer.textContent = "P2 "
            losingMessage.textContent = randomLosingMessage()
            for (let i = 0; i < grid.length; i++) {
                grid[i].removeEventListener('click', handlePlayerMove)
            }
            audioWin.play();
            catIcon.classList.remove('starting-player')
            dogIcon.classList.remove('starting-player')
            return playerOneScore.textContent = Number(playerOneScore.textContent) + 1
        } else if (winningConditions[i] === "O") {
            gameMessage.textContent = "🎉 Player 2 Wins 🎉"
            losingPlayer.textContent = "P1 "
            losingMessage.textContent = randomLosingMessage()
            for (let i = 0; i < grid.length; i++) {
                grid[i].removeEventListener('click', handlePlayerMove)
            }
            audioWin.play();
            catIcon.classList.remove('starting-player')
            dogIcon.classList.remove('starting-player')
            return playerTwoScore.textContent = Number(playerTwoScore.textContent) + 1
        }
    }

    checkDraw(winningConditions)

}

function checkDraw() {
    if (grid1.textContent !== "" && grid2.textContent !== "" && grid3.textContent !== "" && grid4.textContent !== "" && grid5.textContent !== "" && grid6.textContent !== "" && grid7.textContent !== "" && grid8.textContent !== "" && grid9.textContent !== "") {
        return gameMessage.textContent = "Draw"
    }
}

//Losing player message
function randomLosingMessage() {
    for (let i = 0; i < losingMessagesArr.length; i++) {
        return losingMessagesArr[Math.ceil(Math.random() * losingMessagesArr.length)]
    }
}

//Highlight winning borders
// function highlightWinningBorders() {

// }

