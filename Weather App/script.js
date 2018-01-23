
$(document).ready(function(){
    var latitude,longitude;
    //var skycons = new Skycons({"color":"pink"});
  if(navigator.geolocation){
 navigator.geolocation.getCurrentPosition(function(position){
     latitude = position.coords.latitude;
      longitude = position.coords.longitude;
   
   $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+position.coords.latitude+"&lon="+position.coords.longitude, function(json) {
  //Update Weather parameters
  displayLocationData(json);
  });
   
   });
    
    }
  
  function displayLocationData(weatherobject){
    var skycons = new Skycons({"color":"pink"});
    //Setting the UI element
      $('#header').html("Weather Condition In " + weatherobject.name + "," + weatherobject.sys.country);
    $('#temperaturedisplay').html(weatherobject.main.temp +"°C");
    $('#status').html(weatherobject.weather[0].main);
    $('#time').html(new Date());
    $('iconwrap').html();  
    //skycons.add("icon",Skycons.PARTLY_CLOUDY_DAY);
    skycons.add("rain", Skycons.RAIN);
    
    //Changing weather background
    var weatherstatus = weatherobject.weather[0].main;
     if(weatherstatus == 'Haze'){
      document.body.style.backgroundImage = "url('Cloud:https://giphy.com/gifs/clouds-rainbow-5HK4TiiBeLSZq')"; 
     }
  }
  });