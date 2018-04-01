$(document).ready(function() {

  function animateLatter(latter) {
    // latter.toggleClass('hover');
    // setTimeout( function () {
    //   latter.toggleClass('hover')
    // }, 200);

    latter.fadeIn("slow", function() {
      $(this).toggleClass("hover");
    });

    latter.fadeOut("slow", function() {
      $(this).toggleClass("hover");
      // $(this).fadeIn("slow");
      $(this).css('display', 'block');
    });

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