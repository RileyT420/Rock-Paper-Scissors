document.getElementById("rockbtn").addEventListener("click", function(){
  playGame('rock');
});

document.getElementById("paperbtn").addEventListener("click", function(){ playGame('paper');
});

document.getElementById("scissorsbtn").addEventListener("click", function(){
  playGame('scizzors');
});
document.getElementById("output").addEventListener("click", function(){
  displayWinner(); // There is no displayWinner method
});
