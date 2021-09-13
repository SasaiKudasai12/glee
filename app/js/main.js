$(function () {

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$"
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $(".filter-recent__star").rateYo({
    rating: 4,
    starWidth: "17px",
    normalFill: "#ccccce"
  });
});