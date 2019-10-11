//This is my JavaScript file linked with my Animal Game//

// Declaring Variables//
let wins = 0;
let losses = 0;
let playerScore = [0];




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

//assigning the animal variables to icons with an onclick event/ prints to webpage//
/*
$(".horse").on("click", function() {
    $(".playerscore").text(horse);
});
*/

  $(".dog").on("click", function() {
    $(".playerscore").text(dog);
});
  $(".bird").on("click", function() {
    $(".playerscore").text(bird);
});
  $(".frog").on("click", function() {
    $(".playerscore").text(frog);

});
/*
// making a sum function of the icon values//
function sumNumbers(playerScore) {
    let playerSum = 0;
    for (let i = 0; i<=playerScore.length ; i++) {
        playerSum = playerScore + i;
    }
    return playerSum;  
}

console.log(typeof playerScore);
console.log(playerScore);
*/
// Loop where the the score increase 

$(".horse").on("click", function() {
    // need to make a new total to keep track of function? new variable? 
    playerScore.push(horse); //pushes horse into playerScore object, now part of objectplayerScore 
  // $(".playerscore").text(sumNumbers(playerScore)); // prints function to the document 
});
console.log(playerScore);



/*

// condition for win/loss//
if (playerScore === targetScore){
    wins++;
}
else (targetscore < playerScore) {
    losses++;
}

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

