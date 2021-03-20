document.querySelector("#click-btn").onclick = () => {

var img = document.querySelectorAll("img");
var rnd = [];

for(var i = 0;i < 2; i++){
rnd.push((Math.floor(Math.random() * 6) + 1));
img[i].src = "./images/dice" + rnd[i] + ".png";
}

if(rnd[0]>rnd[1]){
document.querySelector("h1").textContent = "Player 1 Wins!";
document.querySelector("#player1-text").style.color = "#FA4A37";
document.querySelector("#player2-text").style.color = "#259934";
}else if(rnd[0]<rnd[1]){
document.querySelector("h1").textContent = "Player 2 Wins!";
document.querySelector("#player2-text").style.color = "#FA4A37";
document.querySelector("#player1-text").style.color = "#259934";
}else{
document.querySelector("h1").textContent = "Draw!";
document.querySelector("#player1-text").style.color = "#259934";
document.querySelector("#player2-text").style.color = "#259934";
}
}
