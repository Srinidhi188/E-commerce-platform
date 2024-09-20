// Shopping Cart
let cart = [];
let total = 0;

// Add to Cart Function
function addToCart(productId, price) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: productId, price: price, quantity: 1 });
    }

    updateCart();
}

// Update Cart Function
function updateCart() {
    const cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Product ${item.id}: $${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(listItem);
    });

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Event Listeners for "Add to Cart" Buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const price = parseFloat(event.target.getAttribute('data-price'));
        addToCart(productId, price);
    });
});
