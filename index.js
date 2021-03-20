document.querySelector("#click-btn").onclick = () => {

var rnd1  = Math.floor(Math.random() * 6) + 1;
document.querySelector("#player1").src="./images/dice" + rnd1 + ".png";


var rnd2  = Math.floor(Math.random() * 6) + 1;
document.querySelector("#player1").src="./images/dice" + rnd2 + ".png";

if(rnd1>rnd2){
document.querySelector("h1").textContent = "Player 1 Wins!";
document.querySelector("#player1-text").style.color = "#FA4A37";
document.querySelector("#player2-text").style.color = "#259934";
}else if(rnd1<rnd2){
document.querySelector("h1").textContent = "Player 2 Wins!";
document.querySelector("#player2-text").style.color = "#FA4A37";
document.querySelector("#player1-text").style.color = "#259934";
}else{
document.querySelector("h1").textContent = "Draw!";
document.querySelector("#player1-text").style.color = "#259934";
document.querySelector("#player2-text").style.color = "#259934";
}
}
