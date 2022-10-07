$(document).ready(function(){
  $('ul.plan__tabs').on('click', 'li:not(.plan__tab_active)', function() {
    $(this)
      .addClass('plan__tab_active').siblings().removeClass('plan__tab_active')
      .closest('div.container').find('div.plan__content').removeClass('plan__content_active').eq($(this).index()).addClass('plan__content_active');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #order').fadeOut('fast');
  });

  $('.button__plan').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.plan__name').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });
});

$(window).ready(function(){
  $("a[href='#']").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});