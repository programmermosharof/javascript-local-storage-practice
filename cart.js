const addProduct = () => {
    const product = document.getElementById('product');
    const quantity = document.getElementById('quantity')
    const productEl = product.value;
    const quantityEl = quantity.value;
   
    console.log('Product:', productEl, quantityEl);

    displayProduct(productEl, quantityEl);
    addToProduct(productEl, quantityEl)
    
    product.value = '';
    quantity.value = '';
   

}

const getCart = () => {
    const cart = {};

    return cart;
}
const addToProduct = (product, quantity)=>{
const cart = getCart()
cart[product] = quantity;
console.log('cart', cart);
}


const displayProduct = (product, quantity) => {
    const li = document.createElement('li')
    li.innerHTML = `${product} : ${quantity}`;

    const ul = document.getElementById('product-container');
    ul.appendChild(li)
}
