document.addEventListener('DOMContentLoaded', () => {
    // Example: Load products dynamically
    const productsSection = document.getElementById('products');
    const products = [
        { id: 1, name: 'Paracord Bracelet', price: 10, image: 'bracelet.jpg' },
        { id: 2, name: 'Paracord Keychain', price: 5, image: 'keychain.jpg' },
    ];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productsSection.appendChild(productDiv);
    });
});
