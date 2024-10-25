//task 2: add event listener for product selection

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');
//connects elements in html to elements in js file

productSelector.addEventListener('change', updateTotalPrice); 
//updates the total price based on what product is selected
quantityInput.addEventListener('input', updateTotalPrice);
//updates the total price based on the quantity selected


//task 3: calculate total price dynamically

function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice.toFixed(2);
} //connecting the event listeners above, updates price in real time based on quantity and product selected
