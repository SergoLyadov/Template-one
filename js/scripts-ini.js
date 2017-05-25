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

jQuery(function() {
jQuery(window).scroll(function() {
if(jQuery(this).scrollTop() != 0) {
jQuery('.button-top').fadeIn();
} else {
jQuery('.button-top').fadeOut();
}
});
jQuery('.button-top').click(function() {
jQuery('body,html').animate({scrollTop:0},800);
});
});

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: 800,
        height: 600,
        videoId: 'Xa0Q0J5tOP0',
        playerVars: {
            color: 'white',
            playlist: 'taJ60kskkns,FG0fTKAqZ5g'
        },
    });
}
jQuery('#youtube_player').on('hidden.bs.modal', function (e) {
player.pauseVideo();
})

jQuery('#youtube_player').on('shown.bs.modal', function (e) {
player.playVideo();
})

jQuery('.say-us-block').slick({
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

 jQuery(function(){
    var jQuerygallery = jQuery('.gallery a').simpleLightbox();

    jQuerygallery.on('show.simplelightbox', function(){
      console.log('Requested for showing');
    })
    .on('shown.simplelightbox', function(){
      console.log('Shown');
    })
    .on('close.simplelightbox', function(){
      console.log('Requested for closing');
    })
    .on('closed.simplelightbox', function(){
      console.log('Closed');
    })
    .on('change.simplelightbox', function(){
      console.log('Requested for change');
    })
    .on('next.simplelightbox', function(){
      console.log('Requested for next');
    })
    .on('prev.simplelightbox', function(){
      console.log('Requested for prev');
    })
    .on('nextImageLoaded.simplelightbox', function(){
      console.log('Next image loaded');
    })
    .on('prevImageLoaded.simplelightbox', function(){
      console.log('Prev image loaded');
    })
    .on('changed.simplelightbox', function(){
      console.log('Image changed');
    })
    .on('nextDone.simplelightbox', function(){
      console.log('Image changed to next');
    })
    .on('prevDone.simplelightbox', function(){
      console.log('Image changed to prev');
    })
    .on('error.simplelightbox', function(e){
      console.log('No image found, go to the next/prev');
      console.log(e);
    });
  });

jQuery('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});