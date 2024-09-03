
//computer choice
function getComputerChoice(){
    let choice = Math.random()
    if (choice <= 0.33) {
        return ("rock");
    } else if (choice > 0.33 && choice <= 0.67){
        return ("paper");
    } else {
        return ("scissors")
    }
}

//parameters for playRound: humanChoice and computerChoice
//const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection)


//human choice
function getHumanChoice() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (humanScore < 5 && computerScore < 5) {  // Ensure the game only continues if no one has won yet
                const humanSelection = button.id;
                const computerSelection = getComputerChoice();
                
                document.getElementById('human-choice').textContent = `You chose: ${humanSelection}`;
                document.getElementById('computer-choice').textContent = `Computer chose: ${computerSelection}`;
                
                const result = playRound(humanSelection, computerSelection);
                document.getElementById('result').textContent = result;
                
                document.getElementById('human-score').textContent = humanScore;
                document.getElementById('computer-score').textContent = computerScore;

                checkWinner();  // Check if there's a winner after each round
            }
        });
    });
}

getHumanChoice()

//initialise score
let humanScore = 0;
let computerScore = 0;


//single round
//total of 6 possible cases, logic for 3 cases where human loses.


function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection){
        return ('tie!');
    }
    else if (
            (humanSelection === "rock" && computerSelection === "paper") ||
            (humanSelection === "paper" && computerSelection === "scissors") ||
            (humanSelection === "scissors" && computerSelection === "rock")
        ) {
            computerScore++;
            return ("you lose");
    }
    else{
        humanScore++;
        return ("you win");
    }
}


/*
console.log(computerSelection)
console.log(humanSelection)
console.log(playRound(humanSelection, computerSelection))
console.log(computerScore)
console.log(humanScore)
*/

// 5 rounds
function playGame(){
    for (let i = 0; i <5; i++){
        console.log(playRound(humanSelection, computerSelection));
    }
    //final score
    if (humanScore < computerScore){
        console.log("You lose")
    }
    else if (humanScore > computerScore){
        console.log("You win")
    }
    else {
        console.log("No one wins!")
    }
}

function checkWinner() {
    if (humanScore === 5) {
        document.getElementById('result').textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById('result').textContent = "Sorry, the computer won the game!";
        disableButtons();
    }
}