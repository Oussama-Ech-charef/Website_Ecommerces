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

        console.log(data);

    
    const addToCartButtons = document.querySelectorAll(".btn_add_cart");
    
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            
            const productId = event.currentTarget.getAttribute('data-id');
            const selcetedProduct = data.find(product => product.id == productId)




            addTocart(selcetedProduct)
        });
    });

});



function addTocart(product) {
    console.log(product);


    let cart = [];

    cart.push({... product , quantity: 1})
    localStorage.setItem('cart', JSON.stringify(cart))

    
}