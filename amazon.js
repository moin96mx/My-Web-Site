// Cart Counter Logic
let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`"${productName}" successfully added to MR MOIN Cart! (Price: ৳${price})`);
}

function toggleCartModal() {
    if (cartCount === 0) {
        alert("Your MR MOIN Cart is currently empty.");
    } else {
        alert(`You have ${cartCount} item(s) in your cart.`);
    }
}