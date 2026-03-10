// const addProduct = () => {
//     const product = document.getElementById('product');
//     const quantity = document.getElementById('quantity')
//     const productEl = product.value;
//     const quantityEl = quantity.value;
   
//     console.log('Product:', productEl, quantityEl);

//     displayProduct(productEl, quantityEl);
//     addToProduct(productEl, quantityEl)
    
//     product.value = '';
//     quantity.value = '';
   

// }

// const getCart = () => {
//     const cart = {};
//     const cartJoson = JSON.stringify(cart)
//     localStorage.setItem('cart',cartJoson)

//     return cart;
// }
// const addToProduct = (product, quantity)=>{
// const cart = getCart()
// cart[product] = quantity;
// console.log('cart', cart);
// }


// const displayProduct = (product, quantity) => {
//     const li = document.createElement('li')
//     li.innerHTML = `${product} : ${quantity}`;

//     const ul = document.getElementById('product-container');
//     ul.appendChild(li)
// }


// const displayStoredProducts = () => {
//     const savedCart = getCart(); // LocalStorage theke object ta anlam
    
//     // Object-er protita 'key' (product) ar 'value' (quantity) er upor loop korbo
//     for (const product in savedCart) {
//         const quantity = savedCart[product];
        
//         // Age theke banano display function ta use korbo
//         displayProduct(product, quantity);
//     }
// }
// displayStoredProducts();
// 1. LocalStorage theke data ana (Get)
const getCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    
    if (storedCart) {
        // Jodi age theke data thake, sheta ke object-e convert korbo
        cart = JSON.parse(storedCart);
    }
    return cart;
}

// 2. LocalStorage-e data save kora (Set)
const addToProduct = (product, quantity) => {
    const cart = getCart(); // Puron data anlam
    cart[product] = quantity; // Notun data add/update korlam
    
    const cartJson = JSON.stringify(cart);
    localStorage.setItem('cart', cartJson); // LocalStorage-e save korlam
}

// 3. UI-te data dekhano (Display)
const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`; // innerText use kora safe
    ul.appendChild(li);
}

// 4. Button-e click korle jeta hobe
const addProduct = () => {
    const productInput = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    
    const productVal = productInput.value;
    const quantityVal = quantityInput.value;

    if (productVal === '' || quantityVal === '') {
        alert("Product ar Quantity dui-tei likhen!");
        return;
    }

    // Screen-e dekhano
    displayProduct(productVal, quantityVal);
    // LocalStorage-e save kora
    addToProduct(productVal, quantityVal);
    
    // Input field khali kora
    productInput.value = '';
    quantityInput.value = '';
}

// 5. Page reload dile saved data gulo screen-e ana
const displayStoredProducts = () => {
    const savedCart = getCart();
    for (const product in savedCart) {
        const quantity = savedCart[product];
        displayProduct(product, quantity);
    }
}

// Page load holei saved data dekhabe
displayStoredProducts();