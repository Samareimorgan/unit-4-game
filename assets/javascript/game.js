$(document).ready(function(){
//Declare global variables
var wins="";
var losses="";
$("#wins").text(wins);
$("#losses").text(losses);
var yourNum;
var matchNumber;
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
    $("#gamemsg").text("Please Select A Crystal.");

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
      return imageBtn;
   }; 

   function matchRandNum(min, max) {
    return Math.floor(Math.random()*max) + min;

  function won () {
    alert("Congratulations, You've Won!");
    wins++;
    $("#wins").text(wins);
    $("#gamemsg").text("Press New Game to Begin again");
  }

  function lost () {
    alert("Oh man! Your crystals have shattered, try again.");
    losses++;
    $("#losses").text(losses);
    $("#gamemsg").text("Press New Game to Begin again");
  };
  //On click events for the images
  $(".first-image").on("click",function() {
      yourNum = (agatevalue + yourNum);
      $("#yourNum").text(yourNum)
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
  
    });
  
/*I'm struggling to figure out where to put the if statements in this code so they work. 
function winLoss() {
  if(won) {
    wins++;
    $("#wins").text(wins);
    alert("Congratulations!!");  
  if(lost); {
    losses++; 
    $("#losses").text(losses);
    alert("Try again");
