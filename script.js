// NEW WHATSAPP NUMBER
const WHATSAPP_NUMBER = "254723652430";

// --- PRODUCT DATA ---
const products = [
    { id: 1, name: "Wireless Earbuds", price: "1,850 KSh", image: "https://placehold.co/600x400?text=Earbuds" },
    { id: 2, name: "Smart LED Lamp", price: "2,450 KSh", image: "https://placehold.co/600x400?text=LED+Lamp" },
    { id: 3, name: "Casual Watch", price: "1,250 KSh", image: "https://placehold.co/600x400?text=Watch" },
    { id: 4, name: "Laptop Stand", price: "1,950 KSh", image: "https://placehold.co/600x400?text=Laptop+Stand" }
];

// --- VEHICLE DATA ---
// NOTE: Make sure your files are named exactly like the 'image' property below
const vehicles = [
    { id: 1, name: "Mazda Axela 2014", price: "1,420,000 KSh", image: "images/autos/mazda-2014.jpg", details: "1500cc Petrol, well maintained" },
    { id: 2, name: "Mazda Axela 2015", price: "Call for Price", image: "images/autos/mazda-2015.jpg", details: "1500cc 2WD, accident free, HUD" },
    { id: 3, name: "Nissan Nismo 2016", price: "1,090,000 KSh", image: "images/autos/nissan-nismo.jpg", details: "1200cc Petrol, original paint" },
    { id: 4, name: "Toyota Axio 2013", price: "1,250,000 KSh", image: "images/autos/axio-2013.jpg", details: "1500cc 2WD, accident free" },
    { id: 5, name: "Subaru Forester SHJ", price: "Call for Price", image: "images/autos/forester.jpg", details: "2009 Model, 2000cc Non-Turbo" },
    { id: 6, name: "Toyota Harrier 240", price: "Call for Price", image: "images/autos/harrier.jpg", details: "Leather interior, 2.4cc Petrol" },
    { id: 7, name: "Mazda Demio 2011", price: "635,000 KSh", image: "images/autos/demio.jpg", details: "Alloy rims, low mileage" },
    { id: 8, name: "Toyota Axio 2010", price: "920,000 KSh", image: "images/autos/axio-2010.jpg", details: "1500cc 2 wheel drive" },
    { id: 9, name: "Toyota Axio 2007", price: "799,000 KSh", image: "images/autos/axio-2007.jpg", details: "1500cc, Finance available" },
    { id: 10, name: "Toyota Fielder 2013", price: "Call for Price", image: "images/autos/fielder-2013.jpg", details: "Original paint, Auto, 2WD" }
];

// --- RENDER LOGIC ---
function renderGallery(data, elementId) {
    const grid = document.getElementById(elementId);
    if (!grid) return;

    grid.innerHTML = data.map(item => `
        <div class="product-card">
            <img class="product-img" src="${item.image}" alt="${item.name}" 
                 onerror="this.src='https://placehold.co/600x400?text=Check+Image+Name'">
            <div class="product-info" style="padding:15px;">
                <h3 class="product-title">${item.name}</h3>
                <div class="product-price" style="color:#2563eb; font-weight:bold; margin: 5px 0;">${item.price}</div>
                <p class="product-desc" style="font-size:0.85rem; color:#666; min-height: 35px;">${item.details || ''}</p>
                <button class="whatsapp-btn" onclick="window.open('https://wa.me/${WHATSAPP_NUMBER}?text=I am interested in ${item.name}')" 
                        style="background:#25d366; color:white; border:none; padding:10px; width:100%; border-radius:5px; cursor:pointer; margin-top:10px; font-weight: 600;">
                    <i class="fab fa-whatsapp"></i> Inquire on WhatsApp
                </button>
            </div>
        </div>
    `).join('');
}

// Start rendering when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderGallery(products, 'productsGrid');
    renderGallery(vehicles, 'vehiclesGrid');
});