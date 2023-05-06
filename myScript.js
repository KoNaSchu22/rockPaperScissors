const choices = ["rock", "paper", "scissors"];
let winners = [];

let btn = document.querySelector("button");
btn.addEventListener("click", game);


function game(){
  console.clear();
  for(let i = 1; i <= 5; i++){
    playRound(i);
  }
  logWins();
  winners = [];
  btn.textContent = "Play new Game!";
}

function playRound(round){
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);

  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice(){
  let input = prompt("Type Rock, Paper or Scissors");
  while(input == null){
    input = prompt("Type Rock, Paper or Scissors");
  }
  input.toLowerCase();
  while(!validateInput(input)){
    input = prompt("Type Rock, Paper or Scissors. Spelling needs to be excact")
    while(input == null){
      input = prompt("Type Rock, Paper or Scissors");
    }
    input.toLowerCase();
  }
  return input;
}

function validateInput(choice){
  if(choices.includes(choice)){
    return true;
  }else{
    return false;
  }
}

function computerChoice(){
  return choices[Math.floor(Math.random()*choices.length)];
}

function checkWinner(choiceP, choiceC){
  if(choiceP === choiceC){
    return "Tie";
  }else if((choiceP === "rock" && choiceC === "scissors") || 
          (choiceP === "paper" && choiceC === "rock") ||
          (choiceP === "scissors" && choiceC === "paper")){
    return "Player";
  }else{
    return "Computer";
  }
}

function logWins(){
  let playerWins = winners.filter(function (item){return item == "Player";}).length;
  let computerWins = winners.filter((item) => {return item == "Computer";}).length;
  let ties = winners.filter((item) => {return item == "Tie";}).length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties", ties);
  console.log("------------------------------");
  if(playerWins > computerWins){ 
    console.log("Player won the game!");
  }
  else if(playerWins < computerWins){
    console.log("Computer won the game!");
  }else{
    console.log("It's a tie!");
  }

}

function logRound(playerChoice, computerChoice, winner, round){
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "won the Round");
  console.log("------------------------------");
}
