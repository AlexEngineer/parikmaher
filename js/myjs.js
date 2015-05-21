$(document).ready(function(){
	



	menuToggler.init();
	$(".owl-carousel2").owlCarousel({
  			nav:true,
  			items:1
  		});
  		$(document).ready(function(){
  			$(".owl-carousel").owlCarousel({
  				nav:true,
  				items:1
  			});
		});
  		$(".owl-carousel-2").owlCarousel({
  			nav:true,
  			items:4
  		});

	$("#phone").mask("+7 ( 999 ) 999 - 99 - 99");
	$(".left-nav").delay(1000).animate({
		width: "30%"
	}, 300);
	$('.left-nav .nav').delay(1000).animate({opacity: '1'}, 300);

	$('.modal-show').click(function (event) {
		event.preventDefault();
		$('#overlay').fadeIn(200,
			function () {
				$('#modal_form').css('display', 'block').animate({opacity: 1}, 200);
			});
	});
	$('#modal_close, #overlay').click(function () {
		$('#modal_form').animate({opacity: 0, top: '30%'}, 200,
			function () {
				$(this).css('display', 'none');
				$('#overlay').fadeOut(200);
			}
		);
	});
	(function($) {
		$(function() {
	  $('.master').click(function() {
	    $('body,html').animate({scrollTop:1850},1000);
	    return false;
	  })
	  $('.price').click(function() {
	    $('body,html').animate({scrollTop:3930},1000);
	    return false;
	  })
	  $('.portfolio-btn').click(function() {
	    $('body,html').animate({scrollTop:7150},1000);
	    return false;
	  })
	   $('.client-com').click(function() {
	    $('body,html').animate({scrollTop:8650},1000);
	    return false;
	  })
	  $('.contact').click(function() {
	    $('body,html').animate({scrollTop:9550},1000);
	    return false;
	  })
	})
	})(jQuery);
var $forPhotosG = $('.hide-block'),
         $head_b = $('.buttom');
     $('.buttom').click(function () {
         $forPhotosG.finish();
         var vis = $('.hide-block').is(":visible"),
             text = vis ? 'Показать стоимости услуг' : 'Скрыть стоимости услуг';
         $head_b.text(text);
         $forPhotosG.slideToggle("slow");
         return false;
     });
	var onMapMouseleaveHandler = function (event) {
    var that = $(this);

    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }

  var onMapClickHandler = function (event) {
    var that = $(this);

    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);

    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");

    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  }

  // Enable map zooming with mouse scroll when the user clicks the map
  $('.map').on('click', onMapClickHandler);
	/*$("div.portfolio-content").append("<span></span>");
	$("div.portfolio-content").hover(function () {
		$(this).children("span").fadeIn(200);
	}, function () {
		$(this).children("span").fadeOut(100);
	});*/

jQuery(function(){
	jQuery(".portfolio a").lightBox({
	    overlayBgColor: '#333',
	    overlayOpacity: 0.6,
	    imageLoading: 'images/lightbox-ico-loading.gif',
	    imageBtnClose: 'images/lightbox-btn-close.gif',
	    imageBtnPrev: 'images/lightbox-btn-prev.gif',
	    imageBtnNext: 'images/lightbox-btn-next.gif',
	    containerResizeSpeed: 350,
	    txtImage: 'Изображение',
	    txtOf: 'из'
	   });
	});
 $(window).scroll(function(){
	if ( $(this).scrollTop() > 3600){
	 $('.show-g').animate({opacity:1},1000);
		} else if ($(this).scrollTop() > 4500){
	     $('.show-h').animate({opacity:1},1000);
	     }
	   });
  $(window).scroll(function(){
	if ( $(this).scrollTop() > 4150){
	 $('.show-h').animate({opacity:1},1000);
		} else{
	     
	     }
	   });
  $(window).scroll(function(){
	if ( $(this).scrollTop() > 4780){
	 $('.show-k').animate({opacity:1},1000);
		} else{
	     
	     }
	   });
});
jQuery(function(){
	    jQuery(".portfolio a").lightBox();
	});
var menuToggler = (function () {
	return {
		init: function() {
			$('body').on('click', '.menu-toggle-btn', function(){
				console.log($('.left-nav').width());
				if ($('.left-nav').width() >= 499) {
					$('.left-nav').animate({width: "55px"}, 100);
					$('.left-nav .nav').animate({opacity: '0'}, 300);
				} else {
					$('.left-nav').animate({width: "30%"}, 100);
					$('.left-nav .nav').animate({opacity: '1'}, 300);
				}
				return false;
			});

			$(window).scroll(function () {
				if ($(this).scrollTop() > 300) {
					$('.left-nav .nav').animate({opacity: '0'}, 10);
					$(".left-nav").animate({
						width: "55px"
					}, 10);
				}
			});
		}
	}
})();