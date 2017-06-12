jQuery(function($){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 40){
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
        }
    });
            player2 = new YT.Player('video-dynamically', {
        width: 585,
        height: 330,
        videoId: 'h14wr4pXZFk',
        playerVars: {
            color: 'white',
            playlist: 'KkFnm-7jzOA,Ph77yOQFihc'
        }
    });
            player3 = new YT.Player('player', {
        width: 585,
        height: 330,
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

jQuery('#prev').on('click', function () {
    player3.previousVideo()
});
jQuery('#play').on('click', function () {

    player3.playVideo();

});
jQuery('#pause').on('click', function () {

    player3.pauseVideo();

});
jQuery('#next').on('click', function () {
    player3.nextVideo()
});

jQuery('.thumbnail').on('click', function () {

    var url = jQuery(this).attr('data-video-id');

    player2.cueVideoById(url);

});

jQuery('.say-us-block').slick({
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
prevArrow: jQuery('.prev'),
nextArrow: jQuery('.next')
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

$('.multiple-items').slick({
  infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ],
});

    function buttonUp(){
         var valux = $('.sb-search-input').val(); 
            valux = $.trim(valux).length;
            if(valux !== 0){
                $('.sb-search-submit').css('z-index','99');
            } else{
                $('.sb-search-input').val(''); 
                $('.sb-search-submit').css('z-index','-999');
            }
    }
    
      $(document).ready(function($){
            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });
            function buttonUp(){
                var inputVal = $('.searchbox-input').val();
                inputVal = $.trim(inputVal).length;
                if( inputVal !== 0){
                    $('.searchbox-icon').css('display','none');
                } else {
                    $('.searchbox-input').val('');
                    $('.searchbox-icon').css('display','block');
                }
            }

$('.center-slick').slick({
  infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ],
  prevArrow: $('.prev-program'),
nextArrow: $('.next-program')
});

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
});

 $('.slick-slider').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: $('.prev-slider'),
      nextArrow: $('.next-slider'),
});

  $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  autoplay: true,
  autoplaySpeed: 500,
  arrows: false,
  focusOnSelect: true
});

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});