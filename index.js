import {renderProducts} from "./products.js";
//CUSTOMERS
import {renderCart} from "./cart.js";
let customer = localStorage.getItem("customer");

customer = JSON.parse(customer || "{}"); //if nall get empty obj

console.log(customer);
console.log(customer.firstName);
let welcome = document.getElementById("welcome");
welcome.innerHTML +=
  `<h5>${customer.firstName}` + " " + `${customer.lastName}<h5>`;
///////////////////////////////////////////////////////////////////////
renderCart();

renderProducts();


