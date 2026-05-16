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
// VEHICLES ARRAY (Autos, Motor Vehicles, Cars, Lorries, Vans)
// --------------------------------------------------------------
const vehicles = [
    {
        id: 1,
        name: "Mazda Axela 2014",
        details: "1500cc Petrol, well maintained, clean dark fabric interior",
        price: "1,420,000 KSh (negotiable)",
        image: "images/autos/Mazda Axela 2014 y o m 1500cc Petrol engine Well maintained Clean dark fabric interior 1 420 000 negotiable.jpg",
        whatsappMsg: "Hi, I'm interested in the Mazda Axela 2014 (1,420,000 KSh negotiable). Please provide more details."
    },
    {
        id: 2,
        name: "Mazda Axela 2015",
        details: "1500cc 2WD, accident free, low mileage (125k kms), HUD, front & rear camera",
        price: "Call for price",
        image: "images/autos/MAZDA AXELA 2015 MODEL 1500CC 2WD VERY CLEAN ACCIDENT FREE LOW MILEAGE 125K KMS HEAD UPS DISPLAY FRONT & REVERSE CAMERA.jpg",
        whatsappMsg: "Hi, I'm interested in the Mazda Axela 2015 with HUD & cameras. Please share price and more info."
    },
    {
        id: 3,
        name: "Nissan Nismo 2016",
        details: "1200cc Petrol, new tyres, original paint, accident free, fabric interior",
        price: "1,090,000 KSh",
        image: "images/autos/QUICKSALE NISSAN NISMO YOM 2016 PETROL 1200CC NEW TYRES ORIGINAL PAINT ACCIDENT FREE FABRIC INTERIOR PRICE 1 09M.jpg",
        whatsappMsg: "Hi, I'm interested in the Nissan Nismo 2016 (1.09M). Please share more details."
    },
    {
        id: 4,
        name: "Toyota Axio 2013",
        details: "1500cc 2WD, accident free",
        price: "1,250,000 KSh",
        image: "images/autos/TOYOTA AXIO 2013 MODEL 1500CC 2WD ACCIDENT FREE PRICE 1.25M.jpg",
        whatsappMsg: "Hi, I'm interested in the Toyota Axio 2013 (1.25M). Please share more photos and condition."
    },
    {
        id: 5,
        name: "Toyota Harrier 240",
        details: "2400cc Petrol, original paint, dark leather interior, automatic transmission, extremely clean",
        price: "Call for price",
        image: "images/autos/TOYOTA HARRIER 240 FOR SALE EXTREMELY CLEAN ORIGINAL PAINT DARK NEAT LEATHER INTERIOR DESIGN AUTOMATIC TRANSMISSION 2 4CC PETROL.jpg",
        whatsappMsg: "Hi, I'm interested in the Toyota Harrier 240 with leather interior. Please share price and more details."
    },
    {
        id: 6,
        name: "Mazda Demio 2011",
        details: "Aftermarket alloy rims, mechanically excellent, accident free, low mileage, clean dark interior",
        price: "635,000 KSh",
        image: "images/autos/Mazda Demio 635000 2011 Model Aftermarket Alloy Rims Mechanically Excellent Accident free low mileage very clean dark interior in mint.jpg",
        whatsappMsg: "Hi, I'm interested in the Mazda Demio 2011 (635k). Please share more details and arrange a viewing."
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

    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const msg = btn.getAttribute('data-msg');
            const phone = "254700000000"; // 🔁 Replace with your real WhatsApp number
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
            window.open(url, '_blank');
        });
    });
}

// --------------------------------------------------------------
// RENDER VEHICLES
// --------------------------------------------------------------
function loadVehicles() {
    const grid = document.getElementById('vehiclesGrid');
    if (!grid) return;

    grid.innerHTML = '';
    vehicles.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = 'product-card'; // reuse same card style
        card.innerHTML = `
            <img class="product-img" src="${vehicle.image}" alt="${vehicle.name}" loading="lazy" onerror="this.src='https://placehold.co/600x400/eef2f7/1a2a36?text=Image+Not+Found'">
            <div class="product-title">${vehicle.name}</div>
            <div class="product-price">${vehicle.price}</div>
            <div class="product-desc">${vehicle.details}</div>
            <button class="whatsapp-btn" data-msg="${vehicle.whatsappMsg}">
                <i class="fab fa-whatsapp"></i> Inquire on WhatsApp
            </button>
        `;
        grid.appendChild(card);
    });

    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const msg = btn.getAttribute('data-msg');
            const phone = "254700000000"; // 🔁 Replace with your real WhatsApp number
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
        const phone = "254700000000"; // 🔁 Replace with your real WhatsApp number
        window.open(`https://wa.me/${phone}?text=${fullMsg}`, '_blank');
    });
}

// --------------------------------------------------------------
// INITIALIZE ON PAGE LOAD
// --------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadVehicles();
    setupInquiryForm();
});