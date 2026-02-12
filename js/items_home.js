fetch('products.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    
    const swiper_items_sale = document.getElementById("swiper_items_sale")
})




<div class="swiper-slide product">
                        <span class="sale_present">50%</span>

                        <div class="img_product">
                            <a href="#"><img src="img/product/0.png" alt="online"></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="name_product"><a href="#">Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Veniam facilis officiis nemo reprehenderit ex!
                             Fugiat velit aut dolore ea officiis!</a></p>

                             <div class="price">
                                <p><span>50$</span></p>
                                <p class="old_price">80$</p>
                             </div>

                             <div class="icons">
                                <span class="btn_add_cart">
                                    <i class="fa-solid fa-cart-shopping"></i> add to cart
                                </span>
                                <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                             </div>
                    </div>