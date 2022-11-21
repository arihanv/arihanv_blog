$(window).scroll(function() {

    if ($(this).scrollTop()>600){
        $('#navbar-side').fadeIn();
    }
    else if ($(this).scrollTop()>0)
     {
        // $('.mouse_scroll').fadeOut();
        // $('.mouse_scroll').fadeTo("slow", 0);
        $('.mouse_scroll').animate({opacity: 0}, 'fast', function(){
            $('.mouse_scroll').css('visibility', "hidden");
          });
          console.log("mouse gone")
        // $('.mouse_scroll').css('visibility', 'hidden')
        // $('#navbar-side').fadeIn();
    }
    else
     {
    //   $('.mouse_scroll').fadeIn();
    // $('.mouse_scroll').animate({opacity: 1}, 'fast', function(){
    //     $('.mouse_scroll').css('visibility', 'visible');
    //   });
    // $('.mouse_scroll').css({opacity: 0.0, visibility: "hidden"}).animate({opacity: 1}, 100);
    // $('.mouse_scroll').css('visibility', "visible")
      console.log("mouse return")
    // $('.mouse_scroll').fadeTo("slow", 1);
      $('#navbar-side').fadeOut();
     }
     
 });

// var test = document.querySelectorAll('[active = not-active]');
var test = document.querySelectorAll('[id = not-active]');
console.log(test)
var clicks=0
document.getElementById('button-active').onclick = function () {
for(var i=0; i<test.length; i++) {

    test[i].classList.toggle('fade');
}
if (clicks == 0) {
    document.getElementById('button-active').innerHTML = 'Active';
    document.getElementById('icon-desc').innerHTML = 'I have used...';
    clicks += 1
} else{
    document.getElementById('icon-desc').innerHTML = 'I am using...';
    document.getElementById('button-active').innerHTML = 'All';
    clicks -= 1
}
var em = document.getElementById("not-active");
var  temp = window.getComputedStyle(em).getPropertyValue("opacity");
if( temp == 1) {
    slideSource.classList.toggle('fade');
}
}
