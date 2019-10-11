//This is my JavaScript file linked with my Animal Game//

// Declaring Variables//
let wins= 0;
let losses = 0;

// this is a funciton for the target score value genreator //
function targetScoreMaker(min, max) {
    min = Math.ceil(19);
    max = Math.floor(121);
    return Math.floor(Math.random() * (121 - 19)) + 19; //The maximum is exclusive and the minimum is inclusive
  }

  console.log(targetScoreMaker());


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







