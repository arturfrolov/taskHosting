$(document).ready(function(){
  $('ul.plan__tabs').on('click', 'li:not(.plan__tab_active)', function() {
    $(this)
      .addClass('plan__tab_active').siblings().removeClass('plan__tab_active')
      .closest('div.container').find('div.plan__content')
      .removeClass('plan__content_active').eq($(this).index()).addClass('plan__content_active');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #order').fadeOut('fast');
  });

  $('.plan__button').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.plan__name').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  $("a[href^='#']").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});


const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.promo__menu'),
        closeElem = document.querySelector('.promo__close'),
        menuList = document.querySelectorAll('.promo__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuList.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});