
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
//initialized variables
let amount = 0;
let subtotal = 0;
let tax = 0;
let shipping = 0;
let grand_total = 0;
//output array to html
for (i = 0; i < cart.length; i++) {
   amount = calculateTotal(cart[i].quantity, cart[i].product.price);
   outputcartRow(i, amount);
   subtotal = subtotal + amount;
}
//calculate 
tax = subtotal * tax_rate;

if (subtotal >= shipping_threshold) {
   shipping = 0;
}
else {
   shipping = 40;
}
grand_total = subtotal + tax + shipping;