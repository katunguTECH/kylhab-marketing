// --------------------------------------------------------------
// PRODUCTS ARRAY (replace with your real products & images)
// --------------------------------------------------------------
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Earbuds",
        price: "1,850 KSh",
        description: "HD sound, 20h battery, fast pairing",
        image: "https://placehold.co/600x400/eef2f7/1a2a36?text=Earbuds",
        whatsappMsg: "Hi! I'm interested in Wireless Bluetooth Earbuds (1,850 KSh)"
    },
    {
        id: 2,
        name: "Smart LED Desk Lamp",
        price: "2,450 KSh",
        description: "Touch control, 3 colors, USB charging port",
        image: "https://placehold.co/600x400/eef2f7/1a2a36?text=LED+Lamp",
        whatsappMsg: "Hi, I'd like to buy the Smart LED Desk Lamp (2,450 KSh)"
    },
    {
        id: 3,
        name: "Men's Casual Wristwatch",
        price: "1,250 KSh",
        description: "Water resistant, leather strap, analog",
        image: "https://placehold.co/600x400/eef2f7/1a2a36?text=Watch",
        whatsappMsg: "Hello, order for Men's Casual Watch (1,250 KSh)"
    },
    {
        id: 4,
        name: "Foldable Laptop Stand",
        price: "1,950 KSh",
        description: "Aluminum, ergonomic, portable",
        image: "https://placehold.co/600x400/eef2f7/1a2a36?text=Laptop+Stand",
        whatsappMsg: "I want the Foldable Laptop Stand (1,950 KSh)"
    }
];

// --------------------------------------------------------------
// RENDER PRODUCTS
// --------------------------------------------------------------
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-title">${product.name}</div>
            <div class="product-price">${product.price}</div>
            <div class="product-desc">${product.description}</div>
            <button class="whatsapp-btn" data-msg="${product.whatsappMsg}">
                <i class="fab fa-whatsapp"></i> Order on WhatsApp
            </button>
        `;
        grid.appendChild(card);
    });

    // attach event listeners to each WhatsApp button
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const msg = btn.getAttribute('data-msg');
            // 🔁 REPLACE WITH YOUR REAL WHATSAPP NUMBER (2547XXXXXXXX)
            const phone = "254723652430";
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
            window.open(url, '_blank');
        });
    });
}

// --------------------------------------------------------------
// INQUIRY FORM (whatsapp)
// --------------------------------------------------------------
function setupInquiryForm() {
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('inquiryName').value;
        const email = document.getElementById('inquiryEmail').value;
        const product = document.getElementById('inquiryProduct').value;
        const message = document.getElementById('inquiryMessage').value;

        const fullMsg = `*Inquiry from Kylhab Marketing website*%0A%0AName: ${name}%0AEmail: ${email}%0AProduct wanted: ${product}%0AMessage: ${message}`;
        // 🔁 REPLACE WITH YOUR REAL WHATSAPP NUMBER (same format)
        const phone = "254723652430";
        window.open(`https://wa.me/${phone}?text=${fullMsg}`, '_blank');
    });
}

// --------------------------------------------------------------
// INITIALIZE ON PAGE LOAD
// --------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupInquiryForm();
});