// 

$(document).ready(function(){
  $('input[type=text]').focus();
  //Monitoring user input
   $(document).keypress(function (key) {
      if (!$('input[type=text]').is(":focus")) {
        return;
      } else if ($('input[type=text]').val().length < 1) {
        return;
      } else if (key.which == 13) {
        getResults();
      }
  });
  
   $('body').on('click', '.result', function () {
    window.open('https://en.wikipedia.org/wiki/' + $(this).children('.title').text(), '_blank');
  });
  
  $('#search').on('click', function(){
   $('form').hide();
    getResults();
    
    if(getResult() && $('input[type=text]').length == 0){
      $('#result').hide();
    }
  });
  function getResults(){
    var searchVal = $('input[type=text]').val();
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&limit=15&list=search&utf8=1&srsearch=" + searchVal + "&callback=?", function(response){
      var pages = response.query.search.length;
      for(var index=0;index < pages;index++){
      var pageTitle = response.query.search[index].title;
      var pageSnippet = response.query.search[index].snippet;
      // $('#title').append(pageTitle);
      // $('#snippet').append(pageSnippet);
      $('#results').append('<div class="result"><div class="title"><a>' + pageTitle + '</a></</div><div class="snippet">' + pageSnippet + '</div></div>');

    }
    });
  }
});


