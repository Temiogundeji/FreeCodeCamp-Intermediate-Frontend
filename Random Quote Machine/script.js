
function randomQuotes() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#quoteWrapper").html("<p id='random_quote' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
      }
  });
}

function animateColor(){
  //This is for color animation
var colors = ["#FF3334", "#F2777A", "#FFCC66",
"#F99157", "#9EC400", "#99CC99",
 "#82CBCB", "#54CED6", "#5780A9",
 "#6699CC", "#CC99CC", "#B777E0"];
  
  let randomColor = Math.floor(Math.Random()*12);
  let color = colors[randomColors];
  shareButton.style.color = color;
	nextButton.style.color = color;
  quoteWrapper.style.backgroundColor = color;
	document.body.style.backgroundColor = color;
	const twitterLink = "https://twitter.com/intent/tweet?text=",
		codepenLink = "https://codepen.io/letwitch/pen/aNWaEx";
}

$(function() {
  randomQuotes();
});

$("#nextButton").click(function(){
  randomQuotes();
  animateColor();
});
$("#shareButton").click(function(){
  $("#shareButton").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
});

