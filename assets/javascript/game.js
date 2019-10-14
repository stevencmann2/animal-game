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

//THis will be my restart gfame function//
function restart() {
  let playerSum = 0;
  let playerScore = 0;
  let horse = Math.floor(Math.random() * (13 - 1)) + 1;
  let dog  = Math.floor(Math.random() * (13 - 1)) + 1;
  let bird = Math.floor(Math.random() * (13 - 1)) + 1;
  let frog = Math.floor(Math.random() * (13 - 1)) + 1;
  let targetScore = Math.floor(Math.random() * (121 - 19)) + 19;
};


//assigning the animal variables to icons with an onclick event//
//also sums the click event into the total (playerSum)//
//prints the new value to player score //


// Horse click icon//
$(".horse").on("click", function() {
    playerSum = playerScore += horse;
    $(".playerscore").text(playerSum);
    if ((playerSum === targetScore)){
      wins++;
      alert("Thats one win! lets try that again");
      $(".wins").text(wins);
      
      restart();
    }
      else if ((playerSum > targetScore)) {
        losses++;
        alert("you lost the game");
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
      alert("Thats one win! lets try that again");
      $(".wins").text(wins);

      restart();
    }
    else if ((playerSum > targetScore)) {
      losses++;
      alert("you lost the game");
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
      alert("Thats one win! lets try that again");
      $(".wins").text(wins);

      restart();
    }
    else if ((playerSum > targetScore)) {
      losses++;
      alert("you lost the game");
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
      alert("Thats one win! lets try that again");
      $(".wins").text(wins);

      restart();
    }
    else if ((playerSum > targetScore)) {
      losses++;
      alert("you lost the game");
      $(".losses").text(losses);

    restart();
      
} 
});
