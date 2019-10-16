//This is my JavaScript file linked with my Animal Game//
//first we need to include the document.ready fcuntion upon pagel oad//
$(document).ready(function(){
// Declaring Variables//
let wins = 0;
let losses = 0;
let playerScore = 0;
let playerSum = 0;
//playerSum will be a new variable defining the current player score after a click event  

// this is a variable for the target score value generator //
let targetScore = Math.floor(Math.random() * (121 - 19)) + 19; //The maximum is exclusive and the minimum is inclusive

// variables for icon value generator//
let horse = Math.floor(Math.random() * (13 - 1)) + 1;
let dog  = Math.floor(Math.random() * (13 - 1)) + 1;
let bird = Math.floor(Math.random() * (13 - 1)) + 1;
let frog = Math.floor(Math.random() * (13 - 1)) + 1;

//console.log (horse, dog, bird, frog)//
//the above logs to make sure random values are obtained for animal icons//

// creating an assigmnment to show scores/stats to the user at beginning of the game//
$(".playerscore").text(playerScore);
$(".wins").text(wins);
$(".losses").text(losses);
$(".targetscore").text(targetScore);


//This will be my restart game function//
//it also contains all the essential pieces to the game//
function restart() {

  targetScore = Math.floor(Math.random() * (121 - 19)) + 19;
  $(".targetscore").text(targetScore);
  playerSum = 0;
  playerScore = 0;
  $(".playerscore").text(playerScore);
  horse = Math.floor(Math.random() * (13 - 1)) + 1;
  dog  = Math.floor(Math.random() * (13 - 1)) + 1;
  bird = Math.floor(Math.random() * (13 - 1)) + 1;
  frog = Math.floor(Math.random() * (13 - 1)) + 1;
};

//assigning the animal variables to icons with an onclick event//
//Each click will be checked by the same function to see if the player score is a win or loss//

// Horse click icon//
$(".horse").on("click", function() {
    playerSum = playerScore += horse;
    $(".playerscore").text(playerSum);
    if ((playerSum === targetScore)){
      wins++;
      alert("Perfect, You matched the score! Should we try one more?");
      $(".wins").text(wins);
      
      restart();
    }
      else if ((playerSum > targetScore)) {
        losses++;
        alert("Woah that's too much! Lets try again");
        $(".losses").text(losses);

       restart();
        
  } 
});

//Dog click icon
$(".dog").on("click", function() {
    playerSum = playerScore += dog;
    $(".playerscore").text(playerSum);
    if ((playerSum === targetScore)){
      wins++;
      alert("Perfect, You matched the score! Should we try one more?");
      $(".wins").text(wins);

      restart();
    }
    else if ((playerSum > targetScore)) {
      losses++;
      alert("Woah that's too much! Lets try again");
      $(".losses").text(losses);

      restart();
      
} 
});

//Bird click Icon//
$(".bird").on("click", function() {
    playerSum = playerScore += bird;
    $(".playerscore").text(playerSum);
    if ((playerSum === targetScore)){
      wins++;
      alert("Perfect, You matched the score! Should we try one more?");
      $(".wins").text(wins);

      restart();
    }
    else if ((playerSum > targetScore)) {
      losses++;
      alert("Woah that's too much! Lets try again");
      $(".losses").text(losses);

      restart();
      
} 
});

//Frog click icon//
$(".frog").on("click", function() {
    playerSum = playerScore += frog;
    $(".playerscore").text(playerSum);
    if ((playerSum === targetScore)){
      wins++;
      alert("Perfect, You matched the score! Should we try one more?");
      $(".wins").text(wins);

      restart();
    }
    else if ((playerSum > targetScore)) {
      losses++;
      alert("Woah that's too much! Lets try again");
      $(".losses").text(losses);

    restart();
      
} 
});
});
