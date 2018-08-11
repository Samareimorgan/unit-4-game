$(document).ready(function(){
  
var wins=0;
var losses=0;
var yourNum;
var matchNumber=0;
var agatevalue;
var rubyvalue;
var sapphirevalue;
var emeraldvalue;

var imageArray=[
  {url:"assets/images/Agate.png",image:".first-image"},
  {url:"assets/images/Ruby.png",image:".second-image"},
  {url:"assets/images/Emerald.png",image:".third-image"},
  {url:"assets/images/Saphire.png",image:".fourth-image"}

];
showBtns();
    //Instructions:  Each crystal is assigned an unknown value. 
                    //At the beginning of each game, a random value will show in the match area.
                    //Using the Crystals; click on the crystals to add value to your total score.
                    // If your score matches the match number, you win
                    // If your score goes over the match number, you lose the game and a life. 
                    //To Start a New Game, press new game. 
                    //To clear game history, press clear history to reset wins and losses to 0
                    //Each new game will have a new match number and new values for the crystals
        
    //New game button
   $("#newgamebtn").on("click",function() {
    startGame();
    agatevalue=matchRandNum(1,12);
    rubyvalue=matchRandNum(1,12);
    sapphirevalue=matchRandNum(1,12);
    emeraldvalue=matchRandNum(1,12);

   });
   function startGame() {
    yourNum=0;
    matchNumber=matchRandNum(19,120);
    $("#match").text(matchNumber);
    $("#yourNum").text(yourNum);
    $("#gamemsg").text("Please Select A Crystal.")

    showBtns();
   }
   function showBtns(){
    $(".first-image").empty();
    $(".second-image").empty();
    $(".third-image").empty();
    $(".fourth-image").empty();
    for(var i=0;i<imageArray.length; i++) {
      var imageBtn=getImageBtn(imageArray[i].url);
      var imageRow=$(".images");
      var imageColumn=imageRow.find(imageArray[i].image)
      imageColumn.prepend(imageBtn);
    };
   };
   
   function getImageBtn(imgsrc) {
    var imageBtn=$("<img>");
      imageBtn.addClass("img-responsive");
      imageBtn.attr("src",imgsrc);
    //var randomNum=matchRandNum(1,12);
    //  imageBtn.attr("data-value",randomNum);
      return imageBtn;
   }; 

   function matchRandNum(min, max) {
    return Math.floor(Math.random()*max) + min;
  };

  $(".first-image").on("click",function() {
     yourNum = (agatevalue + yourNum);
     $("#yourNum").text(yourNum);
  });

  $(".second-image").on("click",function() {
    yourNum = (rubyvalue + yourNum);
    $("#yourNum").text(yourNum);
 });

 $(".third-image").on("click",function() {
  yourNum = (sapphirevalue + yourNum);
  $("#yourNum").text(yourNum);
});

$(".fourth-image").on("click",function() {
  yourNum = (emeraldvalue + yourNum);
  $("#yourNum").text(yourNum);
});

  /* function getYourScore() {
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
      getYourScore();*/

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
      
      //Function - matchRandNum
 
       // Random number between 19 - 120 
       // Place it in the Match area

      //Function - crystalRandNum
       // Random number between 1-12
    
//Other Pseudocode:
//   on click of a crystal, the number assigned to that crystal then is added to "Your Score" 
// If "Your Score === match number " Wins++ and .text ("Congratulations You have won") in game messgage area
//   else if "Your score > match number" losses== and text (Oh no! Your Crystals have suddenly imploded. Try again with a New Game.)
//   else if "Your score < match number" replace text with (Please select your next crytal) 
//

