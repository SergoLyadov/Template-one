jQuery(function($){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 60){
      $("header").addClass("sticky-header");
    }else{
      $("header").removeClass("sticky-header");
    }
  });
});