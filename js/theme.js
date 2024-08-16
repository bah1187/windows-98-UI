
// loading screen
$( function() {
  $('.loading-screen').delay(4000).fadeOut(400);
} );


$('.window').draggable();
$('.icon').draggable();

$('.cancel, .close').on('click', function(e){
   e.preventDefault();
  $('.window').hide();
});

$('.ok').on('click', function(e){
   e.preventDefault();
  $('.overlay').toggleClass('on');
  $('.power-button').fadeIn();
});

$('.start-btn').on('click', function(e){
   e.preventDefault();
  $(this).toggleClass('active');
  $('.start-menu').toggleClass('open');
});

$( function() {
  $( "#selectable" ).selectable();
} );


// $('.doom').on('click', function(e){
//    e.preventDefault();
//   $('.doom-boot').show();
// });


$('.icon').click(function() {
   // get class name of the element
    var elementClassName = $(this).attr('window');
    //find the divs with this class name and show them
    $('.window.'+elementClassName).show();
    console.log(elementClassName);
});


// Clock

function updateClock ( )
 	{
 	var currentTime = new Date ( );
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = currentTime.getMinutes ( );
  	var currentSeconds = currentTime.getSeconds ( );

  	// Pad the minutes and seconds with leading zeros, if required
  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  	// Choose either "AM" or "PM" as appropriate
  	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  	// Convert the hours component to 12-hour format if needed
  	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  	// Convert an hours component of "0" to "12"
  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	// Compose the string for display
  	var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;


   	$("#clock").html(currentTimeString);

 }

$(document).ready(function()
{
   setInterval('updateClock()', 1000);
});
