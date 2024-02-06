function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissor'];  
    const randomComputerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];  
    return randomComputerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Draw");
        roundWinner = 'none'
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
        roundWinner = 'computer';
    }
    else if (playerSelection == "paper" && computerSelection == "scissor") {
        console.log("You Lose! Scissor beats Paper");
        roundWinner = 'computer';
    }
    else if (playerSelection == "scissor" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissor");
        roundWinner = 'computer';
    }
    else if (playerSelection == "rock" && computerSelection == "scissor") {
        console.log("You Win! Rock beats Scissor");
        roundWinner = 'player';
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
        roundWinner = 'player';
    }
    else if (playerSelection == "scissor" && computerSelection == "paper") {
        console.log("You Win! Scissor beats Paper");
        roundWinner = 'player';
    }

    return roundWinner;
}

function playGame() {
    countWin = 0;
    countLose = 0;
    countDraw = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("choose your weapon!");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));

        if (roundWinner == "none") {
            countDraw = countDraw + 1;
        }
        else if (roundWinner == "player") {
            countWin = countWin + 1;
        }
        else if (roundWinner == "computer") {
            countLose = countLose + 1;
        }
    }

    console.log("Score Summary\nWin = " + countWin + "\nLose = " + countLose
                + "\nDraw = " + countDraw);

    if (countWin == countLose) {
        gameWinner = 'None'
    }
    else if (countWin > countLose) {
        gameWinner = 'Player'
    }
    else if (countWin < countLose) {
        gameWinner = 'Computer'
    }

    console.log("\nThe Winner is " + gameWinner)
}

playGame();