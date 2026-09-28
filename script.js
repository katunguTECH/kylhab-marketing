/* =========================================================
   script.js
   Loads data from the data files (vehicles.js, electronics.js,
   household.js, kitchenware.js, shoes-clothing.js) and renders
   every grid on index.html.
   Vehicles added through /admin are loaded from /api/vehicles
   and shown first, followed by the ones in vehicles.js.
   IMPORTANT: this file must NOT re-declare any of those arrays.
   ========================================================= */

const WHATSAPP_NUMBER = "254723652430";

/* ---- Optional in-file data (keep hot deals / bestsellers here) ---- */
const hotDeals = [   // "BIDHAA KALI KALI"
    { name: "Walker Boots", price: "3,300 KSh", details: "Sizes 37-43, normal fitting", image: "images/shoes-clothing-textiles/walker-boots.jpg" },
    { name: "Prada Boots",  price: "3,500 KSh", details: "Sizes 37-42",                 image: "images/shoes-clothing-textiles/prada-boots.jpg" }
];

const hotSale = [    // "BRAND NEW HOT SALE"
    { name: "iPhone 15 Pro",        price: "88,000 KSh", details: "256GB, 84% battery, physical SIM, clean unit",        image: "images/electronics-phones/iphone-15pro.jpg" },
    { name: "Arsenal Retro Jersey", price: "3,000 KSh",  details: "Authentic retro design, high quality, limited stock", image: "images/shoes-clothing-textiles/arsenal-throwback.jpg" },
    { name: "Arsenal Hoodie",       price: "3,700 KSh",  details: "High quality, Sizes L-3XL",                           image: "images/shoes-clothing-textiles/arsenal-hoodie.jpg" },
    { name: "Jeep Laptop Bag",      price: "3,300 KSh",  details: "Size 38*27, fits laptop up to 15 inch",               image: "images/electronics-phones/jeep-laptop.jpg" }
];

const products = [
    { id: 1, name: "Wireless Bluetooth Earbuds", price: "1,850 KSh", details: "HD sound",            image: "https://placehold.co/600x400/eef2f7/1a2a36?text=Earbuds" },
    { id: 2, name: "Smart LED Desk Lamp",        price: "2,450 KSh", details: "Touch control",       image: "https://placehold.co/600x400/eef2f7/1a2a36?text=Lamp" },
    { id: 3, name: "Men's Casual Wristwatch",    price: "1,250 KSh", details: "Water resistant",     image: "https://placehold.co/600x400/eef2f7/1a2a36?text=Watch" },
    { id: 4, name: "Foldable Laptop Stand",      price: "1,950 KSh", details: "Aluminum, ergonomic", image: "https://placehold.co/600x400/eef2f7/1a2a36?text=Laptop+Stand" }
];

/* ---------- Helpers ---------- */
function escapeHtml(str) {
    return String(str ?? '').replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function renderGallery(data, elementId) {
    const grid = document.getElementById(elementId);
    if (!grid) return;

    if (!Array.isArray(data) || data.length === 0) {
        grid.innerHTML = '<p class="empty-msg">No listings yet — check back soon.</p>';
        return;
    }

    grid.innerHTML = data.map(item => `
        <div class="product-card">
            <img class="product-img"
                 src="${escapeHtml(item.image)}"
                 alt="${escapeHtml(item.name)}"
                 loading="lazy"
                 onerror="this.onerror=null;this.src='https://placehold.co/600x400?text=Image+Coming+Soon'">
            <div class="product-info">
                <h3 class="product-title">${escapeHtml(item.name)}</h3>
                <div class="product-price">${escapeHtml(item.price || 'Call for Price')}</div>
                <p class="product-desc">${escapeHtml(item.details || item.desc || 'Quality guaranteed.')}</p>
                <button class="whatsapp-btn" data-name="${escapeHtml(item.name)}" data-price="${escapeHtml(item.price || '')}" data-desc="${escapeHtml(item.details || item.desc || '')}">
                    <i class="fab fa-whatsapp"></i> Inquire
                </button>
            </div>
        </div>
    `).join('');
}

/* Safe getter: returns the array if it exists, else [] */
const safe = (fn) => { try { const v = fn(); return Array.isArray(v) ? v : []; } catch (e) { return []; } };
const getData = (name) => ({
    vehicles:    () => safe(() => vehicles),
    electronics: () => safe(() => electronics),
    household:   () => safe(() => household),
    kitchenware: () => safe(() => kitchenware),
    shoes:       () => safe(() => shoes),
    clothing:    () => safe(() => clothing)
}[name] || (() => []))();

/* ---------- WhatsApp click delegation ---------- */
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.whatsapp-btn');
    if (!btn) return;
    const { name = 'this item', price = '', desc = '' } = btn.dataset;
    const msg = [`*Product:* ${name}`, price ? `*Price:* ${price}` : '', desc ? `*Description:* ${desc}` : '', '', 'I would like to order this.']
        .filter((l, i) => l || i === 3).join('\n');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
});

/* ---------- Render everything on load ---------- */
document.addEventListener('DOMContentLoaded', async () => {
    // Vehicles uploaded through /admin (empty list if the API is unreachable)
    let uploaded = [];
    try {
        const res = await fetch('/api/vehicles');
        if (res.ok) uploaded = await res.json();
    } catch (err) {
        console.warn('Could not load uploaded vehicles:', err);
    }

    renderGallery([...uploaded, ...getData('vehicles')], 'vehiclesGrid');
    renderGallery(getData('electronics'),  'electronicsGrid');
    renderGallery(getData('household'),    'householdGrid');
    renderGallery(getData('kitchenware'),  'kitchenwareGrid');
    renderGallery(getData('shoes'),        'shoesGrid');
    renderGallery(getData('clothing'),     'shoesGrid'); // if you split them
    renderGallery(hotDeals,                'hotDealsGrid');
    renderGallery(hotSale,                 'hotSaleGrid');
    renderGallery(products,                'productsGrid');
});

/* ---------- Inquiry form → WhatsApp ---------- */
const inquiryForm = document.getElementById('inquiryForm');
if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name    = document.getElementById('inquiryName').value.trim();
        const email   = document.getElementById('inquiryEmail').value.trim();
        const product = document.getElementById('inquiryProduct').value.trim();
        const message = document.getElementById('inquiryMessage').value.trim();

        const text = [
            'Hello Kylhab Marketing, I have an inquiry.',
            `Name: ${name}`,
            `Email: ${email}`,
            `Looking for: ${product}`,
            message ? `Details: ${message}` : ''
        ].filter(Boolean).join('\n');

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
        inquiryForm.reset();
    });
}
