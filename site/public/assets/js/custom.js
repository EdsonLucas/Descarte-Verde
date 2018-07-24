/* 
 * Hornbill || Responsive App Landing Page.
 * Hornbill own jQuery file.
 * Copyright: ThemeShef;
 * Author profile: http://themeforest.net/user/themeshef
 */

;(function () {
    "use strict";

    var $window = $(window);
    var $document = $(document);
    var $body = $("body");

	/* preloader */
	$window.on('load', function() {
		$('body').addClass('loaded');
		$('.preloader-logo').delay(250).fadeOut('slow'); 
	});

	
	
    $document.ready(function () {
		 /* =============================
		 * Smooth scrolling nav
		 * ============================*/
		  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on( 'click' , function() {
			var checkLocation = location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname;
			if (checkLocation) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			  var checkTarget = target.length;
			  if (checkTarget) {
		        $('html, body').animate({
		          scrollTop: (target.offset().top - 52)
		        }, 1000, "easeInOutExpo");
		        return false;
		      }
		    }
		  });

		  // Closes responsive menu when a scroll trigger link is clicked
		  $('.js-scroll-trigger').on( 'click' , function() {
		    $('.navbar-collapse').collapse('hide');
		  });

		  // Activate scrollspy to add active class to navbar items on scroll
		  $('body').scrollspy({
		    target: '#mainNav',
		    offset: 54
		  });



		/* =============================
		 * Header ToggleClass
		 * ============================*/
	    var header = $(".hornbill-navbar");
	    $window.scroll(function() {
	        var scroll = $window.scrollTop();

	        if (scroll >= 80) {
	            header.addClass("background");
	        } else {
	            header.removeClass("background");
	        }
	    });


		/* =============================
		 * Swiper js
		 * ============================*/
		var swiper = new Swiper('.swiper-3d-gallery', {
			pagination: '.swiper-pagination',
			effect: 'coverflow',
			autoplay: {
		        delay: 2500,
		        disableOnInteraction: false,
		    },
			grabCursor: true,
			loop: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflow: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows : true
			}
		});

		var swiper = new Swiper('.phone-slide-gallery', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			spaceBetween: 0,
			slidesPerView: 1,
			grabCursor: true,
			centeredSlides: true,
			autoplay: {
		        delay: 2500,
		        disableOnInteraction: false,
		    },
			autoplayDisableOnInteraction: false,
		});

		var swiper = new Swiper('.swiper-gallery-normal', {
			slidesPerView: 4,
			slidesPerColumn: 1,
			grabCursor: true,
			autoplay: {
		        delay: 2500,
		        disableOnInteraction: false,
		    },
			paginationClickable: false,
			spaceBetween: 20,
			loop: true,
		    navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		    },
		    breakpoints: {
		        768: {
		          slidesPerView: 2
		        },
		        640: {
		          slidesPerView: 1,
		          spaceBetween: 20
		        }
		    }
		});

		var swiper = new Swiper('.swiper-reviews', {
			slidesPerView: 1,
			slidesPerColumn: 1,
			grabCursor: true,
			autoplay: {
		        delay: 2500,
		        disableOnInteraction: false,
		    },
			paginationClickable: false,
			spaceBetween: 0,
			loop: true,
		    navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		    },
		    pagination: {
		        el: '.swiper-pagination',
		    },
		});
		

		/* =============================
		 * Modal Video js
		 * ============================*/
		 $(".js-video-button").modalVideo();


		

		/* =============================
		 * Circle Progress js
		 * ============================*/
		var circle_exits = $("#circle_lists").length;
		var circleElement = document.querySelector('#circle_lists');
		 if (circle_exits) {
		 	var i = 0;
			var waypoint = new Waypoint({
			  element: circleElement,
			  handler: function() {
			  	i++;
			  	if (i == 1) {
			  		$('.circle').circleProgress({
						size: 150,
						thickness: 2,
						fill:{ color: "#ffffff"}
					});
					
					$('.first.circle').circleProgress({
					}).on('circle-animation-progress', function(event, progress) {
						$(this).find('strong').html(Math.round(85 * progress) + '<i>%</i>');
					});
					
					$('.second.circle').circleProgress({
					}).on('circle-animation-progress', function(event, progress) {
						$(this).find('strong').html(Math.round(65 * progress) + '<i>%</i>');
					});
					
					$('.third.circle').circleProgress({
					}).on('circle-animation-progress', function(event, progress) {
						$(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
					});
					
					$('.fourth.circle').circleProgress({
					}).on('circle-animation-progress', function(event, progress) {
						$(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
					});
					
					$('.fifth.circle').circleProgress({
					}).on('circle-animation-progress', function(event, progress) {
						$(this).find('strong').html(Math.round(100 * progress) + '<i>k</i>');
					});
			  	}
			  },
			   offset: '60%'
			});
		} // end if
		




		/* =============================
		 * ScrollReveal Animation js
		 * ============================*/
		window.sr = ScrollReveal({ reset: false, mobile: false });
		sr.reveal('.navbar', {
			duration: 1000,
			origin: 'bottom'
		});
		sr.reveal('.fadeIn', {
			duration: 1200,
			distance: '30px',
			origin: 'bottom'
		});
		sr.reveal('.fadeInFast', {
			duration: 800,
			distance: '0px',
			origin: 'bottom',
			scale: 1
		});
		sr.reveal('.fadeInLeft', {
			duration: 1200,
			origin: 'left',
			distance: '60px',
			scale: 0.9
		});
		sr.reveal('.fadeInRight', {
			duration: 1200,
			origin: 'right',
			distance: '60px',
			scale: 0.9
		});
		sr.reveal('.fadeInUp', {
			duration: 1200,
			origin: 'bottom',
			distance: '60px',
			scale: 1.2
		});
		sr.reveal('.fadeInLeftFast', {
			duration: 1000,
			origin: 'left',
			distance: '60px',
			scale: 0.9
		});
		sr.reveal('.fadeInRightFast', {
			duration: 1000,
			origin: 'right',
			distance: '60px',
			scale: 0.9
		});
		sr.reveal('.fadeInUpFast', {
			duration: 1000,
			origin: 'bottom',
			distance: '60px',
			scale: 1.2
		});
		sr.reveal('.fadeInDown', {
			duration: 1500,
			origin: 'left',
			scale: 1.5
		});
		sr.reveal('.single-member', {
			duration: 1200,
			origin: 'bottom',
			scale: 0.8,
			reset: true
		});
		sr.reveal('.feature-phone', {
			duration: 1200,
			distance: '100px',
			origin: 'bottom'
		});

		
    }); /*  End of document.ready */
	
	
		/*==============================================
		 BootStrap Tooltip activate
		 ===============================================*/
		$('[data-toggle="tooltip"]').tooltip(); 
		var hoverElement = document.querySelectorAll('.hover');
        hoverElement.forEach( function(el){
            el.addEventListener('mouseenter' , function(){
                this.classList.add('flip');
            })
            el.addEventListener('mouseleave' , function(){
                this.classList.remove('flip');
            });
        } );


})(jQuery);