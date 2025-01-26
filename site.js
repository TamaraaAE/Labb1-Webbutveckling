// let products = [
//     { id: 1, name: "Rosbukett", price: 450, image: "https://www.blomstertorget.se/wp-content/uploads/2024/02/d7ba469d-c5ee-46a4-a59b-2bfd7598654b_Large.jpg" },
//     { id: 2, name: "Tulpaner", price: 300, image: "https://brondsholm.se/17689-large_default/tulpanbukett-47cm-konstgjord-blomma.jpg" },
//     { id: 3, name: "Liljor", price: 260, image: "https://puls.interflora.se/siteassets/5391-puls-uppsala/webbshop/vita-liljor4.jpg" }
// ];

// let cart = [];

// function displayProducts() {
//     const productList = document.getElementById('product-list');
//     productList.innerHTML = "";

//     products.forEach(product => {
//         let productDiv = document.createElement('div');
//         productDiv.classList.add('col-md-4', 'product');
//         productDiv.innerHTML = `
//             <div class="card mb-3">
//                 <img src="${product.image}" class="card-img-top" alt="${product.name}">
//                 <div class="card-body">
//                     <h5 class="card-title">${product.name}</h5>
//                     <p class="card-text">Pris: ${product.price} kr</p>
//                     <button class="btn btn-primary" onclick="addToCart(${product.id})">Lägg till i kundvagn</button>
//                 </div>
//             </div>
//         `;
//         productList.appendChild(productDiv);
//     });
// }

// function addToCart(id) {
//     const product = products.find(p => p.id === id);
    

//     const existingProduct = cart.find(p => p.id === id);
//     if (existingProduct) {
//         existingProduct.quantity++;  
//     } else {
//         cart.push({...product, quantity: 1}); 
//     }

//     updateCartIcon();
// }

// function updateCartIcon() {
//     const cartCount = cart.reduce((total, product) => total + product.quantity, 0);
//     const cartIcon = document.getElementById('cart-count');
//     cartIcon.textContent = cartCount;
// }

// function updateCartMenu() {
//     const cartItemsList = document.getElementById('cart-items-list');
//     cartItemsList.innerHTML = "";

//     cart.forEach(product => {
//         let cartItem = document.createElement('li');
//         cartItem.textContent = `${product.name} - ${product.quantity} st - ${product.price * product.quantity} kr`;
//         cartItemsList.appendChild(cartItem);
//     });
// }

// function toggleCart() {
//     const cartMenu = document.getElementById('cart-menu');
//     cartMenu.style.display = cartMenu.style.display === "none" ? "block" : "none";
// }

// function checkout() {
//     alert("Köp genomfört!");
//     cart = [];
//     updateCartIcon();
//     updateCartMenu();
// }

// displayProducts();

let products = [
    { id: 1, name: "Rosbukett", price: 450, image: "https://www.blomstertorget.se/wp-content/uploads/2024/02/d7ba469d-c5ee-46a4-a59b-2bfd7598654b_Large.jpg" },
    { id: 2, name: "Tulpaner", price: 300, image: "https://brondsholm.se/17689-large_default/tulpanbukett-47cm-konstgjord-blomma.jpg" },
    { id: 3, name: "Liljor", price: 260, image: "https://puls.interflora.se/siteassets/5391-puls-uppsala/webbshop/vita-liljor4.jpg" }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = "";

    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('col-md-4', 'product');
        productDiv.innerHTML = `
            <div class="card mb-3">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Pris: ${product.price} kr</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Lägg till i kundvagn</button>
                </div>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingProduct = cart.find(p => p.id === id);
    if (existingProduct) {
        existingProduct.quantity++;  
    } else {
        cart.push({...product, quantity: 1}); 
    }

    updateCartIcon();
    updateCartMenu();
}

function updateCartIcon() {
    const cartCount = cart.reduce((total, product) => total + product.quantity, 0);
    const cartIcon = document.getElementById('cart-count');
    cartIcon.textContent = cartCount;
}

// function updateCartMenu() {
//     const cartItemsList = document.getElementById('cart-items-list');
//     cartItemsList.innerHTML = "";

//     cart.forEach(product => {
//         let cartItem = document.createElement('li');
//         cartItem.textContent = `${product.name} - ${product.quantity} st - ${product.price * product.quantity} kr`;
//         cartItemsList.appendChild(cartItem);
//     });
// }

function updateCartMenu() {
    const cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.innerHTML = "";  // Rensa listan varje gång vi uppdaterar den

    cart.forEach((product, index) => {
        let cartItem = document.createElement('li');
        cartItem.innerHTML = `${product.name} - ${product.quantity} st - ${product.price * product.quantity} kr 
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Ta bort</button>`;
        cartItemsList.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);

    // Uppdatera både kundvagnsikonen och kundvagnsmodulen
    updateCartIcon();
    updateCartMenu();
}


function toggleCart() {
    const cartMenu = document.getElementById('cart-menu');
    cartMenu.style.display = cartMenu.style.display === "none" ? "block" : "none";
}

function closeCart() {
    const cartMenu = document.getElementById('cart-menu');
    cartMenu.style.display = "none"; 
}


function checkout() {
    alert("Köp genomfört!");
    cart = [];
    updateCartIcon();
    updateCartMenu();
}

displayProducts();