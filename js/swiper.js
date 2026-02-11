    var swiper = new Swiper(".slide-swp", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
      },
      autoplay:{
        delay:2500,
      },
      loop: true
    });


    /* swiper slide products */

  var swiper = new Swiper(".slide_product", {
    slidesPerView: 5,
    spaceBetween:20,
    autoplay:{
        delay:2500,
        
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
    });