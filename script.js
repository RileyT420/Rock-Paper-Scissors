const getUserChoice = userInput => {
if(userInput == 'rock' || userInput == 'paper' || usrInput === 'scizzors')
{ return userInput; 
} else {
  console.log("Not Valid Input! Choose rock, paper, or scizzors");}
};

function getComputerChoice()
{
  var random = Math.floor(Math.random()*3);

  switch(randomNum)
{
  case 0: return 'rock ';
  break;
  case 1: return 'paper';
  break;
  case 2: return 'scizzors';
  break;
}
}
  function determineWinner(userChoice, computerChoice)
{
 if(userChoice === computerChoice)
{
  return "It's a Tie!"
} else if (userChoice === 'rock')
{
  if(computerChoice === 'paper')
  {
   return "computer Won"
  } else{ 
    return "you Won!"
  }
 } else if (userChoice === 'scizzors')
{
  if(computerChoice === 'rock')
  {
   return "computer Won"
  } else{ 
    return "you Won!"
  }
  else if (userChoice === 'paper')
{
  if(computerChoice === 'scizzors')
  {
   return "computer Won"
  } else{ 
    return "you Won!"
  }
}
}
}
function playGame()
{
  var userChoice = getUserChoice('rock');
  var computerChoice=getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
}
