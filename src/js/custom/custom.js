(function($) {

/*==========FOR SVG ==============*/
	svg4everybody({});


/*========== TRANSITION SCROLL ==============*/

	//  $('.scroll').on("click", function(e){
	// 		e.preventDefault();
	// 		var anchor = $(this);
	// 		$('html, body').stop().animate({
	// 			 scrollTop: $(anchor.attr('href')).offset().top
	// 		}, 1000);
	//  });


/*========== MOBILE MENU ==============*/


	// var openMenu = $('.open-top-menu'),
	// 	closeMenu = $('.close-top-menu'),
	// 	menu = $('.top-menu');
	// openMenu.on('click', function(event) {
	// 	event.preventDefault();
	// 	menu.addClass('open');
	// 	$('body').addClass('menu-open');
	// });
	// closeMenu.on('click', function(event) {
	// 	event.preventDefault();
	// 	menu.removeClass('open');
	// 	$('body').removeClass('menu-open');
	// });
	//
	// var bottomMenu = $('.open-bottom-menu'),
	// 	closeBottom = $('.close-bottom-menu'),
	// 	menuBottom = $('.menu-bottom');
	// bottomMenu.on('click', function(event) {
	// 	event.preventDefault();
	// 	menuBottom.addClass('open');
	// 	$('body').addClass('menu-open');
	// });
	// closeBottom.on('click', function(event) {
	// 	event.preventDefault();
	// 	menuBottom.removeClass('open');
	// 	$('body').removeClass('menu-open');
	// });


 /*----------------------------------------
 	MODAL
 ----------------------------------------*/
	// var trigger = $('.gp-trigger'),
	// 		modal = $('.gp-modal'),
	// 		overlay = $('.gp-overlay'),
	// 		close = $ ('.gp-close');
	//
	// function removeModal(e){
	// 	e.preventDefault();
	// 	modal.removeClass('gp-show')
	// 	overlay.removeClass('opened');
	// 	$('body').removeClass('open-modal');
	// 	setTimeout(function() {
	// 		$('.modals-wrap').removeClass('open-modal');
	// 	}, 400);
	//
	// };
	//
	// function openModal(e){
	// 	e.preventDefault();
	// 	$('.modals-wrap').addClass('open-modal');
	// 	$('body').addClass('open-modal');
	//
	// 	var id = $(this).attr('data-modal');
	// 	$('#' + id + '.gp-modal').toggleClass('gp-show').find('.gp-overlay').addClass('opened');
	//
	// 	//условие для modal-thanks
	// 	if ($('#modal-thanks').hasClass('gp-show')) {
	// 		setTimeout(function() {
	// 			modal.removeClass('gp-show')
	// 			overlay.removeClass('opened');
	// 			$('body').removeClass('open-modal');
	// 			setTimeout(function() {
	// 				$('.modals-wrap').removeClass('open-modal');
	// 			}, 400);
	// 		}, 3000);
	// 	}
	//
	// };
	//
	// trigger.on('click', openModal);
	// close.on('click',removeModal);
	// overlay.on('click',removeModal);
	//
	// $(document).keyup(function(event){
	// 	if (event.keyCode == 27) {
	// 		modal.removeClass('gp-show')
	// 		overlay.removeClass('opened');
	// 		$('body').removeClass('open-modal');
	// 		setTimeout(function() {
	// 			$('.modals-wrap').removeClass('open-modal');
	// 		}, 400);
	// 	}
	// });

// /*----------------------------------------
// 	SLIDER
// ----------------------------------------*/
// 	$('.carousel').slick({
// 		infinite: false,
// 		dots: true,
// 		arrows: false,
// 		slidesToShow: 1,
// 		slidesToScroll: 1
// 	});
//
// 	$('.carousel-photos').slick({
// 		infinite: false,
// 		dots: false,
// 		arrows: true,
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 		focusOnSelect: true,
// 		initialSlide: 1,
// 		centerMode: true,
// 		variableWidth: true,
// 		appendArrows: $('.arrows-box'),
// 		 responsive: [
//     {
//       breakpoint: 980,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
// 				centerMode: false,
// 				variableWidth: false,
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
// 				centerMode: false,
// 				variableWidth: false,
// 				dots: true,
// 				arrows: false,
//       }
//     },
//   ]
// });

// /*----------------------------------------
// 	SLIDER ARTICLE
// ----------------------------------------*/

// $('.section-slider').slick({
// 		infinite: false,
// 		dots: true,
// 		arrows: false,
// 		slidesToShow: 1,
// 		slidesToScroll: 1
// });
//
// $('.section10-img').slick({
// 		infinite: false,
// 		dots: true,
// 		arrows: false,
// 		slidesToShow: 1,
// 		slidesToScroll: 1
// });
/*----------------------------------------
	SIDEBAR ACCORDION
----------------------------------------*/
// $('.toggle-accordion').on("click", function(event){
// 	event.preventDefault();
// 	$(this).toggleClass('clicked');
// 	$(this).siblings('.accordion').slideToggle('400');
// });
/*----------------------------------------
	SIDEBAR ACCORDION CITY
----------------------------------------*/
// $('.toggle-accordion-bottom').on("click", function(event){
// 	event.preventDefault();
// 	$(this).toggleClass('clicked');
// 	$('.accordion-bottom').slideToggle('400');
// 	$("icon-angel-down").toggleClass("icon-angel-up");
// 	if ($('.toggle-accordion-bottom').hasClass('clicked')) {
// 		$(this).html("Скрыть все города <i class='icon-angel-down'></i>");
// 	} else {
// 		$(this).html("Показать все города <i class='icon-angel-down'></i>");
// 	}
// });

/*----------------------------------------
	FANCYBOX
----------------------------------------*/
// jQuery(document).ready(function($) {
// 	$('.fancybox').fancybox({
// 		openEffect  : 'fade',
// 		closeEffect : 'fade',
// 		prevEffect : 'fade',
// 		padding: 0,
// 		closeClick:false,
// 		tpl: {
// 			closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><span class="icon-menu-close">Закрыть</span></a>',
// 			next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><i class="icon icon-next"></i></a>',
// 			prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><i class="icon icon-prev"></i></a>'
// 		},
// 		helpers : {
// 			title : {
// 				type : 'inside'
// 			},
// 			overlay : {
// 				css : {
// 					'background' : '#eeeeee'
// 				}
// 			},
// 		}
// 	});
//
// 		document.addEventListener('touchstart', function(event) {
// 		start = event.changedTouches[0].pageX;
// 	}, false);
//
// 	document.addEventListener('touchend', function(event) {
// 		end = event.changedTouches[0].pageX;
// 		if (start > (end + 100)) {
// 			$('.fancybox-prev').trigger('click');
// 		}else{
// 			$('.fancybox-next').trigger('click');
// 		}
// 	}, false);
// });


/*----------------------------------------
	FLEXMENU
----------------------------------------*/
// $('.flexmenu').flexMenu();


/*========== SEARCH ==============*/
	// var searchToogle = $('#toggle-search'),
	// 		searchForm= $('#search-form');
	//
	// 		searchToogle.on('click', function(e) {
	// 			searchForm.addClass('active');
	// 			setTimeout(function() {
	// 				$('#toggle-search').attr('type','submit');
	// 			}, 300 );
	//
	// 		});
	//
	// $(document).mouseup(function (e) {
	// 			searchForm= $('#search-form');
	// 		if (searchForm.has(e.target).length === 0){
	// 			searchForm.removeClass('active');
	// 			searchToogle.attr('type','button');
	// 		}
	// });


/*========== VALIDATE ==============*/

// $('#comment-form').validate({
// 	rules: {
// 		REVIEW_AUTHOR: {
// 			required: true
// 		},
// 		REVIEW_TEXT: {
// 			required: true
// 		},
// 		accept: {
// 			required: true
// 		}
// 	},
// 	messages:{
// 		REVIEW_AUTHOR: {
// 			required : "Заполните это поле"
// 		},
// 		REVIEW_TEXT: {
// 			required: "Заполните это поле"
// 		},
// 		accept: {
// 			required: ""
// 		}
// 	}
// });
//
// $('#sub-form').validate({
// 	rules: {
// 		email_btn: {
// 			required: true,
// 			email: true
// 		}
// 	},
// 	messages:{
// 		email_btn: {
// 			required : "Введите e-mail",
// 			email: "Введите e-mail"
// 		}
// 	}
// });


})(jQuery);
