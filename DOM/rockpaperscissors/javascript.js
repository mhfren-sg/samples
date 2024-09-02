
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
//console.log(getComputerChoice())

//human choice
function getHumanChoice(){
    let choice = prompt("Please enter your choice (Rock or Paper or Scissors): ").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    } else {
        alert("Please enter a valid choice!");
    };
}
//console.log(getHumanChoice())

//initialise score
let humanScore = 0;
let computerScore = 0;

//parameters for playRound: humanChoice and computerChoice
//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//single round
//total of 6 possible cases, logic for 3 cases where human loses.


function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection){
        return ('tie!');
    }
    else if (humanSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return ("you lose");
    }
    else if (humanSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        return ("you lose");
    }
    else if (humanSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return ("you lose");
    }
    else{
        return ("you win");
        humanScore++;
    }
}


/*
console.log(computerSelection)
console.log(humanSelection)
console.log(playRound(humanSelection, computerSelection))
console.log(computerScore)
console.log(humanScore)
*/

function playGame(){
    for (let i = 0; i <5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
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
playGame()