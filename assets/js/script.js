// snippet from: http://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $("nav").hide();
   } else {
      // upscroll code
      $("nav").show();
   }
   lastScrollTop = st;
});

$(".navbar-collapse a").on('click', function(){
  if ($(".navbar-collapse").attr("aria-expanded")) {
    $(".navbar-toggle").click();
  };
  // Reference: http://stackoverflow.com/questions/16680543/hide-twitter-bootstrap-nav-collapse-on-click
});

$(".navbar-collapse a, .services a, .splash a").on('click', function() {
  // Reference: http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
})
