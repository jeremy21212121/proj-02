$(document).ready(function(){

// BEGIN SMOOTH SCROLLER----------------------------------!
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
// END OF SMOOTH SCROLLER-------------------------------------!

// BEGIN SLIDER-----------------------------------------------!
  $('.bxslider').bxSlider({
     adaptiveHeight: true,
    // mode: 'fade',
     auto: 'true',
     pager: false,
     controls: false,
     slideWidth: 380,
     minSlides: 1,
     maxSlides: 3,
     slideMargin: 0,
     pause: 0,
     easing: 'linear',
     speed: 6000
    //  ticker: true
  });
//END SLIDER-----------------------------------------!

//OPENCLOSED FUNCTION (Copyleft) 2015 JEREMY POOLE - ALL RIGHTS REVERSED ;) -------------!
//function openClosed determines and displays the day of the week and if the restaurant is open or closed
function openClosed() {

var today = Date().substring(0,3)
//Getting the date and cutting it down to the first 3 letters

var daysWeek = [
 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
//creating an array containing the days of the week inside a variable

for (var i = 0; daysWeek[i].indexOf(today) < 0; i++) {};
//goes through the array until the correct day is found. after this loop, var i will = the arrays index number for today

if (i<5) {
  $('span#open').text('We\'re open!') }
//if value of i is between 0-4, that means it is a weekday, so its open

else    {
  $('span#open').text('We\'re closed!') }
//if not, then it must be a weekend and its closed

$('span#day').text('It\'s ' + daysWeek[i] + ',')
//displays the day of week for the user
};
//END OF OPENCLOSED FUNCTION
openClosed();
//calling function openClosed()
});
