$(function() {
    $('a.link').hover(function() {
      $('.active .title').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      // $('.active .title').css('display', 'none');
      $('.active .title').css('color', 'red');
      // $('.active .title').fadeIn('fast')
    });
  });