let categoty_nav_list = document.querySelector(".category_nav_list");

function Open_Categ_list(){
    categoty_nav_list.classList.toggle("active");
}



let nav_links = document.querySelector(".nav_links")

function open_Menu() {
    nav_links.classList.toggle("active")
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


            const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)

            allMatchingButtons.forEach(btn => {
                btn.classList.add("active")
                btn.innerHTML = ` <i class="fa-solid fa-cart-shopping"></i> Item in cart `
            })
        });
    });

});



function addTocart(product) {
    console.log(product);

    // load current cart (empty array if none)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // check if this product is already in the cart
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        // increase quantity instead of pushing a new entry
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}



function updateCart() {

    let cartItemsContainer = document.getElementById("cart_items")

    let cart = JSON.parse(localStorage.getItem('cart')) || []




    let total_price = 0

    let total_count = 0

    cartItemsContainer.innerHTML = "";
    cart.forEach((item , index) => {


        let total_Price_item = item.price * item.quantity;

        total_price += total_Price_item
        total_count += item.quantity


        cartItemsContainer.innerHTML += `
        
        <div class="item_cart">
                <img src="${item.img}" alt="online">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${total_Price_item}</p>
                    <div class="quantity_control">
                        <button class="dectese_quantity" data-index=${index}>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="Increase_quantity" data-index=${index}>+</button>
                    </div>
                </div>

                <button class="delete_item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        
        `
    })


    let price_cart_total = document.querySelector('.price_cart_total');

    let count_item_cart = document.querySelector('.Count_item_cart');

    let count_item_header = document.querySelector('.count_item_header');




    price_cart_total.innerHTML = `
    
    $ ${total_price}
    
    `

    count_item_cart.innerHTML = total_count

    count_item_header.innerHTML = total_count









    let increaseButtons = document.querySelectorAll(".Increase_quantity");
    let decteseButtons = document.querySelectorAll(".dectese_quantity");

    increaseButtons.forEach(button => {
        button.addEventListener("click" , (event) => {
            const itemIndex = event.target.getAttribute("data-index")
            increaseQuantity(itemIndex)
        })
    })
    
    decteseButtons.forEach(button => {
        button.addEventListener("click" , (event) => {
            const itemIndex = event.target.getAttribute("data-index")
            decteaseQuantity(itemIndex)
        })
    })








    let delteButtons = document.querySelectorAll('.delete_item');

    delteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // use currentTarget to ensure we reference the button even if the icon is clicked
            const itemIndex = event.currentTarget.getAttribute('data-index');
            removeFromCart(itemIndex);
        });
    });

}



function increaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []

    cart[index].quantity += 1
    localStorage.setItem('cart' , JSON.stringify(cart))
    updateCart()
}

function decteaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    if(cart[index].quantity > 1) {

        cart[index].quantity -= 1
    }

    localStorage.setItem('cart' , JSON.stringify(cart))
    updateCart()
}


function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let removedProduct = cart.splice(index, 1)[0];

    // save updated cart back to storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // when an item is removed, reset the add-to-cart button(s) for that product
    if (removedProduct && removedProduct.id !== undefined) {
        updateButtonsState(removedProduct.id);
    }

    updateCart();
}

function updateButtonsState(productId) {
    let allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)

    allMatchingButtons.forEach(button => {
        button.classList.remove('active');
        button.innerHTML = ` <i class="fa-solid fa-cart-shopping"></i> add to cart `
    })

}



updateCart()   