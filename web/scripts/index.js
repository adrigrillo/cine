$(document).ready(function() {
  $('.carousel').slick({
    accessibility: false,
    infinite: false,
    respondTo: 'min',
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    adaptiveHeight: true,
    dots: false

    // more info: https://github.com/kenwheeler/slick/
  });
});
