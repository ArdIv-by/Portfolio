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
    $('.header__top').toggleClass('scroll', $(this).scrollTop() > 0);
  });

});

var mixer = mixitup('.portfolio__content');


const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else {
        if (!animItem.classList.contains('anim-nohide')) {
          animItem.classList.remove('active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
};