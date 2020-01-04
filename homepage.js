/*****
DONE: Add author to the tweet
TODO: Fix the 140 character tweet limit
TODO: Random number/quote on click shouldn't sometimes be the same as the previous one, making the quote form look unresponsive/broken
TODO: Rotating phone from landscape to portrait causes height issues
TODO: Give users the ability to add quotes and/or upvote or rate their favorite quotes -- could be abused though.
TODO: More quotes!
TODO: Add more cyberpunk-y effects and animations
*****/

$(document).ready(function() {
  var fontList = [
    { name: "Jess C. Scott", description: "The Darker Side of Life", use: "The brightest light casts the darkest shadow." },
  ];

// var quoteRandomize = '';
// var quoteMain = '';
// var quoteAuthor = '';
// var quoteSource = '';
  
  function fontGenerate() {  
    var fontRandomize = Math.floor(Math.random() * fontList.length);
    var fontName = fontList[fontRandomize].name;
    var fontDescription = fontList[fontRandomize].description;
    var fontUse = fontList[fontRandomize].use;
    
    $("#font-name").text(fontName);
    $("#font-description").text(fontDescription);
    $("#font-use").text(fontUse);
  };

  $("#new-font").on("click", function() {
    fontGenerate();
  });
  fontGenerate();
});