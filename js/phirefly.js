// Breakpoints
var small   = 768,
    medium  = 1280,
    large   = 1440;

$(function() {
  if ($(window).width() < small) {
    $('.search-button').click(function (event) {
      event.preventDefault();
      $('.search-input').toggle();
    });
  } else {
    return false;
  }
});

$(function() {
  if ($(window).width() > small) {
    $('.main-footer').find('.foo-left').css('height', $('.main-footer').innerHeight());
  }
});
