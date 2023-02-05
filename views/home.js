//$(document).ready(function(){
  console.log("home.js");

/*
$('.slider').slick();
console.log("after 1");

*/
  
console.log("after 2");

$(document).ready(function(){
console.log("ready doc in home");
  
  $('.slider').slick({
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1, autoplay: true, autoplaySpeed: 7600,

centerMode: true,
  variableWidth: true,
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
  });
  
});
		