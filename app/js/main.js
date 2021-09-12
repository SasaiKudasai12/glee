$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $(".star").rateYo({
    rating: 3.6,
    starWidth: "17px",
    normalFill: "#ccccce"
  });
});