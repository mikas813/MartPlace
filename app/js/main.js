$(function () {
 //add an 'id='rateYo' 
  $(".rate-star").rateYo({
      starWidth: "15px",
      readOnly: true,
      rating: 4.5
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

  $('.followed__items').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false

  });



  var mixer = mixitup('.s__items-inner');

});