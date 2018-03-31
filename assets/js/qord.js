$(document).ready(function() {

  function animateLatter(latter) {
    latter.addClass('hover');
    setTimeout( function () {
      latter.removeClass('hover')
    }, 200);
  }

  animateLatter($('.letter.q'));
  animateLatter($('.letter.q1'));
  animateLatter($('.letter.mail'));

  setTimeout( function () {
    animateLatter($('.letter.o'));
    animateLatter($('.letter.github'));
  }, 200);

  setTimeout( function () {
    animateLatter($('.letter.r'));
    animateLatter($('.letter.linkedin'));
  }, 400);

  setTimeout( function () {
    animateLatter($('.letter.d'));
    animateLatter($('.letter.stackoverflow'));
  }, 600);

});