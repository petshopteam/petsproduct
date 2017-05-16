(function($) {

/*==========FOR SVG ==============*/
	svg4everybody({});



 /*----------------------------------------
 	MODAL
 ----------------------------------------*/

 	// modal window show/hide

	$(document).ready(function() { // зaпускaем скрипт пoсле зaгрузки всех элементoв
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         modal.css("display", "none"); //закрывает остальные модальные окна
         var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay.fadeIn(400, //пoкaзывaем oверлэй
             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                     .css('display', 'block') 
                     .animate({opacity: 1}, 200); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
             .animate({opacity: 0}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
    	 });
	});

 	// modal window show/hide (dark)

	$(document).ready(function() { // зaпускaем скрипт пoсле зaгрузки всех элементoв
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay');
    var overlay_dark = $('#overlay_dark'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal_dark = $('.open_modal_dark'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay_dark'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

     open_modal_dark.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         modal.css("display", "none"); //прячем старые модалки
         overlay.css("display", "none"); //прячем старые оверлеи

         var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay_dark.fadeIn(400, //пoкaзывaем oверлэй
             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                     .css('display', 'block') 
                     .animate({opacity: 1}, 200); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
             .animate({opacity: 0}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay_dark.fadeOut(400); // прячем пoдлoжку
                 }
             );
    	 });
	});
	

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
  		autoplaySpeed: 2000,
  		fade: true,
  		cssEase: 'linear'
	});

	// modal-article__slider
	$('.modal-article__slider').slick({
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

/*----------------------------------------
   HELP PAGE on click effects
----------------------------------------*/
    $('.main-topline__user-login').on('click', function(event){
        event.preventDefault();
        $(this).toggleClass('entered');
    });

/*----------------------------------------
	HELP PAGE on click effects
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
