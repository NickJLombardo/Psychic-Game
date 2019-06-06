

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var Wins = 0;
var Losses= 0;
var guessLeft= 9;
var guessChoice=[];




document.onkeyup = function (event){
 var userGuess= event.key;
 var computerPick= computerChoices[Math.floor(Math.random()*computerChoices.length)];

guessChoice.push(userGuess);


if (userGuess === computerPick) {
    Wins++;
    guessLeft = 9;
    
  }

if( computerPick !== userGuess){
    
    guessLeft--;

}

if (guessLeft===0){
    Losses++;
    guessLeft=9;
  guessChoice= [];
 
}

document.getElementById('wins').innerHTML = 'Wins: ' + Wins;
document.getElementById('losses').innerHTML = 'Losses ' + Losses;
document.getElementById('guess-left').innerHTML = 'Guesses Left: ' + guessLeft;
document.getElementById('your').innerHTML = 'Your guesses so far: ' + guessChoice;


}