//This is my JavaScript file linked with my Animal Game//

// Declaring Variables//
let wins = 0;
let losses = 0;
let playerScore = 0;

// this is a variable for the target score value generator //
let targetScore = Math.floor(Math.random() * (121 - 19)) + 19; //The maximum is exclusive and the minimum is inclusive
console.log(targetScore);
 
// variables for icon value generator//
let horse = Math.floor(Math.random() * (13 - 1)) + 1;
let dog  = Math.floor(Math.random() * (13 - 1)) + 1;
let bird = Math.floor(Math.random() * (13 - 1)) + 1;
let frog = Math.floor(Math.random() * (13 - 1)) + 1;

console.log (horse, dog, bird, frog);

// putting values in the place of wins & losses for the moment
$(".wins").text(wins);
$(".losses").text(losses);

// creating an assigmnment to show the player score at the moment//
$(".playerscore").text(playerScore);

// creating an asignment to show the target score in the document //
$(".targetscore").text(targetScore);



// Loop where the the score increase 
//platerSum will be a new variable defining the current sum after a click event 
let playerSum = 0;


//assigning the animal variables to icons with an onclick event//
//also sums the click event into the total (playerSum)//
//prints the new value to player score //

$(".horse").on("click", function() {
    playerSum = playerScore += horse;
    $(".playerscore").text(playerSum);
});


$(".dog").on("click", function() {
    playerSum = playerScore += dog;
    $(".playerscore").text(playerSum);
});

$(".bird").on("click", function() {
    playerSum = playerScore += bird;
    $(".playerscore").text(playerSum);
});

$(".frog").on("click", function() {
    playerSum = playerScore += frog;
    $(".playerscore").text(playerSum);
});

console.log(typeof playerSum);

// condition for win/loss//
// SCOPE ISSUE! ONLY CHECKING AT THE START OF THE RUN, make into a function and check whenever clicked
// or make a loop 
//use a prompt to restart? by setting value to zero 
if ((playerSum === targetScore)){
    wins++;
    alert("did this work, you win");
} 


/*

else ((playerSum > targetScore)) {
    losses++;
    alert("you lost the game");
)};

*/










// Declaring on click events for the icons //
/*$(".horse").on("click", function() {
    alert("you clicked the horse");
  }); 

  $(".dog").on("click", function() {
    alert("you clicked the dog");
 

  $(".bird").on("click", function() {
    alert("you clicked the bird");
  });

  $(".frog").on("click", function() {
    alert("you clicked the frog");
  });

  
*/

