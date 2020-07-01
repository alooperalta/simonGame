document.getElementById("chords").style.display = "none";
document.getElementById("set").style.display = "none";
var opt;
var buttonInnerHTML;

document.querySelectorAll(".btn")[0].addEventListener("click", function() {
  opt = "guitar";
  document.getElementById("chords").style.display = "block";
  document.getElementById("set").style.display = "none";
});

document.querySelectorAll(".btn")[1].addEventListener("click", function() {
  opt = "drum";
  document.getElementById("chords").style.display = "none";
  document.getElementById("set").style.display = "block";
});


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    buttonInnerHTML = this.innerHTML;

    makeSoundDrum(buttonInnerHTML);

    buttonAnimationDrum(buttonInnerHTML);

  });

}


var numberOfGuitarButtons = document.querySelectorAll(".guitar").length;

for (var i = 0; i < numberOfGuitarButtons; i++) {

  document.querySelectorAll(".guitar")[i].addEventListener("click", function() {

    buttonInnerHTML = this.innerHTML;

    buttonAnimationGuitar(buttonInnerHTML);

        makeSoundGuitar(buttonInnerHTML);


  });

}



document.addEventListener("keypress", function abc(event) {

if(opt=="drum")
{
  makeSoundDrum(event.key);
    buttonAnimationDrum(event.key);
}
if(opt=="guitar")
{
      buttonAnimationGuitar(event.key);
  makeSoundGuitar(event.key);
}
});


function makeSoundDrum(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default:
      console.log(key);

  }
}

function makeSoundGuitar(key) {

  switch (key) {
    case "w":
      var Amajor = new Audio("sounds/Amajor.wav");
      Amajor.play();
      break;

    case "a":
      var Aminor = new Audio("sounds/Aminor.wav");
      Aminor.play();
      break;

    case "s":
      var Cmajor = new Audio('sounds/Cmajor.mp3');
      Cmajor.play();
      break;

    case "d":
      var Dmajor = new Audio('sounds/Dmajor.mp3');
      Dmajor.play();
      break;

    case "j":
      var Emajor = new Audio('sounds/Emajor.mp3');
      Emajor.play();
      break;

    case "k":
      var Eminor = new Audio('sounds/Eminor.wav');
      Eminor.play();
      break;

    case "l":
      var Gmajor = new Audio('sounds/Gmajor.wav');
      Gmajor.play();
      break;

    case "i":
      var Fmajor = new Audio('sounds/Fmajor.wav');
      Fmajor.play();
      break;


    default:
      console.log(key);

  }
}


function buttonAnimationGuitar(currentKey) {

  var activeButton = document.querySelector("." + currentKey + "g");
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

function buttonAnimationDrum(currentKey) {

  var activeButton = document.querySelector("." + currentKey + "d");
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}




function play(event)
{ event.preventDefault();
  var string = document.forms['string'].value;
  var delayTime = document.forms["delayTime"].value;
  for(var i=0; i<string.length; i++)
  {
    var j = string.slice(i,i+1);
    if(opt==="drum")
    {
      setTimeout(makeSoundDrum(j), delayTime);
    }
    else if (opt==="guitar")
    {
        setTimeout(makeSoundGuitar(j), delayTime);
    }
    else {
        alert("Choose Guitar or Drum first");
    }
  }
}
