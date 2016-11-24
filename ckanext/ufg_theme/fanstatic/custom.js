$('.content-groups ul li').hover(
  function() {
    $(this).addClass('animated pulse');
    $(this).children('a').addClass('border-groups');
  }, function() {
    $(this).removeClass('animated pulse');
    $(this).children('a').removeClass('border-groups');
  }
);

$(window).scroll(function () {
    var y = $(this).scrollTop();

    if (y > 320) {
      $(window).off("scroll");

      $('.content-statistics b').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 1000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
    }
});