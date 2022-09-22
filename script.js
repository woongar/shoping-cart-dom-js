
let products = [
    {
        name: 'Gold fish',
        price: 100,
        image: 'images/gold.jpg'
    },
    {
        name: 'Coral fish',
        price: 10,
        image: 'images/coral.jpg'
    },
    {
        name: 'Silver fish',
        price: 50,
        image: 'images/silver.jpg'
    }
]







let cart = [];

const cartEl = document.getElementById('cart');
const totalPriceEl = document.getElementById('totalPrice');
const totalItemsEl = document.getElementById('totalItems');


function renderCart() {
    cartEl.innerHTML = '';

    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((product, index) => {
        totalItems = totalItems + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;

        const name = document.createElement('h3');
        name.textContent = product.name + ' (' + product.quantity + ')';

        const price = document.createElement('p');
        price.textContent = product.price;

        const button = document.createElement('button');
        button.style.backgroundColor="red";
        button.textContent = 'Remove from cart';
        button.onclick = () => {
            removeFromCart(index);
            renderCart();
            
        }

        cartEl.append(name);
        cartEl.append(price);
        cartEl.append(button);
    });

    totalPriceEl.textContent = totalPrice;
    totalItemsEl.textContent = totalItems;
}

    function addToCart(product) {
        const foundItem = cart.find(cartItems => {
            return cartItems.name === product.name
        })

        if(foundItem) {
            foundItem.quantity++
        } else {
            cart.push(product);
            product.quantity = 1
        }
    }

    function removeFromCart (productIndex) {
        console.log('remove', productIndex);

        let newCart = []

        cart.forEach((cartItem, index) => {
            if(productIndex === index) {

            } else {
                newCart.push(cartItem)
            }
        });

        cart = newCart;
    }


    const productsEl = document.getElementById('products');

    products.forEach(product => {
        const container = document.createElement('div');
        const name =document.createElement('h3');
        name.textContent = product.name;
    

        const price = document.createElement('p');
        price.textContent = product.price;

        const image = document.createElement('img');
        image.src = product.image;
        image.width = 200;

        const button = document.createElement('button');
        button.style.backgroundColor="green";
        button.textContent = 'Add to cart';
        button.onclick = () => {
            addToCart(product);
            renderCart();
        }

        container.append(name);
        container.append(price);
        container.append(image);
        container.append(button);

        productsEl.append(container)

    });
   