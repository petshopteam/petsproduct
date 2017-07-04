(function ($) {

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

    open_modal.click(function(event) { // лoвим клик пo ссылке с клaссoм open_modal
      event.preventDefault(); // вырубaем стaндaртнoе пoведение
      modal.css("display", "none"); //закрывает остальные модальные окна
      var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
      overlay.fadeIn(400, //пoкaзывaем oверлэй
        function() { // пoсле oкoнчaния пoкaзывaния oверлэя
          $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
            .css('display', 'block')
            .animate({
              opacity: 1
            }, 200); // плaвнo пoкaзывaем
        });
    });

    close.click(function() { // лoвим клик пo крестику или oверлэю
      modal // все мoдaльные oкнa
        .animate({
            opacity: 0
          }, 200, // плaвнo прячем
          function() { // пoсле этoгo
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

    open_modal_dark.click(function(event) { // лoвим клик пo ссылке с клaссoм open_modal
      event.preventDefault(); // вырубaем стaндaртнoе пoведение
      modal.css("display", "none"); //прячем старые модалки
      overlay.css("display", "none"); //прячем старые оверлеи
      $("body").css("overflow-y", "hidden"); //запрещаем скролл

      var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
      overlay_dark.fadeIn(400, //пoкaзывaем oверлэй
        function() { // пoсле oкoнчaния пoкaзывaния oверлэя
          $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
            .css('display', 'block')
            .animate({
              opacity: 1
            }, 200); // плaвнo пoкaзывaем
        });
    });

    close.click(function() { // лoвим клик пo крестику или oверлэю
      modal // все мoдaльные oкнa
        .animate({
            opacity: 0
          }, 200, // плaвнo прячем
          function() { // пoсле этoгo
            $(this).css('display', 'none');
            overlay_dark.fadeOut(400); // прячем пoдлoжку
            $("body").css("overflow-y", "auto"); //запрещаем скролл
          }
        );
    });
  });


  // /*----------------------------------------
  //  SLIDER (slick)
  // ----------------------------------------*/

  //main-carousel
  $('.main-carousel__slider').slick({
    dots: true,
    infinite: true,
    speed: 300
  });

  //suppliers-slider
  $('.main-suppliers__slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    // responsive:
    responsive: [{
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  // article-item__slider
  $('.article-item__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear'
  });

  // modal-article__slider
  $('.modal-article__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  /*----------------------------------------
   SLIDER ARTICLE
   ----------------------------------------*/


  /*----------------------------------------
   VACANCY SLIDER TOGGLE
   ----------------------------------------*/

  $('.vacancy__item-body').css('display', 'none');
  $('.vacancy__item-body.active').css('display', 'block');

  $('.vacancy__item-head').on('click', function(event) {
    event.preventDefault();
    $(this).parents('.vacancy__item').children().find('.vacancy__item-body').slideToggle('400');
    $(this).parents('.vacancy__item').children().find('.vacancy__item-body').toggleClass('active');
    $(this).parents('.vacancy__item').children().find('.vacancy__head-link, .vacancy__head-title').toggleClass('clicked');
    $(this).toggleClass('no-margin');
  });

  /*----------------------------------------
   REQUEST SLIDER TOGGLE
   ----------------------------------------*/

  $('.request__hidden-block').css('display', 'none');

  $('.request__hidden-subtitle').on('click', function(event) {
    event.preventDefault();
    $('.request__hidden-block').slideToggle('400');
    $('.request__subtitle_arrow').toggleClass('clicked');
    $('.request__hidden-subtitle').toggleClass('clicked');
  });


  /*----------------------------------------
   FILTERS (mobile) SLIDER TOGGLE
   ----------------------------------------*/

  $('.brand-filter__form_small').css('display', 'none');
  $('.pet-filter__form_small').css('display', 'none');

  $('.brand-filter_small .brand-filter__title, .pet-filter_small .pet-filter__title').on('click', function(event) {
    event.preventDefault();
    $(this).siblings('.brand-filter__form_small, .pet-filter__form_small').slideToggle('400');
    $(this).toggleClass('clicked');
    $(this).parents('.brand-filter_small').toggleClass('clicked');
    $(this).parents('.pet-filter_small').toggleClass('clicked');
    $(this).parents('.pet-filter_clear').removeClass('clicked');
  });


  /*----------------------------------------
   Topline login on click effects
   ----------------------------------------*/
  // Big login
  $('.main-topline__user-login').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('entered');
  });
  //Small login
  $('.main-topline__user-login_small').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('entered');
  });

  /*----------------------------------------
   HELP PAGE on click effects
   ----------------------------------------*/

  //скрываю список "как сделать заказ" по умолчанию
  $('.help__left-list').css('display', 'none');

  //по клику на заголовок:
  $('.help__left-title').on('click', function(event) {
    event.preventDefault();
    //убираю класс active всем остальным заголовкам
    $('.help__left-title').removeClass('active');
    //и добавляю его только тому, на который кликнули
    $(this).addClass('active');

    // Проверка на наличие active у "как сделать заказ"
    if ($(".help__left-title_order").hasClass("active")) {
      return false;
    } else {
      $(this).siblings('.help__left-list').slideUp('400');
    }

  });


  //по клику на первый пункт "как сделать заказ?"
  $('.help__left-title_order').on('click', function(event) {
    event.preventDefault();
    //нахожу в соседних элементах класс .help__left-list и применяю метод slideToggle().
    $(this).siblings('.help__left-list').slideDown('400');
  });

  /*----------------------------------------
   STORES Click effects
   ----------------------------------------*/

  // по клику на retail
  $('.stores__type-select_retail').on('click', function(event) {
    event.preventDefault();
    $('.stores__type-select').removeClass('active');
    $(this).toggleClass('active');
    $('.stores__search').css('display', 'block');
    $('.stores__online-list').removeClass('active');
    $('.stores__retail-list').addClass('active');
  });

  // по клику на online
  $('.stores__type-select_online').on('click', function(event) {
    event.preventDefault();
    $('.stores__type-select').removeClass('active');
    $(this).toggleClass('active');
    $('.stores__search').css('display', 'none');
    $('.stores__retail-list').removeClass('active');
    $('.stores__online-list').addClass('active');
  });

  /*----------------------------------------
   HELP_2 (состояние пользователя) Click effects
   ----------------------------------------*/

  // $('.help__left-list').on('click', function (event) {
  //   event.preventDefault();
  //   $('.help__left-list').removeClass('active');
  //   $(this).toggleClass('active');
  // });


  // hidden navigation

  $('.help__left-title_order').on('click', function(event) {
    event.preventDefault();
    $(this).children('.help__left-list').slideToggle('400');
  });


  /*----------------------------------------
   Topline city select modal styling
   ----------------------------------------*/

  $('select.modal-change-city__input').SumoSelect({
    search: true,
    searchText: 'Введите название города'
  });

  //________________________________________


  /*----------------------------------------
   jQuery.sumoselect plugin (form styling)
   ----------------------------------------*/

  $('select').SumoSelect();

  //________________________________________

  /*----------------------------------------
   Отменяем действие слайдера на странице article_2.html на мобильных
   ----------------------------------------*/

$(function(){

  function screen_check(){
    var target = $('.article-item__popup-link');
    var targets = document.querySelectorAll('.article-item__popup-link');

    // for (var i = 0; i < targets.length; i++) {
    //   $(targets[i]).removeAttr('class');
    //   $(targets[i]).removeAttr('href');
    //   $(targets[i]).css('background', 'red');
    // }

    // if ($(window).width() <= 768) {
    //     $(targets).css('display', 'none');
    // } else {
    //   return;
    // }
  }
  screen_check();
  $(window).on('resize', function(){
    screen_check();
  });

});

  //________________________________________

  $('select').SumoSelect();

  //________________________________________

  /*----------------------------------------
   Hover effect on main navigation
   ----------------------------------------*/


  // $(function () {
  //   var $menu = $("#menu");
  //   $line = $("#line"),
  //       $indicator = true,
  //       $active = $menu.find(".active"),
  //       default_pos = $active.offset().left - $menu.offset().left,
  //       default_width = $active.outerWidth();
  //
  //   $line.css({
  //     left: default_pos,
  //     width: default_width
  //   });
  //
  //   $("#menu li.menu-hover").hover(function () {
  //     if (this === $active.get(0)) return;
  //     var self = $(this);
  //     var diff = self.offset().left - $menu.offset().left;
  //     $line.stop().animate({
  //       width: self.outerWidth(),
  //       left: diff
  //     }, 300);
  //   }, function () {
  //     if (this === $active.get(0)) return;
  //     $line.stop().animate({
  //       width: default_width,
  //       left: default_pos
  //     }, 300);
  //   });
  // });

  // пересчитать показатели
  // $(window).resize(function () {
  //   var $menu = $("#menu");
  //   $line = $("#line"),
  //       $indicator = true,
  //       $active = $menu.find(".active"),
  //       default_pos = $active.offset().left - $menu.offset().left,
  //       default_width = $active.outerWidth();
  //
  //   $line.css({
  //     left: default_pos,
  //     width: default_width
  //   });
  //
  //   $("#menu li.menu-hover").hover(function () {
  //     if (this === $active.get(0)) return;
  //     var self = $(this);
  //     var diff = self.offset().left - $menu.offset().left;
  //     $line.stop().animate({
  //       width: self.outerWidth(),
  //       left: diff
  //     }, 300);
  //   }, function () {
  //     if (this === $active.get(0)) return;
  //     $line.stop().animate({
  //       width: default_width,
  //       left: default_pos
  //     }, 300);
  //   });
  // });


  /*----------------------------------------
   Help page slider animation
   ----------------------------------------*/

  // $(document).ready(function () {
  //   // var $element;
  //   var topPos;
  //   var newHeight;
  //   var $mainNav = $('.menu-list');
  //   var $active;
  //
  //   var $sliderLine = $('<div class="slider-line"></div>');
  //   $mainNav.append($sliderLine);
  //
  //   initSliderLine();
  //
  //   function initSliderLine() {
  //     $active = $mainNav.find('li.active');
  //
  //     $sliderLine
  //         .height($active.height())
  //         .css('top', $active.position().top)
  //         .data('originalTop', $sliderLine.position().top)
  //         .data('originalHeight', $sliderLine.height());
  //   };
  //
  //   function changeSliderPosition(target) {
  //     topPos = target.position().top;
  //     newHeight = target.height();
  //
  //     $sliderLine.stop().animate({
  //       'top': topPos,
  //       'height': newHeight
  //     })
  //   };
  //
  //   $mainNav.on({
  //     'click': function (evt) {
  //       var $this = $(this);
  //       changeSliderPosition($this);
  //     },
  //     'click': function (evt) {
  //       $sliderLine.stop().animate({
  //         'top': $sliderLine.data('originalTop'),
  //         'height': $sliderLine.data('originalHeight')
  //       })
  //     },
  //     'click': function (evt) {
  //       var $this = $(this);
  //
  //       $mainNav.find('li').removeClass('active');
  //       $this.addClass('active');
  //
  //       initSliderLine();
  //     }
  //   }, 'li');
  // });


  /*----------------------------------------
   File upload styling
   ----------------------------------------*/
  /* Решение взято с:
   https://habrahabr.ru/post/189570/
   */
  var wrapper = $(".file_upload"),
    inp = wrapper.find("input"),
    btn = wrapper.find("button"),
    lbl = wrapper.find("div");
  btn.focus(function() {
    inp.focus()
  });
  // Crutches for the :focus style:
  inp.focus(function() {
    wrapper.addClass("focus");
  }).blur(function() {
    wrapper.removeClass("focus");
  });
  // Yep, it works!
  btn.add(lbl).click(function() {
    inp.click();
  });
  // Crutches for the :focus style:
  btn.focus(function() {
    wrapper.addClass("focus");
  }).blur(function() {
    wrapper.removeClass("focus");
  });

  var file_api = (window.File && window.FileReader && window.FileList && window.Blob) ? true : false;

  inp.change(function() {
    var file_name;
    if (file_api && inp[0].files[0])
      file_name = inp[0].files[0].name;
    else
      file_name = inp.val().replace("C:\\fakepath\\", '');

    if (!file_name.length)
      return;

    if (lbl.is(":visible")) {
      lbl.text(file_name);
      btn.text("Файл загружен!");
    } else
      btn.text(file_name);
  }).change();

  $(window).resize(function() {
    $(".file_upload input").triggerHandler("change");
  });

  /*----------------------------------------
   Contact map script
   ----------------------------------------*/

  google.maps.event.addDomListener(window, 'load', init);
  var map, markersArray = [];

  function bindInfoWindow(marker, map, location) {
    google.maps.event.addListener(marker, 'click', function() {
      function close(location) {
        location.ib.close();
        location.infoWindowVisible = false;
        location.ib = null;
      }

      if (location.infoWindowVisible === true) {
        close(location);
      } else {
        markersArray.forEach(function(loc, index) {
          if (loc.ib && loc.ib !== null) {
            close(loc);
          }
        });

        var boxText = document.createElement('div');
        boxText.style.cssText = 'background: #fff;';
        boxText.classList.add('md-whiteframe-2dp');

        function buildPieces(location, el, part, icon) {
          if (location[part] === '') {
            return '';
          } else if (location.iw[part]) {
            switch (el) {
              case 'photo':
                if (location.photo) {
                  return '<div class="iw-photo" style="background-image: url(' + location.photo + ');"></div>';
                } else {
                  return '';
                }
                break;
              case 'iw-toolbar':
                return '<div class="iw-toolbar"><h3 class="md-subhead">' + location.title + '</h3></div>';
                break;
              case 'div':
                switch (part) {
                  case 'email':
                    return '<div class="iw-details"><i class="material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span><a href="mailto:' + location.email + '" target="_blank">' + location.email + '</a></span></div>';
                    break;
                  case 'web':
                    return '<div class="iw-details"><i class="material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span><a href="' + location.web + '" target="_blank">' + location.web_formatted + '</a></span></div>';
                    break;
                  case 'desc':
                    return '<label class="iw-desc" for="cb_details"><input type="checkbox" id="cb_details"/><h3 class="iw-x-details">Details</h3><i class="material-icons toggle-open-details"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><p class="iw-x-details">' + location.desc + '</p></label>';
                    break;
                  default:
                    return '<div class="iw-details"><i class="material-icons"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span>' + location[part] + '</span></div>';
                    break;
                }
                break;
              case 'open_hours':
                var items = '';
                if (location.open_hours.length > 0) {
                  for (var i = 0; i < location.open_hours.length; ++i) {
                    if (i !== 0) {
                      items += '<li><strong>' + location.open_hours[i].day + '</strong><strong>' + location.open_hours[i].hours + '</strong></li>';
                    }
                    var first = '<li><label for="cb_hours"><input type="checkbox" id="cb_hours"/><strong>' + location.open_hours[0].day + '</strong><strong>' + location.open_hours[0].hours + '</strong><i class="material-icons toggle-open-hours"><img src="//cdn.mapkit.io/v1/icons/keyboard_arrow_down.svg"/></i><ul>' + items + '</ul></label></li>';
                  }
                  return '<div class="iw-list"><i class="material-icons first-material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><ul>' + first + '</ul></div>';
                } else {
                  return '';
                }
                break;
            }
          } else {
            return '';
          }
        }

        boxText.innerHTML =
          buildPieces(location, 'photo', 'photo', '') +
          buildPieces(location, 'iw-toolbar', 'title', '') +
          buildPieces(location, 'div', 'address', 'location_on') +
          buildPieces(location, 'div', 'web', 'public') +
          buildPieces(location, 'div', 'email', 'email') +
          buildPieces(location, 'div', 'tel', 'phone') +
          buildPieces(location, 'div', 'int_tel', 'phone') +
          buildPieces(location, 'open_hours', 'open_hours', 'access_time') +
          buildPieces(location, 'div', 'desc', 'keyboard_arrow_down');

        var myOptions = {
          alignBottom: true,
          content: boxText,
          disableAutoPan: true,
          maxWidth: 0,
          pixelOffset: new google.maps.Size(-140, -40),
          zIndex: null,
          boxStyle: {
            opacity: 1,
            width: '280px'
          },
          closeBoxMargin: '0px 0px 0px 0px',
          infoBoxClearance: new google.maps.Size(1, 1),
          isHidden: false,
          pane: 'floatPane',
          enableEventPropagation: false
        };

        location.ib = new InfoBox(myOptions);
        location.ib.open(map, marker);
        location.infoWindowVisible = true;
      }
    });
  }

  function init() {
    var mapOptions = {
      center: new google.maps.LatLng(59.96815487833263, 30.301136844458032),
      zoom: 15,
      gestureHandling: 'auto',
      fullscreenControl: false,
      zoomControl: false,
      disableDoubleClickZoom: false,
      mapTypeControl: false,
      scaleControl: true,
      scrollwheel: false,
      streetViewControl: false,
      draggable: true,
      clickableIcons: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#444444"
          }]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "color": "#f2f2f2"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{
              "saturation": -100
            },
            {
              "lightness": 45
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
              "color": "#767676"
            },
            {
              "visibility": "on"
            }
          ]
        }
      ]
    }
    var mapElement = document.getElementById('mapkit-7181');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [{
      "title": "ul. Vsevoloda Vishnevskogo, 12а",
      "address": "ul. Vsevoloda Vishnevskogo, 12а, Sankt-Peterburg, Russia, 197136",
      "desc": "",
      "tel": "",
      "int_tel": "",
      "email": "",
      "web": "",
      "web_formatted": "",
      "open": "",
      "time": "",
      "lat": 59.9681334,
      "lng": 30.29933440000002,
      "vicinity": "Sankt-Peterburg",
      "open_hours": "",
      "marker": {
        "url": "images/icons/map-marker.png",
        "scaledSize": {
          "width": 40,
          "height": 49,
          "f": "px",
          "b": "px"
        },
        "origin": {
          "x": 0,
          "y": 0
        },
        "anchor": {
          "x": 12,
          "y": 42
        }
      },
      "iw": {
        "address": true,
        "desc": true,
        "email": true,
        "enable": true,
        "int_tel": true,
        "open": true,
        "open_hours": true,
        "photo": true,
        "tel": true,
        "title": true,
        "web": true
      }
    }];
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        icon: locations[i].marker,
        position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
        map: map,
        title: locations[i].title,
        address: locations[i].address,
        desc: locations[i].desc,
        tel: locations[i].tel,
        int_tel: locations[i].int_tel,
        vicinity: locations[i].vicinity,
        open: locations[i].open,
        open_hours: locations[i].open_hours,
        photo: locations[i].photo,
        time: locations[i].time,
        email: locations[i].email,
        web: locations[i].web,
        iw: locations[i].iw
      });
      markersArray.push(marker);

      if (locations[i].iw.enable === true) {
        bindInfoWindow(marker, map, locations[i]);
      }
    }
  }


  //________________________________________


})(jQuery);
