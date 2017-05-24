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
      $("body").css("overflow-y","hidden"); //запрещаем скролл

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
            $("body").css("overflow-y","auto"); //запрещаем скролл
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
    responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
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
    $(this).toggleClass('active');

  });

  //по клику на первый пункт "как сделать заказ?"
  $('.help__left-title_order').on('click', function(event) {
    event.preventDefault();
    //нахожу в соседних элементах класс .help__left-list и применяю метод slideToggle().
    $(this).siblings('.help__left-list').slideToggle('400');
  });

  /*----------------------------------------
     STORES Click effects
  ----------------------------------------*/

  $('.stores__type-select').on('click', function(event) {
    event.preventDefault();
    $('.stores__type-select').removeClass('active');
    $(this).toggleClass('active');
    $('.stores__online-list, .stores__retail-list').toggleClass('active');
    //добавить проверку на .active у кнопки,
    //чтобы нельзя было нажать уже нажатую кнопку
  });

  /*----------------------------------------
     HELP_2 (состояние пользователя) Click effects
  ----------------------------------------*/

  $('.help__left-list a').on('click', function(event) {
    event.preventDefault();
    $('.help__left-list a').removeClass('active');
    $(this).toggleClass('active');
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
     Hover effect on main nanigation
  ----------------------------------------*/

  $(function() {
    var $menu = $("#menu");
    $line = $("#line"),
      $indicator = true,
      $active = $menu.find(".active"),
      default_pos = $active.offset().left - $menu.offset().left,
      default_width = $active.outerWidth();

    $line.css({
      left: default_pos,
      width: default_width
    });

    $("#menu li.menu-hover").hover(function() {
      if (this === $active.get(0)) return;
      var self = $(this);
      var diff = self.offset().left - $menu.offset().left;
      $line.stop().animate({
        width: self.outerWidth(),
        left: diff
      }, 300);
    }, function() {
      if (this === $active.get(0)) return;
      $line.stop().animate({
        width: default_width,
        left: default_pos
      }, 300);
    });

  });

  /*----------------------------------------
     Help page slider animation
  ----------------------------------------*/

  $(document).ready(function() {
    // var $element;
    var topPos;
    var newHeight;
    var $mainNav = $('.menu-list');
    var $active;

    var $sliderLine = $('<div class="slider-line"></div>');
    $mainNav.append($sliderLine);

    initSliderLine();

    function initSliderLine() {
      $active = $mainNav.find('li.active');

      $sliderLine
        .height($active.height())
        .css('top', $active.position().top)
        .data('originalTop', $sliderLine.position().top)
        .data('originalHeight', $sliderLine.height());
    };

    function changeSliderPosition(target) {
      topPos = target.position().top;
      newHeight = target.height();

      $sliderLine.stop().animate({
        'top': topPos,
        'height': newHeight
      })
    };

    $mainNav.on({
      'click': function(evt) {
        var $this = $(this);
        changeSliderPosition($this);
      },
      'click': function(evt) {
        $sliderLine.stop().animate({
          'top': $sliderLine.data('originalTop'),
          'height': $sliderLine.data('originalHeight')
        })
      },
      'click': function(evt) {
        var $this = $(this);

        $mainNav.find('li').removeClass('active');
        $this.addClass('active');

        initSliderLine();
      }
    }, 'li');
  });

  /*----------------------------------------
     Help page slider animation
  ----------------------------------------*/
  /* Решение взято с:
  https://habrahabr.ru/post/189570/
  */
  var wrapper = $( ".file_upload" ),
         inp = wrapper.find( "input" ),
         btn = wrapper.find( "button" ),
         lbl = wrapper.find( "div" );
     btn.focus(function(){
         inp.focus()
     });
     // Crutches for the :focus style:
     inp.focus(function(){
         wrapper.addClass( "focus" );
     }).blur(function(){
         wrapper.removeClass( "focus" );
     });
     // Yep, it works!
    btn.add( lbl ).click(function(){
        inp.click();
    });
    // Crutches for the :focus style:
   btn.focus(function(){
       wrapper.addClass( "focus" );
   }).blur(function(){
       wrapper.removeClass( "focus" );
   });

   var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Файл загружен!" );
        }else
            btn.text( file_name );
    }).change();

    $( window ).resize(function(){
    $( ".file_upload input" ).triggerHandler( "change" );
});


  //________________________________________



})(jQuery);
