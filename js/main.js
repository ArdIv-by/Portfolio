$(function () {




  $('.burger').on('click', function () {
    $('.menu, .burger').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.menu__list a, .logo').on('click', function () {
    $('.menu, .burger').toggleClass('active');
  });

  $(".menu__list a, .logo, .header__icon").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(window).scroll(function () {
    $('.header__top').toggleClass('active', $(this).scrollTop() > 0);
  });

  });


var mixer = mixitup('.portfolio__content');