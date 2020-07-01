var randomNumber;
var userClickedPattern = [];
var gamePattern=[];
var buttonColour = ["red","blue","green","yellow"];
var randomChosenColour;
var level = 0;

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function nextSequence(){
  //level++;
  if(level!=0){
  $("h1").text("Level " + level);
  randomNumber = Math.floor(Math.random()*4);
  randomChosenColour = buttonColour[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  setTimeout(function () {
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
  }, 500);
  level++;
}}



function compare(){
  var flag=0;
  for(var j = 0; j < userClickedPattern.length; j++){
  if(userClickedPattern[j]!=gamePattern[j]){
    playSound("wrong");
    $("h1").text("You lose! Press a key to play again!");
    level=0;
    userClickedPattern=[];
    gamePattern=[];
    flag++;
    break;
  }
}//if(flag===0){
  //nextSequence();
//}
if(userClickedPattern.length===gamePattern.length){
  userClickedPattern=[];
  nextSequence();
}
}


$('body').keypress(function(){
  if(level===0)
  {  level++;
    nextSequence();

  }
});

$('.btn').click(function (){
  userClickedPattern.push(this.id);
  //console.log(userClickedPattern);
  playSound(this.id);
  var x = this.id;
  $("#" + x).addClass("pressed");
  setTimeout(function () {
    $("#" + x).removeClass("pressed");
  }, 100);
  compare();
});
