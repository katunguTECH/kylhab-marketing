const WHATSAPP_NUMBER = "254723652430";

const products = [
    { id: 1, name: "Wireless Earbuds", price: "1,850 KSh", image: "https://placehold.co/600x400?text=Earbuds" },
    { id: 2, name: "Smart LED Lamp", price: "2,450 KSh", image: "https://placehold.co/600x400?text=LED+Lamp" }
];

const vehicles = [
    { id: 1, name: "Mazda Axela 2014", price: "1,420,000 KSh", image: "images/autos/mazda-2014.jpg", details: "1500cc Petrol • Clean Dark Interior" },
    { id: 2, name: "Mazda Axela 2015", price: "Call for Price", image: "images/autos/mazda-2015.jpg", details: "1500cc 2WD • Accident Free • HUD" },
    { id: 3, name: "Nissan Nismo 2016", price: "1,090,000 KSh", image: "images/autos/nissan-nismo.jpg", details: "1200cc Petrol • Original Paint" },
    { id: 4, name: "Toyota Axio 2013", price: "1,250,000 KSh", image: "images/autos/axio-2013.jpg", details: "1500cc 2WD • Accident Free" },
    { id: 5, name: "Subaru Forester SHJ", price: "Call for Price", image: "images/autos/forester.jpg", details: "2009 Model • 2000cc Non-Turbo" },
    { id: 6, name: "Toyota Harrier 240", price: "Call for Price", image: "images/autos/harrier.jpg", details: "Leather Interior • 2.4cc Petrol" },
    { id: 7, name: "Mazda Demio 2011", price: "635,000 KSh", image: "images/autos/demio.jpg", details: "Alloy Rims • Mechanically Excellent" },
    { id: 8, name: "Toyota Axio 2010", price: "920,000 KSh", image: "images/autos/axio-2010.jpg", details: "1500cc • 2 Wheel Drive" },
    { id: 9, name: "Toyota Axio 2007", price: "799,000 KSh", image: "images/autos/axio-2007.jpg", details: "1500cc • Finance Available" },
    { id: 10, name: "Toyota Fielder 2013", price: "Call for Price", image: "images/autos/fielder-2013.jpg", details: "Original Paint • Auto Gear" }
];

function renderGallery(data, elementId) {
    const grid = document.getElementById(elementId);
    if (!grid) return;
    
    grid.innerHTML = data.map(item => `
        <div class="product-card">
            <img class="product-img" src="${item.image}" alt="${item.name}" 
                 onerror="this.src='https://placehold.co/600x400?text=Image+Coming+Soon'">
            <div class="product-info">
                <h3 class="product-title">${item.name}</h3>
                <div class="product-price">${item.price}</div>
                <p class="product-desc">${item.details || 'Quality guaranteed.'}</p>
                <button class="whatsapp-btn" onclick="window.open('https://wa.me/${WHATSAPP_NUMBER}?text=I am interested in ${item.name}')">
                    <i class="fab fa-whatsapp"></i> Inquire
                </button>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderGallery(vehicles, 'vehiclesGrid');
    renderGallery(products, 'productsGrid');
});