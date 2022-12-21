function getComputerChoice(){
    let compAns = Math.floor(Math.random() * 3);
    switch(compAns){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "error";    
    }
}

function gameStart(userChoice, computerSelection){
    if(userChoice == "paper" && computerSelection == "rock"){
        return `you win ${userChoice} beats ${computerSelection}`;
    }else if(userChoice == "rock" && computerSelection == "scissors") {
        return `you win ${userChoice} beats ${computerSelection}`;
    }else if(userChoice == "scissors" && computerSelection == "paper"){
        return `you win ${userChoice} beats ${computerSelection}`;
    }else if(computerSelection == "paper" && userChoice == "rock"){
        return `you lose ${computerSelection} beats ${userChoice}`
    }else if(computerSelection == "rock" && userChoice == "scissors"){
        return `you lose ${computerSelection} beats ${userChoice}`
    }else if(computerSelection == "scissors" && userChoice == "paper"){
        return `you lose ${computerSelection} beats ${userChoice}`
    }else if(userChoice === computerSelection){
        return " It's a tie";
    }else{
        return "Incorrect input";
    }
}

for(i = 0; i < 5; i++){
    let computerSelection = getComputerChoice();
    let userChoice = prompt("Enter > " ).toLowerCase();
    console.log(gameStart(userChoice, computerSelection));
}