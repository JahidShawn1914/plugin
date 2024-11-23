// jq
$(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('#count-example').jQuerySimpleCounter({
      start:  100,
      end:    0,
      easing:'swing',
      duration: 4000,
      complete:'',
    });
  $('#count-example1').jQuerySimpleCounter({
      start:  0,
      end:    100,
      easing:'swing',
      duration: 4000,
      complete:'',
    });
    
    $('body').parallax();

});
// js
wow = new WOW(
  {
  boxClass:     'wow',     
  animateClass: 'animated',
  offset:       0,         
  mobile:       true,      
  live:         true       
}
)
wow.init();