// $(document).ready(function () {

$(function () {
 //add an 'id='rateYo' 
  $(".rate-star").rateYo({
      starWidth: "14px",
      readOnly: true,
      rating: 5
  });
 
  //top main-page title slider!
  $('.slider__inner').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });

  //xl items main-page slider
  $('.xl__slider-inner').slick({
    autoplay: true,
    autoplaySpeed: 3000

  });
//s items main page slider
  $('.followed__items-inner').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  });


  
  //Mobile menu rows
  $('.user-mob').click(function () {
    $('.header__top-content-right').toggleClass('active'); //change
    // $('.header__top-content-right--inner').toggle();
  });
  
  $('.mob-men-row').click(function () {
  $(this).toggleClass('active'); //make midle row transparent and move bottom and top rows maikin X!
  $('.header__navigation').toggleClass('active');
  });



  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 350,
    from: 30,
    to: 300,
    prefix: '$'
  });

  /* Javascript */


    $(".rateYo").rateYo({
      starWidth: "18px"
    });

    
    $('.list-btn').click( function() {
      $(this).attr('class', 'list-btn-active');
      $('.grid-btn-active').attr('class', 'grid-btn');
      $('.grid__item').toggle();
      $('.list__item-inner').toggle();
    });

    $('.grid-btn-active').click( function() {
      $(this).attr('class', 'grid-btn-active');
      $('.list-btn-active').attr('class', 'list-btn');
      $('.list__item-inner').toggle();
      $('.grid__item').toggle();
    });
    


  $('.single__product-tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.single__product-tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.single__product-tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });
    
  //main page s items mixitup! hat to be lovated always at the bottom of main.js IMPORTANT
//   var mixer = mixitup('.s__items-inner');
});

