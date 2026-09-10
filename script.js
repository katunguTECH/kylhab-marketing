/* =========================================================
   script.js
   Loads data from the data files (vehicles.js, electronics.js,
   household.js, kitchenware.js, shoes-clothing.js) and renders
   every grid on index.html.
   IMPORTANT: this file must NOT re-declare any of those arrays.
   ========================================================= */

const WHATSAPP_NUMBER = "254723652430";

/* ---- Optional in-file data (keep hot deals / bestsellers here) ---- */
const hotDeals = [];   // fill in if you want items in "BIDHAA KALI KALI"
const hotSale  = [];   // fill in if you want items in "BRAND NEW HOT SALE"

const products = [
    { id: 1, name: "Wireless Earbuds", price: "1,850 KSh", image: "https://placehold.co/600x400?text=Earbuds" },
    { id: 2, name: "Smart LED Lamp",   price: "2,450 KSh", image: "https://placehold.co/600x400?text=LED+Lamp" }
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
                <p class="product-desc">${escapeHtml(item.details || 'Quality guaranteed.')}</p>
                <button class="whatsapp-btn" data-name="${escapeHtml(item.name)}">
                    <i class="fab fa-whatsapp"></i> Inquire
                </button>
            </div>
        </div>
    `).join('');
}

/* Safe getter: returns the array if it exists, else [] */
const getData = (name) => (typeof window[name] !== 'undefined' ? window[name] : []);

/* ---------- WhatsApp click delegation ---------- */
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.whatsapp-btn');
    if (!btn) return;
    const name = btn.dataset.name || 'this item';
    const msg  = `Hello Kylhab Marketing, I am interested in ${name}. Please share more details.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
});

/* ---------- Render everything on load ---------- */
document.addEventListener('DOMContentLoaded', () => {
    renderGallery(getData('vehicles'),     'vehiclesGrid');
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