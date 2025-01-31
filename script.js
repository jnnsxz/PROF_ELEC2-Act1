// Product Data (Now includes 8 products instead of 9)
const products = [
    { name: "Kuromi Black", price: 10.00, image: "https://i.ebayimg.com/images/g/0-AAAOSwg15kpW~u/s-l1200.jpg" },
    { name: "Kuromi Violet", price: 15.00, image: "https://i.ebayimg.com/images/g/Jo8AAOSwWS5kEAzj/s-l1200.jpg" },
    { name: "Cinnamoroll", price: 20.00, image: "https://i.ebayimg.com/images/g/xrsAAOSw9mtkRwup/s-l1200.jpg" },
    { name: "Hello Kitty Red", price: 25.00, image: "https://media.karousell.com/media/photos/products/2024/9/19/lady_bug_hello_kitty_plush_toy_1726752436_61a033cc_progressive.jpg" },
    { name: "Gojo", price: 30.00, image: "https://i.ebayimg.com/images/g/4zwAAOSwgY9lSU49/s-l1200.jpg" },
    { name: "Geto", price: 35.00, image: "https://i.ebayimg.com/images/g/jtAAAOSwdbVlSVTl/s-l1200.jpg" },
    { name: "Hyoma Chigiri", price: 40.00, image: "https://statics.ruadoll.com/image/cache/2024/0925/0/307edd4a-e513-7069-a6e0-f0641825a170-1000x1000.jpg" },
    { name: "Nagi Seishiro", price: 45.00, image: "https://m.media-amazon.com/images/I/81jZKkUWsIL.jpg" }
];

// Shopping Cart Array
let cart = [];

// Function to display products
function displayProducts() {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = ''; // Clear previous products

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}


// Function to add product to cart
function addToCart(index) {
    cart.push(products[index]);
    displayCart();
}

// Function to display cart items
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear previous items
    let totalPrice = 0;

    cart.forEach((item) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.style.color = "#ff4d4d"; // Make cart items red
        cartItemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price.toFixed(2)}</p>
        `;
        cartContainer.appendChild(cartItemDiv);
        totalPrice += item.price; // Calculate total price
    });

    // Update total price display and apply red color
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.style.color = "#ff4d4d";
    totalPriceElement.innerText = totalPrice.toFixed(2);
}


// Initial call to display products
displayProducts();
