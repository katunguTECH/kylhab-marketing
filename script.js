// --------------------------------------------------------------
// PRODUCTS ARRAY
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
// VEHICLES ARRAY (All 10 Images)
// --------------------------------------------------------------
const vehicles = [
    {
        id: 1,
        name: "Mazda Axela 2014",
        price: "1,420,000 KSh",
        details: "1500cc Petrol, well maintained, clean dark fabric interior",
        image: "images/autos/Mazda Axela 2014 y o m 1500cc Petrol engine Well maintained Clean dark fabric interior 1 420 000 negotiable.jpg",
        whatsappMsg: "Hi, I'm interested in the Mazda Axela 2014."
    },
    {
        id: 2,
        name: "Mazda Axela 2015",
        price: "Call for Price",
        details: "1500cc 2WD, accident free, low mileage, HUD, front & reverse camera",
        image: "images/autos/MAZDA AXELA 2015 MODEL 1500CC 2WD VERY CLEAN ACCIDENT FREE LOW MILEAGE 125K KMS  HEAD UPS DISPLAY FRONT & REVERSE CAMERA.jpg",
        whatsappMsg: "Hi, I'm interested in the Mazda Axela 2015."
    },
    {
        id: 3,
        name: "Nissan Nismo 2016",
        price: "1,090,000 KSh",
        details: "1200cc Petrol, new tyres, original paint, accident free",
        image: "images/autos/QUICKSALE NISSAN NISMO YOM 2016 PETROL 1200CC NEW TYRES ORIGINAL PAINT ACCIDENT FREE FABRIC INTERIOR PRICE 1 09M.jpg",
        whatsappMsg: "Hi, I'm interested in the Nissan Nismo 2016."
    },
    {
        id: 4,
        name: "Toyota Axio 2013",
        price: "1,250,000 KSh",
        details: "1500cc 2WD, accident free",
        image: "images/autos/TOYOTA AXIO 2013 MODEL 1500CC 2WD ACCIDENT FREE PRICE 1.25M.jpg",
        whatsappMsg: "Hi, I'm interested in the Toyota Axio 2013."
    },
    {
        id: 5,
        name: "Subaru Forester SHJ",
        price: "Call for Price",
        details: "2009 Model, accident free, 2000cc Non-Turbo, leather seats",
        image: "images/autos/SUBARU FORESTER MODEL SHJ YOM 2009 MODEL ACCIDENT FREE LOW MILEAGE CAR RATINGS 2000CC NON TURBO DARK LEATHERED SEATS.jpg",
        whatsappMsg: "Hi, I'm interested in the Subaru Forester 2009."
    },
    {
        id: 6,
        name: "Toyota Harrier 240",
        price: "Call for Price",
        details: "Extremely clean, original paint, leather interior, 2.4cc Petrol",
        image: "images/autos/TOYOTA HARRIER 240 FOR SALE EXTREMELY CLEAN ORIGINAL PAINT DARK NEAT LEATHER INTERIOR DESIGN AUTOMATIC TRANSMISSION 2 4CC PETROL.jpg",
        whatsappMsg: "Hi, I'm interested in the Toyota Harrier 240."
    },
    {
        id: 7,
        name: "Mazda Demio 2011",
        price: "635,000 KSh",
        details: "Aftermarket alloy rims, accident free, low mileage",
        image: "images/autos/Mazda Demio 635000 2011 Model Aftermarket Alloy Rims Mechanically Excellent Accident free low mileage very clean dark interior in mint.jpg",
        whatsappMsg: "Hi, I'm interested in the Mazda Demio 2011."
    },
    {
        id: 8,
        name: "Toyota Axio 2010",
        price: "920,000 KSh",
        details: "1500cc 2 wheel drive, well maintained",
        image: "images/autos/Toyota Axio KCL Year 2010 1500cc 2 wheel Asking Price 920 000.jpg",
        whatsappMsg: "Hi, I'm interested in the Toyota Axio 2010."
    },
    {
        id: 9,
        name: "Toyota Axio 2007",
        price: "799,000 KSh",
        details: "1500cc, Trade-in accepted, finance available",
        image: "images/autos/TOYOTA AXIO YR 2007 CC 1500 MODEL ASKING 799 000 TRADE IN ACCEPTED BANK OR SACCO FINANCE AVAILABLE.jpg",
        whatsappMsg: "Hi, I'm interested in the Toyota Axio 2007."
    },
    {
        id: 10,
        name: "Toyota Fielder 2013",
        price: "Call for Price",
        details: "Original Paint, 1500cc, Auto, New Tyres, Alloy Rims",
        image: "images/autos/fielder-2013.jpg",
        whatsappMsg: "Hi, I'm interested in the Toyota Fielder 2013."
    }
];

// --------------------------------------------------------------
// RENDER FUNCTIONS
// --------------------------------------------------------------
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="product-title">${p.name}</div>
            <div class="product-price">${p.price}</div>
            <div class="product-desc">${p.description}</div>
            <button class="whatsapp-btn" onclick="sendWhatsApp('${p.whatsappMsg}')">
                <i class="fab fa-whatsapp"></i> Order on WhatsApp
            </button>
        </div>
    `).join('');
}

function loadVehicles() {
    const grid = document.getElementById('vehiclesGrid');
    if (!grid) return;
    grid.innerHTML = vehicles.map(v => `
        <div class="product-card">
            <img class="product-img" src="${v.image}" alt="${v.name}" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=Check+Filename'">
            <div class="product-title">${v.name}</div>
            <div class="product-price">${v.price}</div>
            <div class="product-desc">${v.details}</div>
            <button class="whatsapp-btn" onclick="sendWhatsApp('${v.whatsappMsg}')">
                <i class="fab fa-whatsapp"></i> Inquire on WhatsApp
            </button>
        </div>
    `).join('');
}

function sendWhatsApp(msg) {
    const phone = "254700000000"; // Replace with your number
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadVehicles();
});