

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var Wins = 0;
var Losses= 0;
var guessLeft= 9;
var guessChoice=[];
var computerPick= computerChoices[Math.floor(Math.random()*computerChoices.length)];


function reset(){
computerPick= computerChoices[Math.floor(Math.random()*computerChoices.length)];
  

 
}


document.onkeyup = function(event){
 var userGuess= event.key;
 


if (userGuess === computerPick) {
    Wins++;
    guessLeft = 9;
    guessChoice=[];
    reset()
  }

if( computerPick !== userGuess){
  guessChoice.push(userGuess);

    guessLeft--;

}

if (guessLeft===0){
    Losses++;
    guessLeft=9;
  guessChoice= [];
  reset()
 
}

  document.getElementById('wins').innerHTML = 'Wins: ' + Wins;
  document.getElementById('losses').innerHTML = 'Losses ' + Losses;
  document.getElementById('guess-left').innerHTML = 'Guesses Left: ' + guessLeft;
  document.getElementById('your').innerHTML = 'Your guesses so far: ' + guessChoice;


}