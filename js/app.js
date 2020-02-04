let playerTurn1 = $("#player-1");
let playerTurn2 = $("#player-2");


// plyer click button "X" Or "O"
let player = $(".box");
let player1 = "X";
const playerClick = function () {

  if (player1 === "X") {
    $(this).text("X");
    player1 = "O";
    playerTurn1.text("player x");
    changeColor()
    // playerTurn1.innerHTML = 'player X turn';

 
  } else {
    $(this).text("O");
    player1 = "X";
    changeColor();
    // playerTurn1.innerHTML = 'player O turn';
  
  }
  playerWin();
}
player.one("click", playerClick);
function changeColor(){
  if(player1 === "X"){
  playerTurn2.css('background-color','red' )
} else {
  playerTurn1.css('background-color','red' )}
}

// varibale to call the  id for the button 
let playerIndex1 = $("#box-1");
let playerIndex2 = $("#box-2");
let playerIndex3 = $("#box-3");
let playerIndex4 = $("#box-4");
let playerIndex5 = $("#box-5");
let playerIndex6 = $("#box-6");
let playerIndex7 = $("#box-7");
let playerIndex8 = $("#box-8");
let playerIndex9 = $("#box-9");

// function to check the win 
function playerWin() {

  if (playerIndex1.text() == "X" && playerIndex2.text() == "X" && playerIndex3.text() == "X" || playerIndex1.text() == "O" && playerIndex2.text() == "O" && playerIndex3.text() == "O") {
    console.log("win");
    player.off("click");

    alert("winnner");


  } else if (playerIndex4.text() == "X" && playerIndex5.text() == "X" && playerIndex6.text() == "X" || playerIndex4.text() == "O" && playerIndex5.text() == "O" && playerIndex6.text() == "O") {
    console.log("win");
    player
    alert("winner");
    player.off("click");

  } else if (playerIndex7.text() == "X" && playerIndex8.text() == "X" && playerIndex9.text() == "X" || playerIndex7.text() == "O" && playerIndex8.text() == "O" && playerIndex9.text() == "O") {
    console.log("win");
    alert("winner");

    player.off("click");

  } else if (playerIndex1.text() == "X" && playerIndex4.text() == "X" && playerIndex7.text() == "X" || playerIndex1.text() == "O" && playerIndex4.text() == "O" && playerIndex7.text() == "O") {
    console.log("win");
    alert("winner");

    player.off("click");

  } else if (playerIndex2.text() == "X" && playerIndex5.text() == "X" && playerIndex8.text() == "X" || playerIndex2.text() == "O" && playerIndex5.text() == "O" && playerIndex8.text() == "O") {
    console.log("win");
    alert("winner");

    player.off("click");

  } else if (playerIndex3.text() == "X" && playerIndex6.text() == "X" && playerIndex9.text() == "X" || playerIndex3.text() == "O" && playerIndex6.text() == "O" && playerIndex9.text() == "O") {
    console.log("win");
    alert("winner");

    player.off("click");

  } else if (playerIndex1.text() == "X" && playerIndex5.text() == "X" && playerIndex9.text() == "X" || playerIndex1.text() == "O" && playerIndex5.text() == "O" && playerIndex9.text() == "O") {
    console.log("win");
    alert("winner");

    player.off("click");

  } else if (playerIndex3.text() == "X" && playerIndex5.text() == "X" && playerIndex7.text() == "X" || playerIndex3.text() == "O" && playerIndex5.text() == "O" && playerIndex7.text() == "O") {
    console.log("win");
    alert("winner");

    player.off("click");

  } else if(player.text().length ===9){
    console.log("Tie");
    alert("Tie ");
  }
}

let resetButton = $("#reset");
resetButton.click(function () {

  player.text("");
  player.one("click", playerClick);


});