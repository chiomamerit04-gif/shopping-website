let product1 = {
    id: 1,
    image: "images/bag.png",
    name: "Fashion Bag",
    price: 800,
    button: "ADD TO CART"
};
let product2 = {
    id: 2,
    image: "images/bag2.png",
    name: "LV Bag",
    price: 1500,
    button: "ADD TO CART"
};
let product3 = {
    id: 3,
    image: "images/dresses.png",
    name: "Floral Dress",
    price: 120,
    button: "ADD TO CART"
};
let product4 = {
    id: 4,
    image: "images/dresses2.png",
    name: "Party Dress",
    price: 160,
    button: "ADD TO CART"
};
let product5 = {
    id: 5,
    image: "images/dresses3.png",
    name: "Chic Dress",
    price: 200,
    button: "ADD TO CART"
};
let product6 = {
    id: 6,
    image: "images/dresses4.png",
    name: "Dinner Dress",
    price: 600,
    button: "ADD TO CART"
};
let product7 = {
    id: 7,
    image: "images/earring.png",
    name: "Silver Earrings",
    price: 200,
    button: "ADD TO CART"
};
let product8 = {
    id: 8,
    image: "images/earring2.png",
    name: "Gold Earrings",
    price: 200,
    button: "ADD TO CART"
};
let product9 = {
    id: 9,
    image: "images/heels.png",
    name: "Luxury Heels",
    price: 400,
    button: "ADD TO CART"
};
let product10 = {
    id: 10,
    image: "images/heels2.png",
    name: "IT_Girl Heels",
    price: 300,
    button: "ADD TO CART"
};
let product11 = {
    id: 11,
    image: "images/heels3.png",
    name: "Perfect Heels",
    price: 200,
    button: "ADD TO CART"
};
let product12 = {
    id: 12,
    image: "images/jewelry.png",
    name: "Luxury Neckpiece",
    price: 500,
    button: "ADD TO CART"
};
let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("navbar").innerHTML = `
    <div class="logo">Shop With Big Mama</div>

    <button id="themeBtn">🌙</button>

    <div class="cart" id="cartIcon">
        🛒
        <span class="cart-count" id="cartCount">0</span>
    </div>
`;
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        document.querySelector(".navbar").classList.add("scrolled");
    } else {
        document.querySelector(".navbar").classList.remove("scrolled");
    }

});

const themeBtn = document.querySelector("#themeBtn");
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});
document.getElementById("product1").innerHTML = `
    <img src="${product1.image}">
    <h3>${product1.name}</h3>
    <p class="price">
        $${product1.price}.00
    </p>
    <button onclick="addToCart(product1)">
        ${product1.button}
    </button>
`;
document.getElementById("product2").innerHTML = `
    <img src="${product2.image}">
    <h3>${product2.name}</h3>
    <p class="price">
        $${product2.price}.00
    </p>
    <button onclick="addToCart(product2)">
        ${product2.button}
    </button>
`;
document.getElementById("product3").innerHTML = `
    <img src="${product3.image}">
    <h3>${product3.name}</h3>
    <p class="price">
        $${product3.price}.00
    </p>
    <button onclick="addToCart(product3)">
        ${product3.button}
    </button>
`;
document.getElementById("product4").innerHTML = `
    <img src="${product4.image}">
    <h3>${product4.name}</h3>
    <p class="price">
        $${product4.price}.00
    </p>
    <button onclick="addToCart(product4)">
        ${product4.button}
    </button>
`;
document.getElementById("product5").innerHTML = `
    <img src="${product5.image}">
    <h3>${product5.name}</h3>
    <p class="price">
        $${product5.price}.00
    </p>
    <button onclick="addToCart(product5)">
        ${product5.button}
    </button>
`;
document.getElementById("product6").innerHTML = `
    <img src="${product6.image}">
    <h3>${product6.name}</h3>
    <p class="price">
        $${product6.price}.00
    </p>
    <button onclick="addToCart(product6)">
        ${product6.button}
    </button>
`;
document.getElementById("product7").innerHTML = `
    <img src="${product7.image}">
    <h3>${product7.name}</h3>
    <p class="price">
        $${product7.price}.00
    </p>
    <button onclick="addToCart(product7)">
        ${product7.button}
    </button>
`;
document.getElementById("product8").innerHTML = `
    <img src="${product8.image}">
    <h3>${product8.name}</h3>
    <p class="price">
        $${product8.price}.00
    </p>
    <button onclick="addToCart(product8)">
        ${product8.button}
    </button>
`;
document.getElementById("product9").innerHTML = `
    <img src="${product9.image}">
    <h3>${product9.name}</h3>
    <p class="price">
        $${product9.price}.00
    </p>
    <button onclick="addToCart(product9)">
        ${product9.button}
    </button>
`;
document.getElementById("product10").innerHTML = `
    <img src="${product10.image}">
    <h3>${product10.name}</h3>
    <p class="price">
        $${product10.price}.00
    </p>
    <button onclick="addToCart(product10)">
        ${product10.button}
    </button>
`;
document.getElementById("product11").innerHTML = `
    <img src="${product11.image}">
    <h3>${product11.name}</h3>
    <p class="price">
        $${product11.price}.00
    </p>
    <button onclick="addToCart(product11)">
        ${product11.button}
    </button>
`;
document.getElementById("product12").innerHTML = `
    <img src="${product12.image}">
    <h3>${product12.name}</h3>
    <p class="price">
        $${product12.price}.00
    </p>
    <button onclick="addToCart(product12)">
        ${product12.button}
    </button>
`;
function addToCart(product) {
    let existingProduct = cart.find(function(item) {
        return item.id === product.id; });
        if (existingProduct) {
            existingProduct.quantity = existingProduct.quantity + 1;
        } else {
            cart.push({ 
                id: product.id, 
                image: product.image, 
                name: product.name, 
                price: product.price, 
                quantity: 1 }); 
}
         saveCart(); 
         updateCartCount(); 
         displayCart();
}
function saveCart() { 
    localStorage.setItem("cart", JSON.stringify(cart)); 
}
function updateCartCount() { 
    let cartCount = document.getElementById("cartCount"); 
    let totalQuantity = 0; 
    cart.forEach(function(item) { 
        totalQuantity = totalQuantity + item.quantity; 
});
cartCount.textContent = totalQuantity; 
}
function displayCart() { 
    let cartContainer = document.getElementById("cart"); 
    if (cart.length === 0) { 
        cartContainer.innerHTML = ` 
        <h2 class="cart-title"> Shopping Cart </h2> 
        <p class="empty-cart"> Your cart is empty. </p> `;
        return; 
}
cartContainer.innerHTML = ` 
<h2 class="cart-title"> Shopping Cart </h2> `; 
cart.forEach(function(item) { 
    let cartItem = document.createElement("div"); 
    cartItem.className = "cart-item"; cartItem.innerHTML = `
     <img src="${item.image}">
      <div class="cart-info">
         <h3>${item.name}</h3> 
          <p> $${item.price}.00 </p> 
       </div>
    <div class="quantity">
     <button onclick="decreaseQuantity(${item.id})"> - </button> 
     <span> ${item.quantity} </span> 
     <button onclick="increaseQuantity(${item.id})"> + </button> 
     </div> `; 
cartContainer.appendChild(cartItem); });
      let total = 0;
cart.forEach(function(item) {
    total = total + (item.price * item.quantity);
});
     let totalDiv = document.createElement("div"); 
totalDiv.innerHTML = ` 
    <p class="cart-total">Total: $${total}.00</p> 
    <button class="checkout" onclick="checkout()">CHECKOUT</button>
`; 
cartContainer.appendChild(totalDiv);
}
function increaseQuantity(productId) { 
    let product = cart.find(function(item) {
         return item.id === productId; }); 
         product.quantity = product.quantity + 1; 
         saveCart(); 
         updateCartCount(); 
         displayCart(); }
function decreaseQuantity(productId) { 
    let product = cart.find(function(item) {
         return item.id === productId; }); 
         product.quantity = product.quantity - 1; 
         if (product.quantity === 0) { 
            cart = cart.filter(function(item) {
                 return item.id !== productId; }); 
}
           saveCart(); 
           updateCartCount(); 
           displayCart(); 
}
function checkout() { 
    alert("Order successful!"); 
    cart = []; 
    saveCart(); 
    updateCartCount(); 
    displayCart(); 
}
document.getElementById("cartIcon").addEventListener("click", function() { 
    document.getElementById("cart").scrollIntoView({ 
        behavior: "smooth" });
 }); 
 displayCart(); 
 updateCartCount();