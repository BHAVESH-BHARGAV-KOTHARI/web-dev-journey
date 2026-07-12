console.log("Yo");

function getComputerChoice()
{
  const rnd = Math.floor(Math.random()*100)+1;
  let compChoice;
  if(rnd<=33) compChoice="ROCK";
  else if(rnd>=68) compChoice="SCISSORS";
  else compChoice="PAPER"
  return compChoice;
}

function getHumanChoice(i)
{
  const hmn = parseInt(prompt(`ROUND ${i} - 1.ROCK 2.PAPER 3.SCISSORS`));
  let hmnChoice;
  if(hmn===1) hmnChoice = "ROCK";
  else if(hmn===2) hmnChoice = "PAPER";
  else hmnChoice = "SCISSORS";

  return hmnChoice
}

function playRound(i)
{
  Hchoice = getHumanChoice(i);
  Cchoice = getComputerChoice();

  if(Hchoice===Cchoice)
    return `Round ${i}: TIE`;

  else if((Hchoice==='ROCK' && Cchoice==='SCISSORS')||
          (Hchoice==='PAPER' && Cchoice==='ROCK')||
          (Hchoice==='SCISSORS' && Cchoice==='PAPER'))
  {
    humanWins++;
    return `Round ${i}: HUMAN WINS!`;
  }

  else 
  {
    computerWins++;
    return `Round ${i}: COMPUTER WINS!`;
  }
}

let humanWins = 0;
let computerWins = 0;
function playGame()
{
  for(let i=1; i<=5; i++)
  {
    console.log(playRound(i));
  }
  console.log(humanWins,computerWins);

  if(humanWins>computerWins) console.log("FINAL WINNER : HUMAN");
  else if(humanWins<computerWins) console.log("FINAL WINNER : COMPUTER");
  else console.log("GAME DRAW");
}

playGame();
