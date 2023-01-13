const cartEl = document.querySelector(".nav_bag");
const cartContainerEl = document.querySelector(".cart_container");
const closeCartEl = document.querySelector("#close_icon");
const productsContainerEl = document.querySelector(".products_container");
const cartProductEl = document.querySelector(".cart_products");
const totalPriceEl = document.querySelector(".totalPrice");
const cartItemsEl = document.querySelector(".items")
const btnClear = document.querySelector(".btn_clear");
cartEl.addEventListener("click", () => {
    cartContainerEl.classList.add("active")
})

closeCartEl.addEventListener("click", () => {
    cartContainerEl.classList.remove("active")
});

function renderProducts() {
    productsContainerEl.innerHTML = "";
    products.forEach((product) => {
        const { id, title, image, price } = product;
        const productEl = document.createElement("div");
        productEl.innerHTML = `
        <div class="product">
        <div class="product_img">
            <img src="${image}" alt="${title}">
        </div>
        <div class="product_title">
        <h3>${title}</h3>
        </div>
        <div class="product_price">
        <h3>Price: $${price}</h3>
        </div>
        <div class="product_btn">
            <button onClick="addToCart(${id})">Buy Now</button>
        </div>
    </div>
        `;

        productsContainerEl.appendChild(productEl)
    })
};
renderProducts();


// get items from localStorage
let cart = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
updateCart();
function renderCartProducts() {
    cartProductEl.innerHTML = "";
    cart.forEach((product) => {
        const { id, title, image, price, numberOfUnits } = product;
        const cartProduct = document.createElement("div");
        cartProduct.innerHTML = `
        <div class="cartProduct">
        <div class="cart_product_flex">
        <div class="cart_product_img">
        <img src="${image}" alt="${title}" class="cart_img">
    </div>
    <div class="cart_product_title">
    <h3>${title}</h3>
    </div>
        </div>
        <div class="cart_product_price">
        <h3>Price: $${price}</h3>
        </div>
        <div class="cart_amount">
        <p class="decrement" onclick="changeNumberOfUnits('minus', ${id})">-</p>
        <div class="number">${numberOfUnits}</div>
        <p class="increment" onclick="changeNumberOfUnits('plus', ${id})">+</p>
        </div>
        <div class="cart_product_btn">
            <p onClick="removeFromCart(${id})"><i class='bx bxs-trash-alt'></i></p>
        </div>
    </div>
        `;

        cartProductEl.appendChild(cartProduct);
    })
};

renderCartProducts();

// add to cart functionality

function addToCart(id) {
    // check if there is an existing product in the cart
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id)
    } else {
        const product = products.find((product) => product.id === id);
        cart.push({
            ...product,
            numberOfUnits: 1,
        })
    };

    updateCart()
};

// remove from cart functionality

function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCart()
};

// updating our cart 

function updateCart() {
    renderCartTotal();
    renderCartProducts();
    localStorage.setItem("cartItems", JSON.stringify(cart));
};
updateCart()


// change amount

function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus" && numberOfUnits < item.instock) {
                numberOfUnits++;
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}
changeNumberOfUnits()


// cart total price

function renderCartTotal() {
    let totalCartPrice = 0;
    totalCartAmount = 0;

    cart.forEach((item) => {
        totalCartPrice += item.price * item.numberOfUnits;
    });

    totalPriceEl.innerHTML = `Total Price: $${totalCartPrice.toFixed(2)}`;
    cartItemsEl.innerHTML = `Total Items : ${cart.length}`

}

// clear cart

btnClear.addEventListener("click", () => {
    clearCart()
})
function clearCart() {
    if (cart.length >= 1) {
        if (confirm("Do you want to clear the cart")) {
            cart = [];
            localStorage.setItem("cartItems", JSON.stringify(cart));
            updateCart()
        };
    }
}