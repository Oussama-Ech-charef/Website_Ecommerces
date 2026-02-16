let categoty_nav_list = document.querySelector(".category_nav_list");

function Open_Categ_list(){
    categoty_nav_list.classList.toggle("active");
}



let cart = document.querySelector('.cart');

function open_close_cart() {
    cart.classList.toggle("active")
}


fetch('products.json')
.then(response => response.json())
.then(data => {
    
    const addToCartButtons = document.querySelectorAll(".btn_add_cart");
    
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            
            const productId = event.currentTarget.getAttribute('data-id');
            console.log(productId);

        });
    });

});
