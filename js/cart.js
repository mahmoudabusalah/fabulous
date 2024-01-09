
const cartSection = document.getElementById('cartSection');

function openCart() {
    cartSection.style.right = '0';
}

function closeCart() {
    cartSection.style.right = '-100%';
}

// ============ Cart Script ============
let cart = document.getElementsByClassName("add-to-cart-icon");
let cartCountElement = document.getElementById("cartCount");
let cartCountValue = document.getElementById("cartCount").innerText;
let cartCountValueAsInt = parseInt(cartCountValue);

function updateCartCount(value) {
    cartCountElement.innerText = value;
}

const cartArray = Array.from(cart);

cartArray.forEach(cart => {
    cart.addEventListener("click", function () {
        cartCountValueAsInt += 1;
        updateCartCount(cartCountValueAsInt);
    });
});
