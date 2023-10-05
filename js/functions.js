/* define your functions here */
function calculateTotal (quantity, price) {
    return quantity * price;  
}

function outputcartRow (item, total) {
    document.write("<tr>");
    document.write("<td><img src='images/" + cart[item].product.filename + "'></td>");
    document.write("<td>"+ cart[item].product.title + "</td>");
    document.write("<td>" + cart[item].quantity + "</td>");
    document.write("<td>$" + cart[item].product.price.toFixed(2) + "</td>");
    document.write("<td>$" + total.toFixed(2) + "</td>");
    document.write("</tr>");
}