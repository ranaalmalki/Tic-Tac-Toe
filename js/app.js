let player = $(".box");
let player1 = "X";
let playerTurn = $("footer");
//function for player turn
const playerClick = function () {

  if (player1 === "X") {
    $(this).text("X");
    player1 = "O";
    playerTurn.text("Turn O");

  } else {
    $(this).text("O");
    player1 = "X";
    // to exchange the player turn
    playerTurn.text("Turn X");

  }
  // cal the function to check the winner 
  playerWin();

}
// player click event button "X" Or "O"

player.one("click", playerClick);

function display(){
  console.log("win");
   // off method to stop the click event
   player.off("click");
   //display the message
swal.fire("winner","","success");

}
//  declare variable to call and select the  id for the button 
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
// to select and display the winner message
  if (playerIndex1.text() == "X" && playerIndex2.text() == "X" && playerIndex3.text() == "X" || playerIndex1.text() == "O" && playerIndex2.text() == "O" && playerIndex3.text() == "O") {
   display();
  } else if (playerIndex4.text() == "X" && playerIndex5.text() == "X" && playerIndex6.text() == "X" || playerIndex4.text() == "O" && playerIndex5.text() == "O" && playerIndex6.text() == "O") {
 display();

  } else if (playerIndex7.text() == "X" && playerIndex8.text() == "X" && playerIndex9.text() == "X" || playerIndex7.text() == "O" && playerIndex8.text() == "O" && playerIndex9.text() == "O") {
    display();


  } else if (playerIndex1.text() == "X" && playerIndex4.text() == "X" && playerIndex7.text() == "X" || playerIndex1.text() == "O" && playerIndex4.text() == "O" && playerIndex7.text() == "O") {
    display();


  } else if (playerIndex2.text() == "X" && playerIndex5.text() == "X" && playerIndex8.text() == "X" || playerIndex2.text() == "O" && playerIndex5.text() == "O" && playerIndex8.text() == "O") {
    display();


  } else if (playerIndex3.text() == "X" && playerIndex6.text() == "X" && playerIndex9.text() == "X" || playerIndex3.text() == "O" && playerIndex6.text() == "O" && playerIndex9.text() == "O") {
    display();


  } else if (playerIndex1.text() == "X" && playerIndex5.text() == "X" && playerIndex9.text() == "X" || playerIndex1.text() == "O" && playerIndex5.text() == "O" && playerIndex9.text() == "O") {
    display();

  } else if (playerIndex3.text() == "X" && playerIndex5.text() == "X" && playerIndex7.text() == "X" || playerIndex3.text() == "O" && playerIndex5.text() == "O" && playerIndex7.text() == "O") {
     display();

//condition for check the tie
  } else if (player.text().length === 9) {
    console.log("Tie");
    swal.fire("Tie","","info");
  }
}
// function to resart the game 
let resetButton = $("#reset");
resetButton.click(function () {
// to make the index empty 
  player.text("");
  
  player.one("click", playerClick);


});