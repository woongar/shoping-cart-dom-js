import { addToCart, renderCart} from "./cart.js";


export function renderProducts() {

    let productsJSON = localStorage.getItem("products");
    let products = JSON.parse(productsJSON);

  const productsEl = document.getElementById("products");

  products.forEach((product) => {
    const container = document.createElement("div");
    container.setAttribute("class", "bo");

    const name = document.createElement("h3");
    name.textContent = product.name;
    name.setAttribute("class", "ba");

    const price = document.createElement("p");
    price.textContent = product.price + "$";
    price.setAttribute("class", "pri");

    const units = document.createElement("p");
    units.setAttribute("class", "units");
    units.textContent = product.units + " יחידות";

    const image = document.createElement("img");
    image.getAttribute("class", "im");
    image.src = product.imgUrl;
    image.width = 200;
    image.height = 160;

    const button = document.createElement("button");
    button.setAttribute("class", "but");
    button.setAttribute("id", "product-btn-" + product.id); //id cant be number so using priFix so using btn + number

    if (product.units < 1) {
      button.setAttribute("disabled", ""); //disable when no more this product in the shop
    }

    button.textContent = "Add to cart";
    button.onclick = () => {
      addToCart(product);
      renderCart();
      if (product.units < 1) {
        button.setAttribute("disabled", "");
      }
    };

    container.append(name);
    container.append(price);
    container.append(units);
    container.append(image);
    container.append(button);

    productsEl.append(container);
  });
}
