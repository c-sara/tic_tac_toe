//variables
var grid = document.querySelectorAll('.grid')

var playerOneScore = document.querySelector('.player-one-score')
var playerTwoScore = document.querySelector('.player-two-score')
var roundTracker = document.querySelector('.round-tracker')

var nextRoundBtn = document.querySelector('.next-round-btn')
var resetBtn = document.querySelector('.reset-btn')

const dogIcon = document.querySelector('.dog-pic')
const catIcon = document.querySelector('.cat-pic')
const dogTreat = document.querySelector('.dog-treat')
const catTreat = document.querySelector('.cat-treat')

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

const dogPhoto = "url(Resources/puppy.jpg)"
const catPhoto = "url(Resources/kitty.jpg)"

var audioClick = new Audio('Resources/click.mp3')
var nextRoundSound = new Audio('Resources/next-round.mp3')
var resetSound = new Audio('Resources/reset.mp3')

const audioWin = new Audio('Resources/win.mp3')
const win1Up = new Audio('Resources/win-1up.mp3')
const winBeautiful = new Audio('Resources/win-beautiful.mp3')
const winGorgeous = new Audio('Resources/win-gorgeous.mp3')
const winNyan = new Audio('Resources/win-nyan.mp3')
const winStartup = new Audio('Resources/win-startup.mp3')
const winUniversal = new Audio('Resources/win-universal.mp3')
const winVroom = new Audio('Resources/win-vroom.mp3')

var winningMusicArr = [
    audioWin,
    win1Up,
    winBeautiful,
    winGorgeous,
    winNyan,
    winStartup,
    winUniversal,
    winVroom
]

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
    "is incompetent",
    "deserves no treats",
    "will be sleeping outside tonight",
    "will be visiting the vet",
    "stinks",
    "needs to up their tic tac toe game",
    "has fleas",
    "is going away with their tail between their legs",
    "is put in the naughty corner",
    "is cancelled",
    "*facepalms*",
    "dies",
    "comes across an unpleasant smell",
    "trips over nothing",
    "is disowned",
    "gets a tapeworm",
    "is infected with rabies",
    "has their toys taken away",
    "chokes on a bone"
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

//player one starts
function handlePlayerOneStarts(event) {
    if (turnCounter % 2 === 0) {
        event.target.textContent = "X"
        event.target.style.backgroundImage = dogPhoto
        catIcon.classList.add('starting-player')
        dogIcon.classList.remove('starting-player')
        turnCounter = turnCounter + 1
        gameMessage.textContent = "player meow's turn"
    } else {
        event.target.textContent = "O"
        event.target.style.backgroundImage = catPhoto
        dogIcon.classList.add('starting-player')
        catIcon.classList.remove('starting-player')
        turnCounter = turnCounter + 1
        gameMessage.textContent = "player woof's turn"
    }
}

//player two starts
function handlePlayerTwoStarts(event) {
    if (turnCounter % 2 !== 0) {
        event.target.textContent = "O"
        event.target.style.backgroundImage = catPhoto
        dogIcon.classList.add('starting-player')
        catIcon.classList.remove('starting-player')
        turnCounter = turnCounter + 1
        gameMessage.textContent = "player woof's turn"
    } else {
        event.target.textContent = "X"
        event.target.style.backgroundImage = dogPhoto
        catIcon.classList.add('starting-player')
        dogIcon.classList.remove('starting-player')
        turnCounter = turnCounter + 1
        gameMessage.textContent = "player meow's turn"
    }
}

//next round button
function handleRoundTracker() {

    roundCounter = roundCounter + 1
    roundTracker.textContent = roundCounter

    losingPlayer.textContent = ""
    losingMessage.textContent = ""

    nextRoundSound.play();

    dogTreat.classList.remove('treat-animation')
    catTreat.classList.remove('treat-animation')
    dogTreat.classList.add('hide')
    catTreat.classList.add('hide')

    for (let i = 0; i < grid.length; i++) {
        grid[i].style.backgroundImage = ""
        grid[i].addEventListener('click', handlePlayerMove)
        grid[i].textContent = ""
        grid[i].classList.remove('winning-player')
    }

    //switches between player one and two
    if (roundCounter % 2 !== 0) {
        gameMessage.textContent = "player woof begins"
        dogIcon.classList.add('starting-player')
    } else {
        gameMessage.textContent = "player meow begins"
        catIcon.classList.add('starting-player')
    }

}

//reset button
function handleResetBtn() {

    for (let i = 0; i < grid.length; i++) {
        grid[i].textContent = ""
        grid[i].style.backgroundImage = ""
        grid[i].addEventListener('click', handlePlayerMove)
        grid[i].classList.remove('winning-player')
    }

    gameMessage.textContent = "player woof begins"

    losingPlayer.textContent = ""
    losingMessage.textContent = ""

    roundTracker.textContent = 1
    roundCounter = 1
    turnCounter = 0

    playerOneScore.textContent = 0
    playerTwoScore.textContent = 0

    dogIcon.classList.add('starting-player')
    catIcon.classList.remove('starting-player')

    dogTreat.classList.remove('treat-animation')
    catTreat.classList.remove('treat-animation')
    dogTreat.classList.add('hide')
    catTreat.classList.add('hide')

    resetSound.play();

}

//check if "XXX" or "OOO" (returns either "X" or "O") && animation for winner
function checkThreeMatchingCharacters(gridA, gridB, gridC) {

    if (gridA.textContent === "" || gridB.textContent === "" || gridC.textContent === "") {
        return 0
    }

    if (gridA.textContent === gridB.textContent && gridB.textContent === gridC.textContent) {
        gridA.classList.add('winning-player')
        gridB.classList.add('winning-player')
        gridC.classList.add('winning-player')
        return gridA.textContent
    } else {
        return 0
    }

}

//winning conditions
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

//check rows for win
function checkRowsForWin(winningConditions) {
    for (let i = 0; i < winningConditions.length; i++) {
        if (winningConditions[i] === "X") {

            gameMessage.textContent = "🎉 player woof wins 🎉"
            losingPlayer.textContent = "meow "
            losingMessage.textContent = randomLosingMessage()

            for (let i = 0; i < grid.length; i++) {
                grid[i].removeEventListener('click', handlePlayerMove)
            }

            randomWinningSound().play();

            catIcon.classList.remove('starting-player')
            dogIcon.classList.remove('starting-player')
            dogTreat.classList.remove('hide')
            dogTreat.classList.add('treat-animation')

            return playerOneScore.textContent = Number(playerOneScore.textContent) + 1

        } else if (winningConditions[i] === "O") {

            gameMessage.textContent = "🎉 player meow wins 🎉"
            losingPlayer.textContent = "woof "
            losingMessage.textContent = randomLosingMessage()

            for (let i = 0; i < grid.length; i++) {
                grid[i].removeEventListener('click', handlePlayerMove)
            }

            randomWinningSound().play();

            catIcon.classList.remove('starting-player')
            dogIcon.classList.remove('starting-player')
            catTreat.classList.remove('hide')
            catTreat.classList.add('treat-animation')
            
            return playerTwoScore.textContent = Number(playerTwoScore.textContent) + 1
        }
    }

    checkDraw(winningConditions)

}

function checkDraw() {
    if (grid1.textContent !== "" && grid2.textContent !== "" && grid3.textContent !== "" && grid4.textContent !== "" && grid5.textContent !== "" && grid6.textContent !== "" && grid7.textContent !== "" && grid8.textContent !== "" && grid9.textContent !== "") {
        return gameMessage.textContent = "draw"
    }
}

//Losing player message
function randomLosingMessage() {
    for (let i = 0; i < losingMessagesArr.length; i++) {
        return losingMessagesArr[Math.ceil(Math.random() * losingMessagesArr.length - 1)]
    }
}

//Winning sounds
function randomWinningSound() {
    for(let i = 0; i < winningMusicArr.length; i++) {
        return winningMusicArr[Math.ceil(Math.random() * winningMusicArr.length - 1)]
    }
}

