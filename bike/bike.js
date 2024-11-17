const product = [
    {
        id: 0,
        image:'https://rexmotors.uk/wp-content/uploads/2024/10/1.jpg',
        title: 'Bike Basic Report',
        price:120,
        id: 1,
        image:'https://rexmotors.uk/wp-content/uploads/2024/10/1.jpg',
        title: 'Bike Basic Report',
        price:120,
        id: 2,
        image:'https://rexmotors.uk/wp-content/uploads/2024/10/1.jpg',
        title: 'Bike Basic Report',
        price:120,
        id: 3,
        image:'https://rexmotors.uk/wp-content/uploads/2024/10/1.jpg',
        title: 'Bike Basic Report',
        price:120,
        id: 4,
        image:'https://rexmotors.uk/wp-content/uploads/2024/10/1.jpg',
        title: 'Bike Basic Report',
        price:120,


    }
]
const categories =[...new Set(product.map((item)=>
{return item}))]
let i=0
document.getElementById('cart-items').innerHTML = categories.map((item)=>
{
    var {image , title , price} = item;
    return(
         `<div class="basic-report-plan">
    <div class="car-img-report">
        <img src="5.webp">
    </div>
    <div class="basic-report-info">
        <h1>Bike History Report (Basic Plan)</h1>
        <h2>£34.99</h2>
        <button onclick='addToCart("+(i++)+" )'Add to Cart</button>
    '</div>
 </div>'
       

    ) 
}).join('')
var cart = [];
function addtocart(a) {
    cart.push({...categories[a]})
}
function displaycart(a){
    let j =  0
    if (cart.length === 0) {
        document.getElementById('cart-item').innerHTML = '<p>Your cart is empty.</p>';
    }
    else {
        document.getElementById('cart-item').innerHTML = cart.map(items =>
        {
 ` <div class="cart-item">
 <div class="image">
                                    <img src="https://rexmotors.uk/wp-content/uploads/2024/10/1.jpg">
                                </div>
                                <div class="item-description">
                                    <a href="#">Truck History Report (Basic Plan)</a>
                                    <h4>Price:$600</h4>
                                    </div> `
        }
        ).join('')

    }
}

// Toggle Cart Window
function toggleCart() {
    const cartWindow = document.getElementById('cart-window');
    cartWindow.style.display = cartWindow.style.display === 'block' ? 'none' : 'block';
    renderCartItems();
}

// Close the cart window
function closeCart() {
    const cartWindow = document.getElementById('cart-window');
    cartWindow.style.display = 'none';

// Update cart count
document.getElementById('cart-count').textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
updateLocalStorage(); // Save the updated cart to localStorage
renderCartItems();
}


// Remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);  // Remove item at the given index
    updateCartCount();      // Update cart count
    renderCartItems();      // Re-render cart items
}
// Function to calculate total amount in the cart
function calculateTotal() {
   let totalAmount = 0;
   cart.forEach(item => {
       totalAmount += item.price * item.quantity;
   });
   return totalAmount;
}

// Function to update the UI with the total
function updateCartUI() {
   document.getElementById("cart-total").innerText = `Total: $${calculateTotal().toFixed(2)}`;
}

// Clear cart
function clearCart() {
    cart = [];
    updateCartCount();
    renderCartItems();
}

// Checkout

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Proceeding to checkout...');
        // You can implement checkout logic here (e.g., redirect to a checkout page)
        clearCart();
    }
}   // Function to update the total amount of the cart