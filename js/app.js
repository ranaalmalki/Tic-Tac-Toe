//call the all button

// let player = $(".box");
// let player1 = "X";
// let player2="O";
// //every click will apper the text  
//  player.click(function () {
//    if($(this).text()=="X"){
//     player.click(function () {

//       if($(this).text()=="O"){
//         player.click(function () {

//           if($(this).text()=="X"){
//             player.click(function () {

//               if($(this).text()=="O"){
//                 player.click(function () {

//                   if($(this).text()=="X"){
//                     player.click(function () {

//                       if($(this).text()=="O"){
//                         player.click(function () {

//                           if($(this).text()=="X"){
//                             player.click(function () {
//                              return $(this).text()=="O";
//                               if($(this).text()=="O"){
//                                 player.click(function () {

//                                   if($(this).text()=="X"){

//                                   }


//                                     }
//                                );
//                               }


//                                 }
//                            );
//                           }


//                             }
//                        );
//                       }


//                         }
//                    );
//                   }


//                     }
//                );
//               }


//                 }
//            );
//           }


//             }
//        );
//       }


//         }
//    );

//    }

//      }
// );

// plyer click button "X" Or "O"
let player = $(".box");
let player1 = "X";
player.one("click", function () {
  //for(let i = 0;i<player.length;i++){
  if (player1 === "X") {
    $(this).text("X");
    player1 = "O";
  } else {
    $(this).text("O");
    player1 = "X";
  }
  playerWin();
  // }
});

// varibale to call the the id for the button 
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
 
  if (playerIndex1.text()=="X" && playerIndex2.text()=="X" && playerIndex3.text()=="X" || playerIndex1.text()=="O" && playerIndex2.text()=="O" && playerIndex3.text()=="O") {
    console.log("win");
alert("you are the win");
    //console.log(playerIndex1.text()=="X"+" 1");
//console.log(playerIndex2.text()=="X"+"  2");
  } else if (playerIndex4.text()=="X" && playerIndex5.text()=="X" && playerIndex6.text()=="X" || playerIndex4.text()=="O" && playerIndex5.text()=="O" && playerIndex6.text()=="O") {
    console.log("win");

  } else if (playerIndex7.text()=="X" && playerIndex8.text()=="X" && playerIndex9.text()=="X" || playerIndex7.text()=="O" && playerIndex8.text()=="O" && playerIndex9.text()=="O") {
    console.log("win");

  } else if (playerIndex1.text()=="X" && playerIndex4.text()=="X" && playerIndex7.text()=="X" || playerIndex1.text()=="O" && playerIndex4.text()=="O" && playerIndex7.text()=="O") {
    console.log("win");

  } else if (playerIndex2.text()=="X" && playerIndex5.text()=="X" && playerIndex8.text()=="X" || playerIndex2.text()=="O" && playerIndex5.text()=="O" && playerIndex8.text()=="O") {
    console.log("win");

  } else if (playerIndex3.text()=="X" && playerIndex6.text()=="X" && playerIndex9.text()=="X" || playerIndex3.text()=="O" && playerIndex6.text()=="O" && playerIndex9.text()=="O") {
    console.log("win");

  } else if (playerIndex1.text()=="X" && playerIndex5.text()=="X" && playerIndex9.text()=="X" || playerIndex1.text()=="O" && playerIndex5.text()=="O" && playerIndex9.text()=="O") {
    console.log("win");

  } else if (playerIndex3.text()=="X" && playerIndex5.text()=="X" && playerIndex7.text()=="X" || playerIndex3.text()=="O" && playerIndex5.text()=="O" && playerIndex7.text()=="O") {
    console.log("win");

  } else {
    console.log("Tie");
  }
} 
let resetButton = $("#reset");
function playeAgain(){

}
// let chose =[$("#box-1"),
// $("#box-2"),
// $("#box-3"),
// $("#box-4"),
// $("#box-5"),
// $("#box-6"),
// $("#box-7"),
// $("#box-8")
// ];
// let player = $(".box");
// function check(){
//     let count = 0;
//     this.player1 +="X";
//     for(let i=0; i<player.length;i++){
//         if( player[i].player1){
// count++;
//         }
//     }
// }
// for(let i=0; i<player.length;i++){

// player[i].on("click",check);
// }
// player.on("click",check);
// let player1 = 1;
// let player2=2;
// let box = $(".box");
// let turnPlayer1 = $("#player-1");
// let turnPlayer2 = $("#player-2");
// $(".box").click(function(){

//     box = 
// });
// const nextPlayer = function(turnPlayer1,player1){
// if(player1 === 1){
//     return turnPlayer1.html("turn player"+player1)
// }else {
//     return turnPlayer2.html("turn plyer"+player2)
// }
// }
// const indexPlayer = function(){
// if(player1 === 1){
//     return "X";
// }else{
//     return "O"
// }
// }

// let player =$(".box");
// let player1 = "X";
// let player2 = "O";