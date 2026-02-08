let categoty_nav_list = document.querySelector(".category_nav_list");

function Open_Categ_list(){
    categoty_nav_list.classList.toggle("active");
}

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