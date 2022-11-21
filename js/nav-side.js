$(function() {
    // document.getElementById('sup').click();
    var link = $('#navbar-side a.dot');
    
    // Move to specific section when click on menu link
    link.on('click', function(e) {
      // $(this).addClass('active');
      var target = $($(this).attr('href'));
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 600);
      $(this).addClass('active');
      scrNav();
      e.preventDefault();
    });
    
    // Run the scrNav when scroll
    $(window).on('scroll', function(){
      scrNav();
    });
    
    // scrNav function 
    // Change active dot according to the active section in the window
    function scrNav() {
      var sTop = $(window).scrollTop();
      $('section').each(function() {
        var id = $(this).attr('id'),
            offset = $(this).offset().top,
            height = $(this).height();
        if(sTop >= offset - 650 && sTop < offset + height) {
          link.removeClass('active');
          $('#navbar-side').find('[data-scroll="' + id + '"]').addClass('active');
        }
      });
    }
    scrNav();
  });