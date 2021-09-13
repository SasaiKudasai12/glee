$(function () {

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active') ;
    
  });
  $('.button-list').on('click', function() {
    $('.product__content-item').addClass('product__content-item--list')
  })
  $('.button-grid').on('click', function () {
    $('.product__content-item').removeClass('product__content-item--list')
  })

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