let player = $(".box");
let player1 = "X";
let playerTurn = $("footer");
//function for player turn
const playerClick = function () {

  if (player1 === "X") {
    $(this).text("X");
    player1 = "O";

  } else {
    $(this).text("O");
    player1 = "X";

  }
  playerWin();
}
// plyer click button "X" Or "O"

player.one("click", playerClick);


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
    // off method to stop the click event
    player.off("click");
swal.fire("winner","","success");
  } else if (playerIndex4.text() == "X" && playerIndex5.text() == "X" && playerIndex6.text() == "X" || playerIndex4.text() == "O" && playerIndex5.text() == "O" && playerIndex6.text() == "O") {
    console.log("win");
    player
    swal.fire("winner","","success");
    player.off("click");

  } else if (playerIndex7.text() == "X" && playerIndex8.text() == "X" && playerIndex9.text() == "X" || playerIndex7.text() == "O" && playerIndex8.text() == "O" && playerIndex9.text() == "O") {
    console.log("win");
    swal.fire("winner","","success");

    player.off("click");

  } else if (playerIndex1.text() == "X" && playerIndex4.text() == "X" && playerIndex7.text() == "X" || playerIndex1.text() == "O" && playerIndex4.text() == "O" && playerIndex7.text() == "O") {
    console.log("win");
    swal.fire("winner","","success");


    player.off("click");

  } else if (playerIndex2.text() == "X" && playerIndex5.text() == "X" && playerIndex8.text() == "X" || playerIndex2.text() == "O" && playerIndex5.text() == "O" && playerIndex8.text() == "O") {
    console.log("win");
    swal.fire("winner","","success");


    player.off("click");

  } else if (playerIndex3.text() == "X" && playerIndex6.text() == "X" && playerIndex9.text() == "X" || playerIndex3.text() == "O" && playerIndex6.text() == "O" && playerIndex9.text() == "O") {
    console.log("win");
    swal.fire("winner","","success");


    player.off("click");

  } else if (playerIndex1.text() == "X" && playerIndex5.text() == "X" && playerIndex9.text() == "X" || playerIndex1.text() == "O" && playerIndex5.text() == "O" && playerIndex9.text() == "O") {
    console.log("win");
    swal.fire("winner","","success");


    player.off("click");

  } else if (playerIndex3.text() == "X" && playerIndex5.text() == "X" && playerIndex7.text() == "X" || playerIndex3.text() == "O" && playerIndex5.text() == "O" && playerIndex7.text() == "O") {
    console.log("win");
    swal.fire("winner","","success");


    player.off("click");

  } else if (player.text().length === 9) {
    console.log("Tie");
    alert("Tie ");
  }
}
// function to resart the game 
let resetButton = $("#reset");
resetButton.click(function () {

  player.text("");
  player.one("click", playerClick);


});