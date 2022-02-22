/*OWL Carousel init*/
$(document).ready(function(){
   $('.owl-carousel-1').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      navText: [ '', ' ' ],

      responsive:{
         0:{
            items:1
         },

         1000:{
            items:1
         }
      }
   });
   $('.owl-carousel-2').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      navText: [ '', ' ' ],

      responsive:{
         0:{
            items:1.2
         },

         1000:{
            items:4
         }
      }
   });
});