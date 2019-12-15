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

  $('.followed__items-inner').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  });



  var mixer = mixitup('.s__items-inner');

});