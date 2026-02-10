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
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true
        },
        autoplay:{
            delay:3000,
        },
        loop: true
    });