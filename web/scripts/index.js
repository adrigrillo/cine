$(document).ready(function() {
  $('.carousel').slick({
    accessibility: false,
    infinite: false,
    respondTo: 'min',
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    adaptiveHeight: true,
    dots: false,
    lazyLoad: 'progressive' 
    // more info: https://github.com/kenwheeler/slick/
  });
});
