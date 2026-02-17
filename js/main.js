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


    let cart = JSON.parse(localStorage.getItem('cart')) || []

    cart.push({... product , quantity: 1})
    localStorage.setItem('cart', JSON.stringify(cart))

    updateCart()
}



function updateCart() {

    let cartItemsContainer = document.getElementById("cart_items")

    let cart = JSON.parse(localStorage.getItem('cart')) || []


    cartItemsContainer.innerHTML = "";
    cart.forEach((item , index) => {
        cartItemsContainer.innerHTML += `
        
        <div class="item_cart">
                <img src="${item.img}" alt="online">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">${item.price}</p>
                    <div class="quantity_control">
                        <button class="dectese_quantity">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="Increase_quantity">+</button>
                    </div>
                </div>

                <button class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        
        `
    })
}