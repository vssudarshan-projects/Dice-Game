document.querySelector("#click-btn").onclick = () => {

var rnd1  = Math.floor(Math.random() * 5) + 1;

switch (rnd1) {
  case 1:
    document.querySelector("#player1").src="./images/dice1.png";
    break;
    case 2:
      document.querySelector("#player1").src="./images/dice2.png";
      break;
      case 3:
        document.querySelector("#player1").src="./images/dice3.png";
        break;
        case 4:
          document.querySelector("#player1").src="./images/dice4.png";
          break;
          case 5:
            document.querySelector("#player1").src="./images/dice5.png";
            break;

  default:
    document.querySelector("#player1").src="./images/dice6.png";
}

rnd2  = Math.floor(Math.random() * 5) + 1;
switch (rnd2) {
case 1:
  document.querySelector("#player2").src="./images/dice1.png";
  break;
  case 2:
    document.querySelector("#player2").src="./images/dice2.png";
    break;
    case 3:
      document.querySelector("#player2").src="./images/dice3.png";
      break;
      case 4:
        document.querySelector("#player2").src="./images/dice4.png";
        break;
        case 5:
          document.querySelector("#player2").src="./images/dice5.png";
          break;

default:
  document.querySelector("#player2").src="./images/dice6.png";
}

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
