(function($) {

/*==========FOR SVG ==============*/
	svg4everybody({});


/*========== TRANSITION SCROLL ==============*/



/*========== MOBILE MENU ==============*/



 /*----------------------------------------
 	MODAL
 ----------------------------------------*/
	

// /*----------------------------------------
// 	SLIDER (slick
// ----------------------------------------*/

    //main-carousel
    $('.main-carousel__slider').slick({
        dots: true,
        infinite: true,
        speed: 300
	});

    //main-carousel
    $('.main-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300
	});

	//suppliers-slider
    $('.main-suppliers__slider').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1
    });

    // article-item__slider
    $('.article-item__slider').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
  		autoplaySpeed: 2000
	});

// /*----------------------------------------
// 	SLIDER ARTICLE
// ----------------------------------------*/


/*----------------------------------------
	VACANCY SLIDER TOGGLE
----------------------------------------*/

$('.vacancy__item-body').css('display', 'none');

$('.vacancy__item-head').on('click', function(event){
	event.preventDefault();
	$(this).parents('.vacancy__item').children().find('.vacancy__item-body').slideToggle('400');
	$(this).parents('.vacancy__item').children().find('.vacancy__head-link, .vacancy__head-title').toggleClass('clicked');
	$(this).toggleClass('no-margin');
});

// $('.toggle-accordion').on("click", function(event){
// 	event.preventDefault();
// 	$(this).toggleClass('clicked');
// 	$(this).siblings('.accordion').slideToggle('400');
// });

/*----------------------------------------
	HELP PAGE on lick effects
----------------------------------------*/

$('.help__left-title').on('click', function(event){
	event.preventDefault();
	$('.help__left-title').removeClass('active');
	$(this).toggleClass('active');
});


/*----------------------------------------
	SLIDER TOGGLE
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
