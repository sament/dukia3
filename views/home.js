
 $(function() {
    var spinner = $( "#cmodal-qty" ).spinner();
   
 //alert("mod 2");
 });

$(document).ready(function(){

  $('.slider').slick({
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 7600,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev carousel-control-prev-icon bg-primary left" aria-label="carousel-control"></button>',
    
    nextArrow: '<button type="button" class="slick-next carousel-control-next-icon bg-primary" aria-label="carousel-control"></button>',

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
  

$(document).on("click", ".add-to-cart", function() {
  // Your event handling code
  const weight = $(this).attr("data-item-fineWeight");
  const itemId = Math.abs(parseInt($(this).attr("data-itemId")));
  var weightArray = weight.split(" ");
  var weightValue = weightArray[0];
  var weightUnit = weightArray[1];

  
//select case and convert to grams.

 const  item = products.getProductById(itemId);
console.log(item);
  $("#cmodal-name").text(item.title);
  $("#cmodal-img").attr("src", item.image);  

  const gw = item.fineWeight;

const  fw = products.convertToGrams(gw);
  
  $("#cmodal-grossWeight").text("Gramms: " + fw);
  alert(fw.toLocaleString());
  
});

// $(document).ready(function() {
  min = 0; // Minimum of 0
  max = 10; // Maximum of 10
  $(".minus").on("click", function() {
    if ($('.count').val() > min) {
      $('.count').val(parseInt($('.count').val()) - 1 );
      $('.counter').text(parseInt($('.counter').text()) - 1 );
    }
  });
  
  $(".plus").on("click", function() {
    if ($('.count').val() < max) {
      $('.count').val(parseInt($('.count').val()) + 1 );
      $('.counter').text(parseInt($('.counter').text()) + 1 );
    }
  });
  
 });
  
// });