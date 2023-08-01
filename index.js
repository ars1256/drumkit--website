// detecting button press 
var number_of_drums = document.querySelectorAll(".drum").length;
for (var i = 0; i < number_of_drums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttoninnerhtml = this.innerHTML;
      soundon(buttoninnerhtml);
      animation(buttoninnerhtml);
  });
  
  
// detecting keypress
  document.addEventListener("keydown", function (event) {
    console.log(event);
    soundon(event.key);
    animation(event.key);
  }
  )
};

// play sound
function soundon(key) {
    switch (key) {
      case "w":
        var Crash = new Audio("./sounds/crash.mp3");
        Crash.play();
        break;
      case "a":
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
      case "s":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
      case "j":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
      case "k":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
      case "l":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
      default: console.log(event);
    }
  }

  // for animation
  function animation(currentkey){
    var ActiveButton=document.querySelector("."+ currentkey);
    ActiveButton.classList.add("pressed");
    setTimeout(function(){
     ActiveButton.classList.remove("pressed");   
    },100);


  }
