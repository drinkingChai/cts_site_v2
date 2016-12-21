$(".navbar-collapse a").on('click', function(){
  if ($(".navbar-collapse").attr("aria-expanded")) {
    $(".navbar-toggle").click();
  };
  // Reference: http://stackoverflow.com/questions/16680543/hide-twitter-bootstrap-nav-collapse-on-click
});

$(".navbar-collapse a, .services a, .splash a, .navbar-header a").on('click', function() {
  // Reference: http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash == "") {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    console.log('test');
  } else {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 50
    }, 500, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
})
