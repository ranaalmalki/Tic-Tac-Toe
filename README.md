# Tic-Tac-Toe
https://ranaalmalki.github.io/Tic-Tac-Toe/
### Technologies :
* HTML(Hyper Text Markup Language).
* CSS (Cascading Style Sheets ).
* JavaScript.
* JQuery.
* Visual Studio.



### Wireframes:
![wireframe](tic-tac-toe.png)

###  User Stories :
* As a user, I should be able to start a new tic tac toe game
* As a user, I should be able to click on a square to add X first and then O, and so on
* As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
* As a user, I should not be able to click the same square twice
* As a user, I should be shown a message when I win, lose or tie
* As a user, I should not be able to continue playing once I win, lose, or tie
* As a user, I should be able to play the game again without refreshing the page

### Development process :
* At first i searched about how the game is work and how many players can play this game then after gathering the information I did make the wireframe for my game website then I start write  my code in html,javascript and css.



### List unsolved problems :

* Create an AI opponent: teach JavaScript to play an unbeatable game against you.
 * i hope in future solving this iteration.


### Describe how you solved for the winner:

* At first i declaer a varibale to select each of the index separately then a wrote  function to check the  winner with if-statment condition will check every index by row and cloumn .Second,call function display a message if the player win , lose or tie . 

### My favorite functions :

  In the first line a decleare variable to select the button id reset then i wrote in click event contains the function for select all the index and  remove it then call the function playerClick to start a new game .
  <pre>

   ```javascript
 let resetButton = $("#reset");
resetButton.click(function () {

  player.text("");
  player.one("click", playerClick);


});
   ```
   </pre>



