// initialize top banner swiper once DOM is ready
// (slide-swp has static slides so we can configure immediately)
document.addEventListener('DOMContentLoaded', function() {
    new Swiper(".slide-swp", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullests: true,
            clickable: true
        },
        autoplay: {
            delay: 2500,
        },
        loop: true
    });

    /*
        product sliders are generated dynamically after the JSON fetch
        (see js/items_home.js), so two problems were occurring:
        1. the initialization ran before any slides were inserted
           which left the carousel empty and non‑functional
        2. using the selector ".slide_product" only created a single
           Swiper instance and shared navigation buttons across all
           containers

        The code below loops through every container with that class,
        scopes the navigation buttons to the current element and enables
        the observer options so new slides added later will be detected.
    */
    document.querySelectorAll(".slide_product").forEach(function(container) {
        new Swiper(container, {
            slidesPerView: 5,
            spaceBetween: 20,
            autoplay: {
                delay: 2500,
            },
            navigation: {
                nextEl: container.querySelector(".swiper-button-next"),
                prevEl: container.querySelector(".swiper-button-prev")
            },
            loop: true,
            watchOverflow: false,
            observer: true,          // watch for DOM changes
            observeParents: true,    // in case parent classes are modified

            breakpoints: {
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20
                },
                1000: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10
                }
            }
        });
    });
});