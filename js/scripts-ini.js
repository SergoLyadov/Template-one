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