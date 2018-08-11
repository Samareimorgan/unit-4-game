$(document).ready(function(){

var wins=0;
var losses=0;
var yourNum;
var matchNumber=0;
var rubyvalue;
var agatevalue;
var emeraldvalue;
var sapphirevalue;

});

// Create Function to start game; that randomizes all crystal values and the match numbers as we
function startGame() {
    //Zero out yourNum
    yourNum=0;
    //Randomize the match number
    matchNumber=randNum(19,120);
    //Randomize each crystal value
    agatevalue=randNum(1,12);
    rubyvalue=randNum(1,12);
    emeraldvalue=randNum(1,12);
    sapphirevalue=randNum(1,12);
    //Place values in appropriate ids
    $("#first-image").text(agatevalue);
    $("#second-image").text(rubyvalue);
    $("#third-image").text(sapphirevalue);
    $("#fourth-image").text(emeraldvalue);
    $("#match").text(matchNumber);
    $("#yourNum").text(yourNum);
    $("#gamemsg").text("Select A Crystal");
};


//Instructions:  Each crystal is assigned an unknown value. 
                    //At the beginning of each game, a random value will show in the match area.
                    //Using the Crystals; click on the crystals to add value to your total score.
                    // If your score matches the match number, you win
                    // If your score goes over the match number, you lose the game and a life. 
                    //To Start a New Game, press new game. 
                    //To clear game history, press clear history to reset wins and losses to 0
                    //Each new game will have a new match number and new values for the crystals.

$("#newgamebtn").on("click",function() {
    startGame();
});
/*

  function getYourScore() {
    var newScore=crystalvalue+yourNum;
     $("#yourNum").text(newScore);
    if(newScore==matchNumber);
     wins++;
     $("#gamemsg").text("Congratulations, You have collected all the right crystals");
   }
     elseif(newScore > matchNumber);
       $("#gamemsg").text("Your crystals have dropped into the cavern; try again. Please press new game.");
       losses++;
     elseif(newScore < matchNumber);
       $("#gamemsg").text("You need more crystals. Select another crystal.");
   });

   $("first-image").on("click",function(){
     getYourScore();

   });

   $(".second-image").on("click",function(){
     getYourScore();

   });
   $(".third-image").on("click",function(){
     getYourScore();

   });
   $(".fourth-image").on("click",function(){
     getYourScore();

   });

   

      //FUNCTION - NEW GAME
         // on click of New Game Btn..
        //randomize new match number and place that in the match div
        //randomize each new crystal number and place those in the respective crystal divs
        // Place text in game message area to state "Select a Crystal"

      //Function - Clear Game History
       // on click of clearGamesBtn...
       // reset wins to 0
       // reset losses to 0
       // place text in game message area to state " Game History has been cleared, press New Game to Start"
     
   */  //Function - matchRandNum
 function randNum(min, max) {
   return Math.floor(Math.random()*max) + min;
 };
      // Random number between 19 - 120 
      // Place it in the Match area

     //Function - crystalRandNum
      // Random number between 1-12
   
//Other Pseudocode:
//   on click of a crystal, the number assigned to that crystal then is added to "Your Score" 
// If "Your Score === match number " Wins++ and .text ("Congratulations You have won") in game messgage area
//   else if "Your score > match number" losses== and text (Oh no! Your Crystals have suddenly imploded. Try again with a New Game.
//   else if "Your score < match number" replace text with (Please select your next crytal) */
