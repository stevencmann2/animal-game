//This is my JavaScript file linked with my Animal Game//

// Declaring Variables//
let wins= 0;
let losses = 0;
let playerScore = 0;
// const for random target # generator


// this is a variable for the target score value generator //
let targetScore = Math.floor(Math.random() * (121 - 19)) + 19; //The maximum is exclusive and the minimum is inclusive
console.log(targetScore);

// creating an asignment to show the target score in the document //
$(".targetscore").text(targetScore);

// creating an assigmnment to show the player score at the moment//
$(".playerscore").text(playerScore);

// putting values in the place of wins & losses for the moment
$(".wins").text(wins);
$(".losses").text(losses);

// Declaring on click events for the icons //
$(".horse").on("click", function() {
    alert("you clicked the horse");
  });

  $(".dog").on("click", function() {
    alert("you clicked the dog");
  });

  $(".bird").on("click", function() {
    alert("you clicked the bird");
  });

  $(".frog").on("click", function() {
    alert("you clicked the frog");
  });

  






