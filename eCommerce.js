let cartCount = 0;
let cartItems = [];

function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

function addToCart(name, price) {
    cartCount++;
    document.getElementById('cartCount').innerText = cartCount;

    cartItems.push({ name, price });
    updateCartList();
    toggleCart();
}

function updateCartList() {
    const list = document.getElementById('cartItemsList');
    if (cartItems.length === 0) {
        list.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    list.innerHTML = '';
    cartItems.forEach((item, index) => {
        list.innerHTML += `
            <div class="cart-item-row">
                <div>
                    <h5 style="font-size:13px; color:#333;">${item.name}</h5>
                    <span style="font-size:12px; color:#f85606; font-weight:700;">${item.price}</span>
                </div>
                <i class="fa-solid fa-trash" style="color:red; cursor:pointer;" onclick="removeItem(${index})"></i>
            </div>
        `;
    });
}

function removeItem(index) {
    cartItems.splice(index, 1);
    cartCount--;
    document.getElementById('cartCount').innerText = cartCount;
    updateCartList();
}