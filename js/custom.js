// nav-bar
$(document).ready(function(){
    $(".nav-button").click(function(){
      $("header nav .container ul").toggleClass("nav-0");
      $("body").toggleClass("overflow-hidden");
    });
  });
//   ===========
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    autoplay:true,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  AOS.init();
//   ===================
jQuery(document).ready(function($) {
    $('.count').counterUp({
      delay: 10,
      time: 1000,
    });
  });
  // ------header scroll-up
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > lastScrollTop) {
    // Scrolling down
    header.classList.remove('nav-down');
    header.classList.add('nav-up');
  } else {
    // Scrolling up
    header.classList.remove('nav-up');
    header.classList.add('nav-down');
  }

  lastScrollTop = scrollPosition;
});
// --------------------------------------------------------------------------