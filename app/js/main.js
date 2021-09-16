$(function () {


  

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active') ;
    
  });
  $('.button-list').on('click', function() {
    $('.product__content-item').addClass('product__content-item--list');
    $('.pagination').addClass('pagination--list');
  });
  $('.button-grid').on('click', function () {
    $('.product__content-item').removeClass('product__content-item--list');
    $('.pagination').removeClass('pagination--list');
  });
  $('.contacts__top-item').on('click', function () {
    $('.contacts__top-item').removeClass('contacts__top-item--active');
    $(this).addClass('contacts__top-item--active');
  });

  $('.detalis-item__input').styler();

  $('.detalis-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.detalis-tabs__top-item').removeClass('detalis-tabs__top-item--active');
    $(this).addClass('detalis-tabs__top-item--active');
   
    $('.detalis-tabs__content-item').removeClass('detalis-tabs__content-item--active')
    $($(this).attr('href')).addClass('detalis-tabs__content-item--active');
  });

  $('.detalis-slide__thumb').slick({
    asNavFor: '.detalis-slide__big',
    vertical: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false
  });
  $('.detalis-slide__big').slick({
    asNavFor: '.detalis-slide__thumb',
    draggable: false,
    fade: true,
    arrows: false
  });

  
  $('.detalis-bottomslider__items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2
  });





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
    normalFill: "#ccccce",
    readOnly: true
  });
});