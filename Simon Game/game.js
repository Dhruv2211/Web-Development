var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function checkAnswer(currentLevel){

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){

            
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    }
    else{
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
          //your code to be executed after 1 second
          $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart ");
        startOver();
    }

}

function nextSequence(){
  userClickedPattern = [];
    level+=1;
   started = true;
    $("h1").text("Level "+ level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber ];
    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

 $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

 playSound(randomChosenColor);


}




$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
      //  console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    var length = userClickedPattern.length - 1;
    checkAnswer(length); 
});


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColour){
    $("#"+ currentColour).addClass("pressed");


setTimeout(function() {
  //your code to be executed after 1 second
  $("#" + currentColour).removeClass("pressed");
}, 100);
}

$(document).keypress(function() {
      nextSequence();
    }
  );
  


  function startOver(){
    started = false;
    level = 0;
    gamePattern = [];  

  }
