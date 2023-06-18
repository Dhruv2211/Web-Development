for(var i = 0;  i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll("button")[i].addEventListener("click", function (){
   // var audioLocation = '';
   var buttonName = this.innerHTML;
     this.style.color = "white";
    //what to do when button is clicked
    makeSound(buttonName);

    buttonAnimation(buttonName);
});
}


document.addEventListener("keydown", function(event){
    var key = event.key;
    makeSound(key);
    buttonAnimation(key);
});


//var audio = new Audio('./sounds/tom-1.mp3');
//audio.play();


function makeSound(key){


    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            alert("Please select a proper button");
            break;

        }
}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)

}