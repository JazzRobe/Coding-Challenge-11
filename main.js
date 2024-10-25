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


//task 4: handle order submission

placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;
    
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
}); //when clicked, displays an order summary at the bottom with product, quantity, and price