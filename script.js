// script.js

// Data produk (domain dan VPS)
const products = {
    domains: [
        { name: 'example.com', price: 120000 },
        { name: 'website.net', price: 95000 },
        { name: 'mydomain.org', price: 75000 }
    ],
    vps: [
        { name: 'VPS 1GB RAM', price: 150000 },
        { name: 'VPS 2GB RAM', price: 250000 },
        { name: 'VPS 4GB RAM', price: 400000 }
    ]
};

// Fungsi untuk menampilkan produk di halaman
function displayProducts(productList, elementId) {
    const productContainer = document.getElementById(elementId);
    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Harga: Rp${product.price.toLocaleString()}</p>
            <button onclick="addToCheckout('${product.name}', ${product.price})">Beli</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Tampilkan domain dan VPS
displayProducts(products.domains, 'domain-list');
displayProducts(products.vps, 'vps-list');

// Fungsi untuk menambah produk ke form checkout
function addToCheckout(name, price) {
    document.getElementById('product-name').value = name;
    document.getElementById('total-price').value = `Rp${price.toLocaleString()}`;
}

// Fungsi untuk menangani form checkout
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pembayaran berhasil untuk produk: ' + document.getElementById('product-name').value);
    document.getElementById('checkout-form').reset();
});
