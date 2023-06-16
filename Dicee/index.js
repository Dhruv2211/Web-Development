var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var dice1 = "dice"+randomNumber1+".png";
var dice1Source = "./images/"+dice1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", dice1Source);

var dice2 = "dice"+randomNumber2+".png";
var dice2Source = "./images/"+dice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", dice2Source);



var player1 = "Player 1 wins";
var player2 = "Player 2 wins";

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = player1;
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = player2;
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
