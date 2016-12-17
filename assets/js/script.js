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
